

const mongoose = require("mongoose");
const mongoUrl ='mongodb://localhost:27017/hotels';

mongoose.connect(mongoUrl , {})

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected");
})

db.on('disconnected', ()=>{
    console.log("database connection disconnect");
})

module.exports=db