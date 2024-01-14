const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    namerecruiterdetails: { type: String, required: true },
    emailrecruiterdetails: { type: String, required: true },
    phonerecruiterdetails: { type: String, required: true },
    locationrecruiterdetails: { type: String, required: true },
    prodtyperecruiterdetails: { type: String, required: true },
    freetyperecruiterdetails: { type: String, required: true },
    projrecruiterdetails: { type: String, required: true },
    projtimerecruiterdetails: { type: String, required: true },
    type: { type: String, required: true }
});

// const User = mongoose.model(userSchema);

module.exports = userSchema;