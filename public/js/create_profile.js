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

    //console.log("UserID: " + ID[0]);

    const userData = {
      firstName: $("#firstName").val(),
      gender: $(".gender").val(),
      genderOrientation: $(".orientation").val(),
      birthday: $("#birthday").val(),
      biography: $("#bioDescription").val(),
      biography: $("#imageUpload").val(),
      zip: $("#zip").val(),
      UserId: ID[0]
    };
    if (
      !userData.firstName ||
      !userData.gender ||
      !userData.genderOrientation ||
      !userData.birthday ||
      !userData.biography || 
      !userData.zip ||
      !userData.imageUpload ||
      !userData.UserId 
    ) {
      console.log("must fill out all fields");
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
      userData.imageUpload,
      userData.UserId
    );
  });

  function createProfile(
    firstName,
    birthday,
    gender,
    genderOrientation,
    biography,
    zip,
    UserId
  ) {
    $.post("/api/members", {
      firstName: firstName,
      birthday: birthday,
      gender: gender,
      genderOrientation: genderOrientation,
      biography: biography,
      zip: zip,
      UserId: UserId
    })
      .then(() => {
        window.location.replace("/home");
        // If there's an error, log the error
      })
      .catch((err) => {
        console.log(err);
      });
  }





const storageService = firebase.storage();
const storageRef = storageService.ref();

document.querySelector(".file-select").addEventListener("change", handleFileUploadChange);
document.querySelector(".file-submit").addEventListener("click", handleFileUploadSubmit);

let selectedFile;
function handleFileUploadChange(e) {
  selectedFile = e.target.files[0];
}

function handleFileUploadSubmit(e) {
  const uploadTask = storageRef.child(`images/${selectedFile.name}`).put(selectedFile); //create a child directory called images, and place the file inside this directory
  uploadTask.on("state_changed", (snapshot) => {
  // Observe state change events such as progress, pause, and resume
  }, (error) => {
    // Handle unsuccessful uploads
    console.log(error);
  }, () => {
     // Do something once upload is complete
     console.log("success");
  });
}
});