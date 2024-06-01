const mongoose = require('mongoose');

const confirmPassSchema = new mongoose.Schema({
    fullname:{
        type : String,
        required : true
    },
    branch:{
        type : String,
        required : true
    },
    registrationNumber:{
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true 
    },
    phone : {
        type : Number,
        required : true
    },
    reason :{
        type : String,
        required : true
    },
    checkout : {
        type : String,
        required : true
    },
    checkin : {
        type : String,
        required : true
    },
    roomnum:{
        type:Number,
        required : true
    },
    year:{
        type : String,
        required : true

    }
    
    
})

module.exports = mongoose.model('PassSchema' , confirmPassSchema)