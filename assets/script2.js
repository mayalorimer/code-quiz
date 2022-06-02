var clearScoresBtn = document.querySelector(".clear-highscores");

//clears the scores when clicked
function clearScores() {
    localStorage.removeItem('highscores');
}

clearScoresBtn.addEventListener("click", clearScores); 