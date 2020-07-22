const db = require("../models");


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
        include: [db.User]
      }).then(function(results) {
        res.json(results);
      });
    });
}
