const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    email:{
        type: String,
        required:true,
        // match: [/\S+@\S+\.\S+/]
    },
    status:{
        type: String,
        required:true,
    }
});

module.exports = mongoose.model('User', userSchema);