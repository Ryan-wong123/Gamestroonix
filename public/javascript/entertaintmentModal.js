///////////////////////////////////////////////////////////////////////////modal for individual video page///////////////////////////////////////////////////////////////
// Get the modal
var videoModal = document.getElementById('videoPage');

// Get the button that opens the modal
var videoBtn = document.getElementById("videoTable");

// When the user clicks on the button, open the modal 
videoBtn.onclick = function() {
    videoModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event1){
    if (event1.target == videoModal){
        videoModal.style.display = "none";
    }
}
