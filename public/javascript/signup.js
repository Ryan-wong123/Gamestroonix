//////////////////////////////////////////////////////////////////////////////signup page///////////////////////////////////////////////////////////////////////////////

var response = "";

function signUp() {
    // Create a new object to contain the data in the loginForm and assign the new object to a variable called "credentials".
    var credentials = new Object();

    credentials.username = document.getElementById("username").value;
    credentials.email = document.getElementById("email").value;
    credentials.password = document.getElementById("password").value;

    var request = new XMLHttpRequest();

    request.open("POST", "/profile", true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onload = function () {
        response = JSON.parse(request.responseText);
        
    };

    request.send(JSON.stringify(credentials));
    location.href = "login.html";
}
