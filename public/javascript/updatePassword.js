function profile() {

    //get all data from url
    var urlParams = new URLSearchParams(window.location.search);

    //set the data by getting the keys in the query string
    id = urlParams.getAll('id');
    var username = urlParams.getAll('username');
    var email = urlParams.getAll('email');
    var password = urlParams.getAll('password');

    console.log(id);
    console.log(username);
    console.log(email);
    console.log(password);

}
 

//This function sends the profile data to the server for updating
function updatePassword() {

    var updateProfile_url = profile_url + "/" + id;

    var updatePassword = new XMLHttpRequest(); // new HttpRequest instance to send request to server

    updatePassword.open("PUT", updateProfile_url, true); //The HTTP method called 'PUT' is used here as we are updating data
    updatePassword.setRequestHeader("Content-Type", "application/json");
    updatePassword.password = document.getElementById("updatePasswordd").value;

    updatePassword.send(JSON.stringify(updatePassword));

    
}

