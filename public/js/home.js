
$(document).ready(() => {

    $.get("/api/profile_data").then((data) => {
        console.log("data: "+data)
      $(".user-profile").text(data.firstName);
    });


    

});

