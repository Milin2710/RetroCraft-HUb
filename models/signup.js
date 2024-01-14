const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    emailfreelancersignup: { type: String, required: true },
    passwordfreelancersignup: { type: String, required: true },
    type: { type: String, required: true }
});

// const User = mongoose.model(userSchema);
module.exports = userSchema;