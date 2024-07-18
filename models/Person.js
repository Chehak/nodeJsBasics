const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  age:{
    type:Number,
  },
  workType:{
    type:String,
    enum:['worker','chef','manager'],
    required:true
  },
  mobile:{
    type:Number,
    required:true
  },
  address:{
    type:String,
  },
  salary:{
    type:Number,
    required:true
  }
});

const Person = mongoose.model('Person',personSchema)

module.exports = Person;