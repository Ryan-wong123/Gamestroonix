//This function is to call the entertaintment api and get all the entertaintment info
function getVideoData() {

    var request = new XMLHttpRequest();
    request.open('GET', video_url, true);

    //This function will be called when data returns from the web api
    request.onload = function () {

        //get all the entertainment records into our entertaintment array
        video_array = JSON.parse(request.responseText);
        //call the function so as to display all entertaintment tiles
        displayVideos();
    };

    //This command starts the calling of the games web api
    request.send();
}

//This function is to display the entertaintment tiles 
function displayVideos() {

    var table = document.getElementById("videoTable");
    var videoCount = 0;
    var message = "";

    table.innerHTML = "";
    totalVideos = video_array.length;
    for (var count = 0; count < totalVideos; count++) {
        var title = video_array[count].title;
        var thumbnail = video_array[count].thumbnail;
        var cell =

            '<div id="videoTileContainer" item=' + count + ' onClick="showVideoDetails(this)">' +
            '<div id="videoThumbnailoverlay">' +
            '<div id="videoThumbnailOverlaytext">' + title + '</div>' +
            '</div>' +
            '<img id="videoThumbnail" src="' + thumbnail + '" width="300em" height="300em" >' +
            '</div>';

        table.insertAdjacentHTML('beforeend', cell);
        videoCount++;
    }

    message = "Total videos " + videoCount;
    document.getElementById("summary").textContent = message;
}

//function to display individual video
function showVideoDetails(element) {
    var item = element.getAttribute("item");
    currentIndexVideo = item;

    document.getElementById("videoTitleIndividual").textContent = video_array[item].title;
    document.getElementById("videoPlatform").textContent = video_array[item].platform;
    document.getElementById("videoGenre").textContent = video_array[item].genre;
    document.getElementById("videoTrailer").src = video_array[item].video_link;

}
