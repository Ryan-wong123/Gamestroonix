///////////////////////////////////////////////////////////////////////////modal for individual game search page///////////////////////////////////////////////////////////////
// Get the modal
var gameSearchModal = document.getElementById('gameSearchPage');

// Get the button that opens the modal
var gameSearchBtn = document.getElementById("myUL");

// When the user clicks on the button, open the modal 
gameSearchBtn.onclick = function() {
    gameSearchModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event2) {
    if (event2.target == gameSearchModal) {
        gameSearchModal.style.display = "none";
    }
}

function closeModal(){
    location.reload();
}