// Global variable references
//questions div
// list items of answers
// end game div
// timer (span)
var timerElement = document.querySelector(".timer-count");
var questions = document.querySelector(".question");
var answers = document.querySelector(".answers");
var endScreen = document.querySelector(".endScreen");
var Finalscore = document.querySelector(".score"); 
var initialsInput = document.querySelector("#initials");
var submitBtn = document.querySelector("#submit-btn");
var clearScoresBtn = document.querySelector(".clear-highscores");

//general variables
var score = 0; 
var time = 60;
var timer;
var questionIndex = 0; 
//questions left (by rendering the indexes)
var questionIndex = 0; 
//feedback, correct/incorrect
var highscoresArr = [];



//array that holds the questions
var questionsArr = [
    {
        title: "String values must be enclosed in __ in javascript.",
        answerChoices: ["quotes", "curly braces", 'parenthesis', 'backslashes'],
        correctanswer: "quotes" //compare to the users choice 
    }, 
    {
        title: "Common data types DO NOT include ___.",
        answerChoices: ["boolean", "alerts", "string", "number"],
        correctanswer: "alerts"
    }, 
    {
        title: "What is CSS used for?",
        answerChoices: ["Writing content", "Styling content", "Handling logic", "User interaction"],
        correctanswer: "Styling content"
    }
]

// variable to control the objects on the start screen
var startScreen = document.querySelector(".start-screen");

function startGame(){
    // clears the homescreen from view
    startScreen.setAttribute("style", "display: none");

    // function for rendering the question to the screen
    renderQuestion();

    //starts the timer
    startTimer();
}

//event listener for start button
var startButton = document.querySelector(".start-button");
startButton.addEventListener("click", startGame);


// startTimer
function startTimer(){
    timer = setInterval(function(){
        time--;
        timerElement.textContent = time;

        if (time > 0){
            //fill out what happens if there is more time left
            //check if the questions are done being answered
        }

        if (time === 0){
            clearInterval(timer);
            // lose function
        }
    }, 1000);
}


// renderQuestion()
function renderQuestion(){
    if (questionIndex < questionsArr.length){
        questions.textContent = questionsArr[questionIndex].title; 
        for (var j = 0; j < 4; j++){
            var li = document.createElement('li');
            var text = document.createTextNode(questionsArr[questionIndex].answerChoices[j]);
            li.appendChild(text);
            answers.appendChild(li);
            answers.setAttribute('style', "list-style: none");
        }
    }
    else {
        endQuiz();
    }
   

// change hidden value of questions div
// variable with array of objects to hold questions

}

//reference the index of hte question to display on the screen, start at 0 and loop through
//increment the quesiton variable when the previous is answered

// grab html reference to header to append question(0).title to html reference
//grab html reference, push question answers to an array, loop through answers create a list, append to the ul


//add event listeners to the answer choices or div that holds the answer choices using event.target and if matches the correct answer
// listen for click, make event.target a variable, conditional to see if it is equal to the correct answer, provide feedback

//when an answer is clicked, give feedback and increment questionIndex, then rerender Question

var feedback = document.querySelector(".feedback");
feedback.setAttribute("style", "font-style: italic");

answers.addEventListener("click", function(event){
    var correct = questionsArr[questionIndex].correctanswer; 
    var selectedAns = event.target.textContent; 
    if(selectedAns === correct){
        // provide correct feedback
        feedback.textContent = "Correct!"; 
        // DOM add an element
    }
    else {
        // incorrect feedback comes up
        feedback.textContent = "Incorrect";
        // global time variable is substracted from
        time = time - 10; 
    }
    setTimeout(function(){
        checkQuestions();
        feedback.textContent = "";
    }, 500); 
    //checks if there are more questions

});

function checkQuestions(){
    if (questionIndex < questionsArr.length - 1) {
        questionIndex++;
        answers.innerHTML = '';
        questions.innerHTML = '';
        renderQuestion();
    }
    else {
        questions.setAttribute("style", "display: none");
        answers.setAttribute("style", "display: none");
        score = time;
        clearInterval(timer);
        endQuiz(); 
    }
}


//check timer if === 0 then end quiz=
// if time runs out clear the interval

function endQuiz(){
    // hide questions and display initials form
    //on submit initials send the initials and final score to local storage
 //   localStorage.setItem(key, value);
    //store scores in an array and stringigy to put in local storage
    // make sure to pull out scores from local storage and put them in an array then push the most recent score to the array and restore
    endScreen.setAttribute("style", "display: block");
    Finalscore.textContent = "Your final score is: " + score; 
    //display final score page
}

// new javascript file for highscores page
//pull items out of local storage and display on the screen
// have option to clear highscores

function submitInit(event){

    var initials = document.getElementById("initials").submit();
    console.log(initials);
}

submitBtn.addEventListener("click", function(event){
    event.preventDefault();

    //checks to make sure initials are input
    if (!initialsInput.value){
        alert("Please enter your initials");
        return;
    }

    //checks if there is any current local storage
    var checkScores = JSON.parse(localStorage.getItem("highscores"));
    if (checkScores) {
        for (var i = 0; i < checkScores.length; i++){
            highscoresArr.push(checkScores[i]);
        }
        localStorage.setItem("highscores", JSON.stringify(highscoresArr)); 
    }

    //adding the current score to the high scores list
    highscoresArr[highscoresArr.length] = {
        initials: initialsInput.value, 
        score: score
    }
    console.log(highscoresArr); 
    localStorage.setItem("highscores", JSON.stringify(highscoresArr));
    location.href = "./highscore.html";

    //under this is unsure



    //displays high scores
    displayStorage(); 

});

var highScoreDisplay = document.querySelector("highScores");


// double check this
function displayStorage(){
    var storedScores = localStorage.getItem("highscores");
    var scoreObjects = JSON.parse(storedScores); 
    
    for (var i = 0; i < scoreObjects.length; i++){
        highScoreDisplay.write(scoreObjects[i] + "<br>");
    }
}

//clears the scores when clicked
function clearScores() {
    highscoresArr = [];

    while (highscoresArr.firstChild){
        highScoresListhighs.removeChild(highScoresList)
    }

    localStorage.clear();
}

clearScoresBtn.addEventListener("click", clearScores); 

