//This function is to call the game api and get all the games
function getGameData() {

    var request = new XMLHttpRequest();
    request.open('GET', game_url, true);

    //This function will be called when data returns from the web api
    request.onload = function () {

        //get all the games records into our games array
        game_array = JSON.parse(request.responseText);
   
        //fetch comments from db
        fetchComments();
    
        //call the function so as to display all games tiles for "PC"
        displayGames(platform);

    };

    //This command starts the calling of the games web api
    request.send();

    //get data of user from profile page
    var urlParams = new URLSearchParams(window.location.search);

    //get each data
    id = urlParams.getAll('id');
    username = urlParams.getAll('username');
    email = urlParams.getAll('email');
    password = urlParams.getAll('password');

    //set data for username of profile id which is the foreign key
    document.getElementById('profileId').textContent = id;
    document.getElementById('profileName').textContent = username;

    console.log(id);
    console.log(username);
    console.log(email);
    console.log(password);

}

//This function is to display the games tiles 
function displayGames(platform) {

    var table = document.getElementById("gameTable");
    var gameCount = 0;
    var message = "";

    table.innerHTML = "";
    totalGames = game_array.length;
    for (var count = 0; count < totalGames; count++) {
        if (game_array[count].platform == platform) {
            var thumbnail = game_array[count].thumbnail;
            var title = game_array[count].title;
            var detail = game_array[count].detail;
            var cell =
                '<div class="gamesFlexContainer">' +
                '<img id="gameThumbnail" item=' + count + ' onClick="showGameDetails(this); showGameComments(this);" width="250px" height="175px" src="' + thumbnail + '" />' +
                '<div class="flexVertical">' +
                '<span id="gameTitle">' + title + '</span>' +
                '<br>' +
                '<br>' +
                '<br>' +
                '<span>' + detail + '</span>' +
                '</div>' +
                '</div>';

            table.insertAdjacentHTML('beforeend', cell);
            gameCount++;
        }
    }
    message = gameCount + " Games " + platform;
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

//This function is to display the pc games
function listPCGame() {
    platform = "PC";
    displayGames(platform);
    document.getElementById("pcMenu").classList.add("active");
    document.getElementById("xboxMenu").classList.remove("active");
    document.getElementById("ps4Menu").classList.remove("active");
}

//This function is to display the xbox games
function listXboxGame() {
    platform = "Xbox";
    displayGames(platform);
    document.getElementById("pcMenu").classList.remove("active");
    document.getElementById("xboxMenu").classList.add("active");
    document.getElementById("ps4Menu").classList.remove("active");
}

//This function is to display the ps4 games
function listPS4Game() {
    platform = "PS4";
    displayGames(platform);
    document.getElementById("pcMenu").classList.remove("active");
    document.getElementById("xboxMenu").classList.remove("active");
    document.getElementById("ps4Menu").classList.add("active");
}

//function to display individual game
function showGameDetails(element) {
    var item = element.getAttribute("item");
    currentIndex = item;

    document.getElementById("gameTitleIndividual").textContent = game_array[item].title;
    document.getElementById("gamePlatform").textContent = game_array[item].platform;
    document.getElementById("gameGenre").textContent = game_array[item].genre;
    document.getElementById("gameReleaseDate").textContent = game_array[item].date_released;
    document.getElementById("gameRating").textContent = game_array[item].rating;
    document.getElementById("gameTrailer").src = game_array[item].trailer_link;
    document.getElementById("gameReview").textContent = game_array[item].description;
    document.getElementById("gameScreenshot").src = game_array[item].thumbnail;

}


//This function is to display all the comments of that game 
function showGameComments(element) {
    var item1 = element.getAttribute("item"); //getting item number
    currentIndex = item1;

    document.getElementById("commentBody").textContent = "";

    totalComments =  comment_array.length;
    //for loop to loop through all the comments from db
    for (var i = 0; i < totalComments; i++) {

        //check if the id of comment table is correct with id of game table
        if (comment_array[i].game_id == game_array[item1].game_id) {
            selectedGameId = game_array[item1].game_id;

            //display the review for each user
            var html =
                '<div id="commentBox">' +
                '<p>' + comment_array[i].username + '</p>' +
                '<p>' + comment_array[i].comment + '</p>' +
                '<button id="deleteCommentBtn" item="' + i + '" onclick="deleteComment(this)">Delete</button>' +
                '</div>';

            // insert into comment body
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);
            
        }
    }
}

// Submit or send the new comment to the server to be added.
function addComment() {

    var comments = new Object();

    comments.username = document.getElementById("profileName").innerHTML = username; // Value from HTML input text
    comments.comment = document.getElementById("userComments").value; // Value from HTML input text
    comments.username_id = document.getElementById("profileId").innerHTML = id; // Value from HTML input text 
    comments.game_id = game_array[currentIndex].game_id; // game ID is required by server to create new comment 

    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment
    postComment.open("POST", comment_url, true); //Use the HTTP POST method to send data to server
    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
        fetchComments(); // fetch all comments again so that the web page can have updated comments.
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(comments));

    location.reload();
}

//This function deletes the selected comment in a specific game
function deleteComment(element) {
    var item = element.getAttribute("item"); //get the current item
    var delete_comment_url = comment_url + "/" + comment_array[item].comments_id;
    var deleteComment = new XMLHttpRequest();
    deleteComment.open("DELETE", delete_comment_url, true);
    deleteComment.onload = function () {
        fetchComments();
    };
    deleteComment.send();

    window.location.reload(true);
}