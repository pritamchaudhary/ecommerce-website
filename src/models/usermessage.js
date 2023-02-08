const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    message: String,
    password: String,
    confirm_password: String
});


const User = mongoose.model("User", userSchema);

module.exports = User;
