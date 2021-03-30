///////////////////////////////////////////////////////////////////////////modal for individual game category page///////////////////////////////////////////////////////////////
// Get the modal
var gameCatModal = document.getElementById('gameCategoryPage');

// Get the button that opens the modal
var gameCatBtn = document.getElementById("gameCatergoryTable");

// When the user clicks on the button, open the modal 
gameCatBtn.onclick = function() {
    gameCatModal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event1) {
    if (event1.target == gameCatModal) {
        gameCatModal.style.display = "none";
    }
}

