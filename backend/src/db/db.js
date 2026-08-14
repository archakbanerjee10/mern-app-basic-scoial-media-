const mongoose=require('mongoose');

async function connectDB(){
    await mongoose.connect(process.env.MONGO_URL)

    console.log("connected to database");
}

//exporting the connectDB function 
module.exports=connectDB;