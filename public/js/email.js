$(document).ready(() => {

  
    $("#sendhome").on("click", (event) => {
        
        window.location.replace("/home");
    })

    $("#sendmail").on("click", (event) => {
        alert("Email Sent!")
        // $("#name").val("")
        // $("#email").val("")
        // $("#phone").val("")
        // $("#message").val("")
    })

});