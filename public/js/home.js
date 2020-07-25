
$(document).ready(() => {
    const UserID = localStorage.getItem("UserId")


    $.get("/api/profile_data/"+UserID).then((data) => {
        console.log("data: "+JSON.stringify(data))
      $(".user-name").text(data.firstName);
      $(".user-age").text(data.age);
      $(".user-gender").text(data.gender);
      $(".user-orientation").text(data.genderOrientation);
      $(".user-bio").text(data.biography);
    });


    

});

