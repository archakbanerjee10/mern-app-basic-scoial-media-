// for starting a server using express we need app.js
//we are using dotenc for using our .env file 
require('dotenv').config();
const express = require('express');
const multer = require('multer');
//requiring our database schema

const postModel=require("./models/post.model")
// Require relative to src/
const uploadfile = require('./services/storage.service');

const app = express();
const cors= require('cors')
// Middleware to parse JSON
app.use(express.json());
app.use(cors())
// Setup Multer memory storage
const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  try {
    console.log("Body:", req.body);
    console.log("File:", req.file);

    // Safety check if file was uploaded
    if (!req.file) {
      return res.status(400).json({ error: "No image file provided" });
    }

    const result = await uploadfile(req.file.buffer);
    console.log("Upload Result:", result);

    const post= await postModel.create({
        image:result.url,
        caption:req.body.caption
    })

    // Send a success response back to the client
    return res.status(201).json({
      message: "File uploaded successfully"
    });
  } catch (error) {
    console.error("Upload error:", error);
    return res.status(500).json({ error: error.message });
  }
});

app.get('/posts',async(req,res)=>{
    const posts= await postModel.find()

    return res.status(200).json({
        message:"Posts fetched successfully",
        posts
    })
})
module.exports = app;