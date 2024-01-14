const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    namefreelancerdetails: { type: String, required: true },
    emailfreelancerdetails: { type: String, required: true },
    phonefreelancerdetails: { type: String, required: true },
    twitterfreelancerdetails: { type: String, required: true },
    pinterestfreelancerdetails: { type: String, required: true },
    facebookfreelancerdetails: { type: String, required: true },
    agefreelancerdetails: { type: String, required: true },
    addressfreelancerdetails: { type: String, required: true },
    typefreelancerdetails: { type: String, required: true },
    prevprojfreelancerdetails: { type: String, required: true },
    aboutfreelancerdetails: { type: String, required: true },
    payfreelancerdetails: { type: String, required: true },
    prefprojfreelancerdetails: { type: String, required: true },
    collabfreelancerdetails: { type: String, required: true },
    type: { type: String, required: true }
});

// const User = mongoose.model(userSchema);

module.exports = userSchema;