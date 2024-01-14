// models.js

const mongoose = require("mongoose");
const UsersignupSchema = require("./models/signup");
const FreelancerdetailsSchema = require("./models/freelancerdetails");
const RecruiterdetailsSchema = require("./models/recruiterdetails");

const Usersignup = mongoose.models.users || mongoose.model('users', UsersignupSchema);
const Freelancerdetails = mongoose.models.freelancerdetails || mongoose.model('freelancerdetails', FreelancerdetailsSchema);
const Recruiterdetails = mongoose.models.recruiterdetails || mongoose.model('recruiterdetails', RecruiterdetailsSchema);

module.exports = {
  Usersignup,
  Freelancerdetails,
  Recruiterdetails
};
