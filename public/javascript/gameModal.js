///////////////////////////////////////////////////////////////////////////modal for individual game page///////////////////////////////////////////////////////////////
// Get the modal
var gameModal = document.getElementById('gamePage');

// Get the button that opens the modal
var gameBtn = document.getElementById("gameTable");

// When the user clicks on the button, open the modal 
gameBtn.onclick = function() {
    gameModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event1) {
    if (event1.target == gameModal) {
        gameModal.style.display = "none";
    }
}
