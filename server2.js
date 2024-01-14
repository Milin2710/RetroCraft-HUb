const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const http = require("http");
const WebSocket = require("ws");
const fs = require("fs");

const app = express();
const server = http.createServer(app);
const port = 3000;

mongoose.connect("mongodb://localhost:27017/imgaccounts");

const { Usersignup, Freelancerdetails, Recruiterdetails } = require("./models");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/api/freedata", async (req, res) => {
  try {
    const freedata = await Freelancerdetails.find();
    res.json(freedata);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});
app.get("/api/proddata", async (req, res) => {
  try {
    const proddata = await Recruiterdetails.find();
    res.json(proddata);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});


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
app.get("/chat.css", (req, res) => {
  res.sendFile(path.join(__dirname, "chat.css"));
});
app.get("/chat.js", (req, res) => {
  res.sendFile(path.join(__dirname, "chat.js"));
});
app.get("/responses.js", (req, res) => {
  res.sendFile(path.join(__dirname, "responses.js"));
});
app.get("/img2.jpg", (req, res) => {
  res.sendFile(img2);
});
app.get("/galaxy.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "./profile-page producer/galaxy.jpeg"));
});
app.get("/profile/img8.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "./profile-page producer/img8.jpeg"));
});
app.get("/responsive-profile-page/style.css", (req, res) => {
  res.sendFile(path.join(__dirname, "./responsive-profile-page/style.css"));
});
app.get("/profile/img1.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "./responsive-profile-page/img1.jpeg"));
});
app.get("/profile/img2.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "./responsive-profile-page/img2.jpeg"));
});
app.get("/profile/img3.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "./responsive-profile-page/img3.jpeg"));
});
app.get("/profile/img4.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "./responsive-profile-page/img4.jpeg"));
});
app.get("/profile/img5.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "./responsive-profile-page/img5.jpeg"));
});
app.get("/profile/img6.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "./responsive-profile-page/img6.jpeg"));
});
app.get("/profile/img7.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "./responsive-profile-page/img7.jpeg"));
});
app.get("/profile/galaxy.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "./responsive-profile-page/galaxy.jpeg"));
});
app.get("/responsive-profile-page/galaxy.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "./responsive-profile-page/galaxy.jpeg"));
});
app.get("/profile/projectdescription.html", (req, res) => {
  res.sendFile(
    path.join(__dirname, "./responsive-profile-page/projectdescription.html")
  );
});
app.get("/profile/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./responsive-profile-page/contact.html"));
});
app.get("/profile/About.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./responsive-profile-page/About.html"));
});
app.get("/proDes.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./profile-page producer/proDes.html"));
});
app.get("/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./profile-page producer/contact.html"));
});
app.get("/preProject.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./profile-page producer/preProject.html"));
});
app.get("/preProject.html", (req, res) => {
  res.sendFile(path.join(__dirname, "./profile-page producer/preProject.html"));
});

// const wss = new WebSocket.Server({ server });

// wss.on("headers", (headers, request) => {
//   headers.push("Access-Control-Allow-Origin: *");
//   headers.push(
//     "Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept"
//   );
// });

// wss.on('connection', (socket) => {
//     console.log('Client connected');

//     socket.on('message', (message) => {
//         // const parsedMessage = JSON.parse(message);

//         // if (parsedMessage.type === 'chat') {
//         //     const msg = parsedMessage.content;
//         //     const name = parsedMessage.name;
//         //     console.log(`Received message from ${name}`);

//         //     wss.clients.forEach((client) => {
//         //         // if (client !== socket && client.readyState === WebSocket.OPEN) {
//         //             console.log('1');
//         //             client.send(JSON.stringify({ type: 'chat', content: msg}));
//         //         // }
//         //     });
//         // }
//     });
// });

