import React, { useState } from 'react'
import './VideoSidebar.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';
function VideoSideBar( {likes, messages, shares} ) {

       const [liked, setLiked] = useState(false); 

  return (
    <div className='videoSidebar'>
      <div className='videoSidebar__icons'>

        {liked ? (
        <FavoriteIcon fontSize='large'
        onClick= {(e) => setLiked(false)} 
  />
        ): (
          <FavoriteBorderIcon fontSize='large'
          onClick= {(e) => setLiked(true)}
          />
        )}
      
      <p> {liked ? likes + 1 : likes} </p>
      </div>

      <div className='videoSidebar__icons'>
      <MessageIcon fontSize='large'/>
      <p> {messages} </p>
      </div>

      <div className='videoSidebar__icons'>
      <ShareIcon fontSize='large'/>
      <p> {shares} </p>
      </div>
      </div>
  )
}

export default VideoSideBar