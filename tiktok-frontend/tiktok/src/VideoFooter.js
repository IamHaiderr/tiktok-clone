import React from 'react'
import Ticker from'react-ticker'
import './VideoFooter.css'
import MusicNoteIcon from '@mui/icons-material/MusicNote';
function VideoFooter( {channel, description, song} ) {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__text'>
         <h3>
             @{channel}
         </h3>
         <p>
             {description}
         </p>
         <div className='videoFooter__ticker'>
            <MusicNoteIcon
            className='videoFooter__icon'
            />

          <Ticker mode="smooth">
           {({index}) => (
               <>
               <p>
                {song}
               </p>
               </>
           )

           }
          </Ticker>

         </div>
        </div>

        <img className='videoFooter__record' src='https://o.remove.bg/downloads/4e8b261a-8975-4bda-88eb-a21998e68bb3/records-vinyl-png-image-transparent-stock-record-with-no-background-11562931421rntt7o9c6s-removebg-preview.png'  alt=''/>

        </div>
  )
}

export default VideoFooter