app.post("/freelancerdetails", async (req, res) => {
  const {
    namefreelancerdetails,
    emailfreelancerdetails,
    phonefreelancerdetails,
    twitterfreelancerdetails,
    pinterestfreelancerdetails,
    facebookfreelancerdetails,
    agefreelancerdetails,
    addressfreelancerdetails,
    typefreelancerdetails,
    prevprojfreelancerdetails,
    aboutfreelancerdetails,
    payfreelancerdetails,
    prefprojfreelancerdetails,
    collabfreelancerdetails,
  } = req.body;

  try {
    // Create a new user
    const newsignup = new Freelancerdetails({
      namefreelancerdetails,
      emailfreelancerdetails,
      phonefreelancerdetails,
      twitterfreelancerdetails,
      pinterestfreelancerdetails,
      facebookfreelancerdetails,
      agefreelancerdetails,
      addressfreelancerdetails,
      typefreelancerdetails,
      prevprojfreelancerdetails,
      aboutfreelancerdetails,
      payfreelancerdetails,
      prefprojfreelancerdetails,
      collabfreelancerdetails,
      type: "freelancer",
    });
    await newsignup.save().then((savedFreelancer) => {
      const generatedId = savedFreelancer._id;

      res.redirect(`/profile/${generatedId}`);
      // Perform other actions as needed
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/profile/:generatedId", (req, res) => {
  res.sendFile(
    path.join(__dirname, "responsive-profile-page", "profilePage.html")
  );
});
app.get("/prodprof/:generatedId", (req, res) => {
  res.sendFile(
    path.join(__dirname, "profile-page producer", "profile.html")
  );
});
app.get("/profile/:generatedId/projectdescription.html", (req, res) => {
  res.sendFile(
    path.join(__dirname, "responsive-profile-page", "projectdescription.html")
  );
});
app.get("/profile/:generatedId/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "responsive-profile-page", "contact.html"));
});
app.get("/:generatedId/proDes.html", (req, res) => {
  res.sendFile(path.join(__dirname, "profile-page producer", "proDes.html"));
});
app.get("/:generatedId/preProject.html", (req, res) => {
  res.sendFile(path.join(__dirname, "profile-page producer", "preProject.html"));
});
app.get("/:generatedId/contact.html", (req, res) => {
  res.sendFile(path.join(__dirname, "profile-page producer", "contact.html"));
});
app.get("/profile/:generatedId/about.html", (req, res) => {
  res.sendFile(path.join(__dirname, "responsive-profile-page", "about.html"));
});
app.get("/:generatedId/landingpage.html", (req, res) => {
  res.sendFile(path.join(__dirname, "landingpagesignedin.html"));
});
app.get("/profile/:generatedId/galaxy.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "responsive-profile-page", "galaxy.jpeg"));
});
app.get("/profile/:generatedId/img4.jpeg", (req, res) => {
  res.sendFile(path.join(__dirname, "responsive-profile-page", "img4.jpeg"));
});
app.get("/:generatedId/:filename", (req, res) => {
  const generatedId = req.params.generatedId;
  const filename = req.params.filename;
  if(filename !== "freedata"){
    const filePath = path.join(__dirname, filename);
    res.sendFile(filePath);
  }
});

app.post("/recruiterdetails", async (req, res) => {
  const {
    namerecruiterdetails,
    emailrecruiterdetails,
    phonerecruiterdetails,
    locationrecruiterdetails,
    prodtyperecruiterdetails,
    freetyperecruiterdetails,
    projrecruiterdetails,
    projtimerecruiterdetails,
  } = req.body;

  try {
    // Create a new user
    const newsignup = new Recruiterdetails({
      namerecruiterdetails,
      emailrecruiterdetails,
      phonerecruiterdetails,
      locationrecruiterdetails,
      prodtyperecruiterdetails,
      freetyperecruiterdetails,
      projrecruiterdetails,
      projtimerecruiterdetails,
      type: "recruiter",
    });
    await newsignup.save().then((savedFreelancer) => {
      const generatedId = savedFreelancer._id;

      res.redirect(`/profile/${generatedId}`);
      // Perform other actions as needed
    });
  } catch (error) {
    console.log(error);
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
      type: "freelancer",
    });
    await newsignup.save();

    res.sendFile(path.join(__dirname, "/signupfree.html"));
  } catch (error) {
    console.log(error);
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
      type: "recruiter",
    });
    await newsignup.save();

    res.sendFile(path.join(__dirname, "/signupJOB.html"));
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});

app.post("/freelancerlogin", async (req, res) => {
  const { emailfreelancerlogin, passwordfreelancerlogin } = req.body;

  try {
    const users = await Freelancerdetails.find();
    const user = users.find(u => u.emailfreelancerdetails.trim() === emailfreelancerlogin.trim());


if (user) {
        const generatedId = user._id;

      res.redirect(`/profile/${generatedId}`);
    } else {
      console.log("User not found with the specified credentials");
    }

  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});
app.post("/recruiterlogin", async (req, res) => {
  const { emailrecruiterlogin, passwordrecruiterlogin } = req.body;

  try {
    const users = await Recruiterdetails.find();
    const user = users.find(u => u.emailrecruiterdetails.trim() === emailrecruiterlogin.trim());


if (user) {
        const generatedId = user._id;

      res.redirect(`/prodprof/${generatedId}`);
    } else {
      console.log("User not found with the specified credentials");
    }

  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error");
  }
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
