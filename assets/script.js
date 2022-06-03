// Global variable references
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
var questionIndex = 0; 
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
    },
    {
        title: "What is the correct way to bold text in CSS?",
        answerChoices: ["Font: bold", "Font-size: larger", "Font-weight: bold", "Font-color: black"],
        correctanswer: "Font-weight: bold"
    },
    {
        title: "What feature of Javascript is required to start a function when the user clicks on a certain object?",
        answerChoices: ["querySelector", "addEventListener", "onClick", "userInteraction"],
        correctanswer: "addEventListener"
    },
    {
        title: "What method do you use to display data in the browsers console?",
        answerChoices: ["console.display()", "println()", "console.log()", "showConsole()"],
        correctanswer: "console.log()"
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

        if (time === 0){
            clearInterval(timer);
            window.alert("Time's up!");
            answers.innerHTML = '';
            questions.innerHTML = '';
            endQuiz();
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
   

}


var feedback = document.querySelector(".feedback");
feedback.setAttribute("style", "font-style: italic");

//checks the answer choice and gives feedback based on if it is correct
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

//checks if there are more questions
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



function endQuiz(){
    endScreen.setAttribute("style", "display: block");
    Finalscore.textContent = "Your final score is: " + score; 
}

//submit form for initials
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

    //displays high scores
    displayStorage(); 

});



