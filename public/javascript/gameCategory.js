//This function is to call the game api and get all the games
function getGameCatergoryData() {

    var request = new XMLHttpRequest();
    request.open('GET', game_url, true);

    //This function will be called when data returns from the web api
    request.onload = function () {

        //get all the games records into our games array
        game_array = JSON.parse(request.responseText);

        //fetch comments from db
        fetchComments();

        //call the function so as to display all games tiles for "latest"
        displayGameCatergory(catergory);

        //call function for searching individual game
        displaySearch(catergory);
    };

    //This command starts the calling of the games web api
    request.send();
}

//This function is to display the games tiles 
function displayGameCatergory(catergory) {

    var table = document.getElementById("gameCatergoryTable");
    var gameCount = 0;
    var message = "";

    table.innerHTML = "";
    totalGames = game_array.length;
    for (var count = 0; count < totalGames; count++) {
        if (game_array[count].catergory == catergory) {
            var thumbnail = game_array[count].thumbnail;
            var title = game_array[count].title;
            var detail = game_array[count].detail;
            var cell =
                '<div class="gamesFlexContainer">' +
                '<img id="gameThumbnail" item=' + count + ' onClick="showGameCategoryDetails(this); showGameComments(this);" width="250px" height="175px" src="' + thumbnail + '" />' +
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
    message = gameCount + " Games " + catergory;
    document.getElementById("summary").textContent = message;
    document.getElementById("parent").textContent = "";
}

//This function is to display the Latest games
function listLatestGame() {
    catergory = "Latest";
    displayGameCatergory(catergory);
    document.getElementById("latestMenu").classList.add("active");
    document.getElementById("popularMenu").classList.remove("active");
    document.getElementById("upcomingMenu").classList.remove("active");
}

//This function is to display the Popular games
function listPopularGame() {
    catergory = "Popular";
    displayGameCatergory(catergory);
    document.getElementById("latestMenu").classList.remove("active");
    document.getElementById("popularMenu").classList.add("active");
    document.getElementById("upcomingMenu").classList.remove("active");
}

//This function is to display the Upcoming games
function listUpcomingGame() {
    catergory = "Upcoming";
    displayGameCatergory(catergory);
    document.getElementById("latestMenu").classList.remove("active");
    document.getElementById("popularMenu").classList.remove("active");
    document.getElementById("upcomingMenu").classList.add("active");
}

//function to display individual game
function showGameCategoryDetails(element) {
    var item = element.getAttribute("item");
    currentIndexCategory = item;

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

    //for loop to loop through all the comments from db
    for (var i = 0; i < comment_array.length; i++) {

        //check if the foreign key id of game in comment table is correct with id of game in game table
        if (comment_array[i].game_id == game_array[item1].game_id) {
            selectedGameId = game_array[item1]._id;

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
    comments.username = document.getElementById("nickname").value; // Value from HTML input text
    comments.comment = document.getElementById("userComments").value; // Value from HTML input text
    comments.username_id = document.getElementById("accId").value; // Value from HTML input text 
    comments.game_id = game_array[currentIndex].game_id; // game ID is required by server to create new comment 

    var postComment = new XMLHttpRequest(); // new HttpRequest instance to send comment
    postComment.open("POST", comment_url, true); //Use the HTTP POST method to send data to server
    postComment.setRequestHeader("Content-Type", "application/json");
    postComment.onload = function () {
        fetchComments(); // fetch all comments again so that the web page can have updated comments.
    };
    // Convert the data in Comment object to JSON format before sending to the server.
    postComment.send(JSON.stringify(comments));

    //clear all input fields
    document.getElementById("userComments").value = "";
    document.getElementById("nickname").value = "";
    document.getElementById("accId").value = "";

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

////////////////////////////////////////////////////////////search for game ////////////////////////////////////////////////////////////////////
//This function is to display the games tiles 
function displaySearch() {

    //get the input data from text box and convert all titles to upper case
    var searchFilter = document.getElementById("myInput").value.toUpperCase();
    var table = document.getElementById("myUL");

    table.innerHTML = "";
    totalGames = game_array.length;
    for (var count = 0; count < totalGames; count++) {
        //check if the game title in db matches the game title from the text box
        if (game_array[count].title.toUpperCase() == searchFilter) {
            var title = game_array[count].title;

            var cell =
                '<p id="searchTitle" item1=' + count + ' onClick="showSearchGameDetails(this); showSearchGameComments(this);">' + title + '</p>';

            table.insertAdjacentHTML('beforeend', cell);
            console.log(title);
        }
    }
}

//function to display individual game
function showSearchGameDetails(element) {

    var item = element.getAttribute("item1");
    currentIndex = item;

    document.getElementById("gameTitleIndividual1").textContent = game_array[item].title;
    document.getElementById("gamePlatform1").textContent = game_array[item].platform;
    document.getElementById("gameGenre1").textContent = game_array[item].genre;
    document.getElementById("gameReleaseDate1").textContent = game_array[item].date_released;
    document.getElementById("gameRating1").textContent = game_array[item].rating;
    document.getElementById("gameTrailer1").src = game_array[item].trailer_link;
    document.getElementById("gameReview1").textContent = game_array[item].description;
    document.getElementById("gameScreenshot1").src = game_array[item].thumbnail;

}

//This function is to display all the comments of that game 
function showSearchGameComments(element) {
    var item1 = element.getAttribute("item1"); //getting item number
    currentIndex = item1;

    document.getElementById("commentBody").textContent = "";

    //for loop to loop through all the comments from db
    for (var i = 0; i < comment_array.length; i++) {

        //check if the id of comment table is correct with id of game table
        if (comment_array[i].game_id == game_array[item1].game_id) {
            selectedGameId = game_array[item1].game_id;

            //display the review for each user
            var html =
                '<div id="commentBox">' +
                '<p>' + comment_array[i].username + '</p>' +
                '<p>' + comment_array[i].comment + '</p>' +
                '</div>';


            // insert into comment body
            document.getElementById("commentBody").insertAdjacentHTML('beforeend', html);

        }
    }
}

// Submit or send the new comment to the server to be added.
function addSearchGameComment() {

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
}