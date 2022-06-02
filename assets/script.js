// Global variable references
//questions div
// list items of answers
// end game div
// timer (span)

//general variables
var score = 0; 
var time;
var timer;
//questions left (by rendering the indexes)
var questionIndex = 0; 
//feedback, correct/incorrect

//event listener for start button
//reference the button
// add event listener and startGame()

//startGame()
// hide intro start screen
//first question rendered to the screen
    //call a function to renderQuestion
//timer start and time display
// startTimer
timer = setInterval(function, 1000);

// renderQuestion()
function renderQuestion(){
// change hidden value of questions div
// variable with array of objects to hold questions
var questions = [
    {
        title: "JS question",
        answerChoices: ["1", "2", '3', '4'],
        correctanswer: "answer" //compare to the users choice 
    }, 
    {
        title: 
    }
]
}

//reference the index of hte question to display on the screen, start at 0 and loop through
//increment the quesiton variable when the previous is answered

// grab html reference to header to append question(0).title to html reference
//grab html reference, push question answers to an array, loop through answers create a list, append to the ul


//add event listeners to the answer choices or div that holds the answer choices using event.target and if matches the correct answer
// listen for click, make event.target a variable, conditional to see if it is equal to the correct answer, provide feedback
var selectedAns = event.target;

if(selectedAns === question[0].correctAnswer){
    // provide correct feedback
    // DOM add an element
}
else {
    // incorrect feedback comes up
    // global time variable is substracted from
}


function startTimer() {
    time--; 
    //remder time to the screen
}

//check timer if === 0 then end quiz=
// if time runs out clear the interval

function endQuiz(){
    // hide questions and display initials form
    //on submit initials send the initials and final score to local storage
    localStorage.setItem(key, value);
    //store scores in an array and stringigy to put in local storage
    // make sure to pull out scores from local storage and put them in an array then push the most recent score to the array and restore

    //display final score page
}

// new javascript file for highscores page
//pull items out of local storage and display on the screen
// have option to clear highscores