function profile() {
    //get data from url
    var urlParams = new URLSearchParams(window.location.search);

    //get data from key of the query string and set it to variables
    id = urlParams.getAll('id');
    var username = urlParams.getAll('username');
    var email = urlParams.getAll('email');
    var password = urlParams.getAll('password');

    //set username when page loads
    document.getElementById('profileName').textContent = username ;

    console.log(id);
    console.log(username);
    console.log(email);
    console.log(password);

    // call out function to display user's review count
    getReviewCount();

    // call out function to display user's recent comments
    showRecentComments();
    
}

// parse data to platform page for comments with foreign key and username of the user
function parseData(){

    var urlParams = new URLSearchParams(window.location.search);

    // Create a new object to contain the data in the loginForm and assign the new object to a variable called "profile".
	var profile = new Object();

	profile.id = urlParams.getAll('id');
	profile.username = urlParams.getAll('username');
	profile.email = urlParams.getAll('email');
    profile.password = urlParams.getAll('password');

    //carry data to platforms page
    window.location = "platforms.html?id=" + profile.id + "&username=" + profile.username + "&email=" + profile.email + "&password=" + profile.password;
	
}

//parse data of userid to update password page
function parseUpdate(){
    var urlParams = new URLSearchParams(window.location.search);

    // Create a new object to contain the data in the loginForm and assign the new object to a variable called "profile".
	var profile = new Object();

	profile.id = urlParams.getAll('id');
	profile.username = urlParams.getAll('username');
	profile.email = urlParams.getAll('email');
    profile.password = urlParams.getAll('password');

    //carry data to update password page
    window.location = "updatePassword.html?id=" + profile.id + "&username=" + profile.username + "&email=" + profile.email + "&password=" + profile.password;
	
}

//get review count of user
function getReviewCount(){

    var reviewCount_url = profileReviewCount_url + "/" + id;
    var reviewCount = new XMLHttpRequest();
    reviewCount.open("GET", reviewCount_url, true);
    reviewCount.setRequestHeader("Content-Type", "application/json");
    reviewCount.onload = function () {
        var reviewCount_array = JSON.parse(reviewCount.responseText);

        //display the review count of the user
        document.getElementById("reviewBox").innerHTML = reviewCount_array[0].ReviewCount;
    };  
    reviewCount.send(JSON.stringify(reviewCount));

}

//get recent comments of user
function showRecentComments(){
    var recentComments_url = profileComments_url + "/" + id;
    var recentComments = new XMLHttpRequest();
    recentComments.open("GET", recentComments_url, true);
    recentComments.setRequestHeader("Content-Type", "application/json");
    recentComments.onload = function () {
        var recentComments_array = JSON.parse(recentComments.responseText)
        
        //display all recent comments left by the user
        var table = document.getElementById("recentComments");    

        table.innerHTML = "";    
        totalComments = recentComments_array.length;    
        for (var count = 0; count < totalComments; count++) 
        {        
            var comment = recentComments_array[count].comment;            
            var title = recentComments_array[count].title; 

            var cell = 
            '<div id="recentCommentBox">'+
                '<p>' + title+ '</p>'+
                '<p>' + comment+ '</p>'+
            '</div>';
            
            table.insertAdjacentHTML('beforeend', cell);                        
        }    
    };  
    recentComments.send(JSON.stringify(recentComments));
}
