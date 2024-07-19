const mongoose = require("mongoose");
require('dotenv').config();
// const mongoUrl = process.env.MONGODB_LOCAL_SERVER_URL;
const mongoUrl = "mongodb+srv://gchehak18:Chehak1999@cluster0.xfhqjeh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
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
