const db = require("../models");
const nodemailer = require("nodemailer")

module.exports = function (app) {

app.post("/profiles", function(req, res) {

    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Author
    console.log("req.body"+JSON.stringify(req.body))
    db.Profile.findAll({
        where: {
          zip: req.body.zip,
          gender: req.body.gender,
          genderOrientation: req.body.genderOrientation,

        },
        include: [db.User],
        raw: true
      }).then(function(profiles) {
        console.log(profiles)
        res.render("index", {profiles});
      });
    });

app.post("/email", (req,res) => {
  const output = `
  <p><strong>You have a new smasual!</strong></p>
  <h3>Contact Details</h3>
  <ul>
    <li>Name: ${req.body.name}</li>
    <li>phone: ${req.body.phone}</li>
  </ul>
  <h3>Message</h3>
  <p>${req.body.message}</p>
  `
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "smasuals@gmail.com", 
      pass: "abc,123!", 
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  let mailOptions = {
    from: "smasuals@gmail.com", // sender address
    to: 'dspark410@gmail.com', // list of receivers
    subject: 'Smasual Contact Request', // Subject line
    html: output // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (err, res) => {
    if (error) {
        console.log(er);
    } else {
      console.log("Email Sent!")
    }
});
});
}
