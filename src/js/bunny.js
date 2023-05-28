let currentIndex = 1;

// Update card image and button states
function updateCard() {
  var cardImage = document.getElementById("cardImage");
  cardImage.src = "../images/BunnyMood/Interviewee"+currentIndex+".png";
  if (currentIndex > 1) {
    var prevButton = document.getElementById("prevButton");
    prevButton.style.display = "block";
  }
  if (currentIndex < 18) {
    var nextButton = document.getElementById("nextButton");
    nextButton.style.display = "block";
  }
}

function clcickPrev(){
    if (currentIndex > 1) {
        currentIndex--;
        updateCard();
    }else{
        var prevButton = document.getElementById("prevButton");
        prevButton.style.display = "none";
    }
    console.log(cardImage.src);
}

function clcickNext(){
    if (currentIndex < 19) {
        currentIndex++;
        updateCard();
    }else{
        var nextButton = document.getElementById("nextButton");
        nextButton.style.display = "none";
    }
    console.log(cardImage.src);
}

// Initial card update
updateCard();
