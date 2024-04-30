import express from "express";
import mongoose from "mongoose";

import Videos from './dbModel.js'

//app config
const app = express();
const port = process.env.PORT || 9000;

//middlewares
app.use(express.json())
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"),
    res.setHeader("Access-Control-Allow-Headers", "*"),
    next(); 
})
//db config
const connection_url = process.env.MONGO_URI

mongoose.connect(connection_url, {
    //   useNewUrlPareser: true,
    //   useCreateIndex: true,
    //   useFindAndModify: false,
    //   useUnifiedTopology: true,
})

// API end points
app.get('/', (req, res) => {
    res.status(200).send('Hello World')
})

app.get('/v2/posts' , (req, res) => {
       Videos.find({} ,(err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
       })
})

app.post('/v2/posts' , (req, res) => {
    const dbVideos = req.body;
    Videos.create(dbVideos, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

//app listener
app.listen(port , ()=> console.log(`server is listening on localhost: ${port}`));
