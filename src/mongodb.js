const mongoose = require("mongoose")

mongoose.connect("mongodb://localhost:27017/LogInForm")  // To Connect Node to MongoDB Database
.then(()=>{
    console.log("MongoDB Connected Successfully");
})
.catch(()=>{
    console.log("Failed to Connect MongoDB");
})

const LogInSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = new mongoose.model("Collection1", LogInSchema)

module.exports = collection
