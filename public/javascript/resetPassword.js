//This function sends the profile data to the server for updating
function resetPasswordd() {
    var email = document.getElementById("resetEmail").value;

    var response = confirm("Proceed?");
    if (response == true) {
        var updateProfile_url = profile_url + "/" + email;

        var updatePassword = new XMLHttpRequest(); // new HttpRequest instance to send request to server

        updatePassword.open("PUT", updateProfile_url, true); //The HTTP method called 'PUT' is used here as we are updating data
        updatePassword.setRequestHeader("Content-Type", "application/json");
        updatePassword.password = document.getElementById("resetPassword").value;
   
        updatePassword.send(JSON.stringify(updatePassword));

        console.log("succs");
    }
}
