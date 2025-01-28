const mongoose = require("mongoose")

const clientSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    dob:{
        type:Date,
        required:true
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 60
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:Number,
        required:true
    },
    address: {
        type: String,
    },
    instrestedFor:{
        type:String,
        required:true
    },
    yourSkill: {
        type:String,
        required:true
    },
    yourExperience: {
        type: String,
    },
    comments: {
        type: String,
    }


})

module.exports = mongoose.model('Client', clientSchema);