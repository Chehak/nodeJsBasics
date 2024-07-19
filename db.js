const mongoose = require("mongoose");
require('dotenv').config();
const mongoUrl = process.env.MONGODB_LIVE_SERVER_URL;
mongoose.connect(mongoUrl ,  {})
const db = mongoose.connection;
db.on('connected',()=>{
    console.log(mongoUrl,"momgourl");
    console.log("connected");
})

db.on('disconnected', ()=>{
    console.log("database connection disconnect");
})

module.exports=db
