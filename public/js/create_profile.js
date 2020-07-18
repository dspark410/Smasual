$(document).ready(() => {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(data => {
    $(".member-name").text(data.email);
  });

  $("#create").on("click", event => {
    event.preventDefault();
   
    const userData = {
      firstName: $("#firstName").text(),
      gender: $(".gender").text(),
      genderOrientation: $(".orientation").text(),
      birthday: $("#birthday").val(),
      biography: $("#bioDescription").text()
    };
    if (!userData.firstName || !userData.gender || !userData.genderOrientation || !userData.birthday || !userData.biography) {
      console.log("inside:" + userData)
      return;
    }
   
    // If we have an email and password we run the loginUser function and clear the form
    createProfile(userData.firstName, userData.birthday, userData.gender, userData.genderOrientation, userData.biography);
  
  });

  function createProfile(firstName, birthday, gender, genderOrientation, biography) {
    $.put("/api/members", {
      firstName: firstName,
      birthday: birthday,
      gender: gender,
      genderOrientation: genderOrientation,
      biography: biography
    })
    .then(() => {
      window.location.replace("/home");
      // If there's an error, log the error
    })
    .catch(err => {
      console.log(err);
    });
  }
});






