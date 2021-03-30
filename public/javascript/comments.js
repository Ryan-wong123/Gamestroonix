function fetchComments() {

    var request = new XMLHttpRequest();
    request.open('GET', comment_url, true);
 
    //This command starts the calling of the comments api
    request.onload = function () {
        //get all the comments records into our comments array
        comment_array = JSON.parse(request.responseText);
    };
    request.send();
}
