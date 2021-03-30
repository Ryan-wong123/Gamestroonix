/////////////////////////////////////////////////////////////////////get profile details///////////////////////////////////////////////////////////////////

//This function is to call the profile api and get all the profiles
function getProfileData() {

	var request = new XMLHttpRequest();
	request.open('GET', profile_url, true);

	//This function will be called when data returns from the web api
	request.onload = function () {

		//get all the profile records into our profile array
		profile_array = JSON.parse(request.responseText);

		//call the function so as to display all profile
		getProfile();
	};

	//This command starts the calling of the profile web api
	request.send();
}

// function to get all profile data from db and store it in the backend
function getProfile() {

	totalProfiles = profile_array.length
	for (var count = 0; count < totalProfiles; count++) {

		//make variables global so that i can be called out in other functions
		profile_id = profile_array[count].profile_id;
		username = profile_array[count].username;
		email = profile_array[count].email;
		password = profile_array[count].password;

		console.log(profile_id);
		console.log(username);
		console.log(email);
		console.log(password);

	}

}

//////////////////////////////////////////////////////////////////login page///////////////////////////////////////////////////////////////
var response = "";

function login() {
	// Create a new object to contain the data in the loginForm.
	// We assign the new object to a variable called "credentials".
	var credentials = new Object();

	//set the profile id from profile data
	credentials.id = profile_id;
	credentials.username = document.getElementById("loginUsername").value;
	//set the email from profile data
	credentials.email = email;
	credentials.password = document.getElementById("loginPassword").value;

	var request = new XMLHttpRequest();

	request.open("POST", "/login", true);
	request.setRequestHeader("Content-Type", "application/json");
	request.onload = function () {
		response = JSON.parse(request.responseText);

	};

	//check username valid
	if (credentials.username == username) {

		if (response.message == "1") {
			document.getElementById("loginForm").style.display = "none";
			//parse data from login to profile page 
			window.location = "profile.html?id=" + credentials.id + "&username=" + credentials.username + "&email=" + credentials.email + "&password=" + credentials.password;
		} else {
			document.getElementById("message").textContent = response.message;
		}

	} else {
		console.log("fail to login");
	}
	request.send(JSON.stringify(credentials));

}
