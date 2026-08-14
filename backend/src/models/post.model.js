//defining the schema for our database
const mongoose=require('mongoose');

const postschema=new mongoose.Schema({
    image:String,
    caption:String,
})

const postmodel=mongoose.model("post",postschema)

//exporting the created model
module.exports= postmodel;