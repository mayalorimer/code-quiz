//javascript file to manage the highscore page

var clearScoresBtn = document.querySelector(".clear-highscores");
var highScoresList = document.querySelector(".highscoreslist")
var highscoresArr = [];

//clears the scores when clicked
function clearScores() {
    highScoresList.innerHTML = "";
    localStorage.removeItem('highscores');
}

clearScoresBtn.addEventListener("click", clearScores); 

var highScoreDisplay = document.querySelector("highScores");
displayStorage(); 

// double check this
function displayStorage(){
    console.log("hello");
    highscoresArr = JSON.parse(localStorage.getItem("highscores"));
    console.log(highscoresArr); 

    //sorts the array
    highscoresArr.sort(function(a, b){return b.score - a.score});
    
    //loops through the array and prints the scores
    for (var i = 0; i < highscoresArr.length; i++){
        highScoresList.innerHTML += '<li>' + highscoresArr[i].initials + ": " + highscoresArr[i].score + '</li>';
    }
}
