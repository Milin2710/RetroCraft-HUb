const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    about: { type: String, required: true },
    twitter: { type: String, required: true },
    pinterest: { type: String, required: true },
    facebook: { type: String, required: true }
});

// const User = mongoose.model(userSchema);

module.exports = userSchema;