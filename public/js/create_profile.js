//const user = require("../../models/user");

$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then((data) => {
    $(".member-name").text(data.email);
    ID.push(data.id);
  });


  const ID = [];



  $("#create").on("click", (event) => {
    event.preventDefault();

    const birthday = $("#birthday").val()
    const userAge = getAge(birthday)

    function getAge(DOB) {
      var today = new Date();
      var birthDate = new Date(DOB);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
          age = age - 1;
      }
      return age;
  }
    
    console.log("age: "+userAge)

    const userData = {
      firstName: $("#firstName").val(),
      gender: $(".gender").val(),
      genderOrientation: $(".orientation").val(),
      birthday: birthday,
      biography: $("#bioDescription").val(),
      zip: $("#zip").val(),
      UserId: ID[0],
      age: userAge
    };
    if (
      !userData.firstName ||
      !userData.gender ||
      !userData.genderOrientation ||
      !userData.birthday ||
      !userData.biography || 
      !userData.zip ||
      !userData.UserId 
    ) {
      alert("Please fill out all fields");
      return;
    }

    console.log("outside userData: "+JSON.stringify(userData))

    // If we have an email and password we run the loginUser function and clear the form
    createProfile(
      userData.firstName,
      userData.birthday,
      userData.gender,
      userData.genderOrientation,
      userData.biography,
      userData.zip,
      userData.UserId,
      userData.age
    );
  });

  function createProfile(
    firstName,
    birthday,
    gender,
    genderOrientation,
    biography,
    zip,
    UserId, 
    age
  ) {
    $.post("/api/members", {
      firstName: firstName,
      birthday: birthday,
      gender: gender,
      genderOrientation: genderOrientation,
      biography: biography,
      zip: zip,
      UserId: UserId,
      age: age
    })
      .then(() => {
        window.location.replace("/home");
        // If there's an error, log the error
      })
      .catch((err) => {
        console.log(err);
      });
  }
});
