const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const port = 3000;

mongoose.connect("mongodb://localhost:27017/imgaccounts");

const { Usersignup, Freelancerdetails, Recruiterdetails } = require("./models");



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const css1 = path.join(__dirname, "styles1.css");
const css = path.join(__dirname, "style.css");
const freelancersignupform = path.join(__dirname, "signupJOB.css");
const img2 = path.join(__dirname, "img2.jpg");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/landingpage.html"));
});
app.get("/freelancersign.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/freelancersign.html"));
});
app.get("/recruitersign.html", (req, res) => {
  res.sendFile(path.join(__dirname, "/recruitersign.html"));
});

app.get("/styles1.css", (req, res) => {
  res.sendFile(css1);
});
app.get("/style.css", (req, res) => {
  res.sendFile(css);
});
app.get("/signupJOB.css", (req, res) => {
  res.sendFile(freelancersignupform);
});
app.get("/img2.jpg", (req, res) => {
  res.sendFile(img2);
});

app.post("/freelancerdetails", async (req, res) => {
  const { namefreelancerdetails, emailfreelancerdetails , phonefreelancerdetails, medialinksfreelancerdetails, agefreelancerdetails, typefreelancerdetails, prevprojfreelancerdetails, aboutfreelancerdetails, payfreelancerdetails, prefprojfreelancerdetails, collabfreelancerdetails} = req.body;

  try {
    // Create a new user
    const newsignup = new Freelancerdetails({
      namefreelancerdetails, emailfreelancerdetails , phonefreelancerdetails, medialinksfreelancerdetails, agefreelancerdetails, typefreelancerdetails, prevprojfreelancerdetails, aboutfreelancerdetails, payfreelancerdetails, prefprojfreelancerdetails, collabfreelancerdetails,
      type: 'freelancer'
    });
    await newsignup.save();

    res.sendFile(path.join(__dirname, "/landingpage.html"));
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error");
  }
});
app.post("/recruiterdetails", async (req, res) => {
  const { namerecruiterdetails, emailrecruiterdetails , phonerecruiterdetails, locationrecruiterdetails, prodtyperecruiterdetails, freetyperecruiterdetails, projrecruiterdetails, projtimerecruiterdetails} = req.body;

  try {
    // Create a new user
    const newsignup = new Recruiterdetails({
      namerecruiterdetails, emailrecruiterdetails , phonerecruiterdetails, locationrecruiterdetails, prodtyperecruiterdetails, freetyperecruiterdetails, projrecruiterdetails, projtimerecruiterdetails,
      type: 'recruiter'
    });
    await newsignup.save();

    res.sendFile(path.join(__dirname, "/landingpage.html"));
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error");
  }
});
app.post("/freelancersignup", async (req, res) => {
  const { emailfreelancersignup, passwordfreelancersignup } = req.body;

  try {
    // Create a new user
    const newsignup = new Usersignup({
      emailfreelancersignup,
      passwordfreelancersignup,
      type: 'freelancer'
    });
    await newsignup.save();

    res.sendFile(path.join(__dirname, "/signupfree.html"));
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error");
  }
});
app.post("/recruitersignup", async (req, res) => {
  const { emailrecruitersignup, passwordrecruitersignup } = req.body;

  try {
    // Create a new user
    const newsignup = new Usersignup({
      emailfreelancersignup: emailrecruitersignup,
      passwordfreelancersignup: passwordrecruitersignup,
      type: 'recruiter'
    });
    await newsignup.save();

    res.sendFile(path.join(__dirname, "/signupJOB.html"));
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error");
  }
});




app.post("/freelancerlogin", async (req, res) => {
  const { emailfreelancerlogin, passwordfreelancerlogin } = req.body;

  try {
    const users = await Usersignup.find();

    const user = users.find(
      (u) => u.emailfreelancersignup === emailfreelancerlogin && u.passwordfreelancersignup === passwordfreelancerlogin
    );

    if (user) {
      // console.log("User exists:", user);
      res.sendFile(path.join(__dirname, "/landingpage.html"));
    } else {
      res.sendFile(path.join(__dirname, "/freelancersign.html"));
    }

    // res.sendFile(path.join(__dirname, "signupJOB.css"));
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error");
  }
});
app.post("/recruiterlogin", async (req, res) => {
  const { emailrecruiterlogin, passwordrecruiterlogin } = req.body;

  try {
    const users = await Usersignup.find();

    const user = users.find(
      (u) => u.emailfreelancersignup === emailrecruiterlogin && u.passwordfreelancersignup === passwordrecruiterlogin
    );

    if (user) {
      // console.log("User exists:", user);
      res.sendFile(path.join(__dirname, "/landingpage.html"));
    } else {
      res.sendFile(path.join(__dirname, "/recruitersign.html"));
    }

    // res.sendFile(path.join(__dirname, "signupJOB.css"));
  } catch (error) {
    console.log(error)
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});