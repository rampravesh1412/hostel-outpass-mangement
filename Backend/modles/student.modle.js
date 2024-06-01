const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
    firstname : {
        type : String,
        trim : true,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        trim : true,
        unique : true,
        required : true
    },
    password : {
        type : String,
        required : true
    }
    ,
    role : {
        type : String,
        default : 'student'
    }
})

module.exports = mongoose.model('Student', studentSchema);