// Define global variables
    // Buttons
var startButtonEl = document.querySelector("#start-btn");

    // Timer
var timerEl = document.querySelector("#timer");
timerEl.innerHTML = 0
    // Start quiz variables
var startEl = document.getElementById("start-page");
var questionsPageEl = document.getElementById("questions-page");
var answerChoicesEl = document.getElementById("answer-choices");
var gameOver;
    

//Create questions Array

var questions = [
    {
        question: "Arrays in JavaScript can be used to store _________.",
        choices: [{choice: "1. numbers and strings"}, {choice: "2. other arrays"}, {choice: "3. booleans"}, {choice: "4. all of the above"}],
        answer: "4. all of the above"
    },
    {
        question: "The condition in an if/else statement is enclosed with ________.",
        choices: [{choice: "1. quotes"}, {choice: "2. curly brackets"}, {choice: "3. parenthesis"}, {choice: "4. square brackets"}],
        answer: "3. parenthesis"
    },
    {
        question: "Commmonly used data types DO NOT include:",
        choices: [{choice: "1. strings"}, {choice: "2. booleans"}, {choice: "3. alerts"}, {choice: "4. numbers"}],
        answer: "3. alerts"
    },
    {
        question: "A very useful tool used during development ad debugging for printing content to the debugger is:",
        choices: [{choice: "1. JavaScript"}, {choice: "2. terminal/bash"}, {choice: "3. for loops"}, {choice: "4. console.log()"}],
        answer: "4. console.log()"
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        choices: [{choice: "1. commas"}, {choice: "2. curly brackets"}, {choice: "3. quotes"}, {choice: "4. parenthesis"}],
        answer: "3. quotes"
    },
];

// Set timer to start counting down
var setTime = function() {
    secondsLeft = 75;

    var timerInterval = setInterval(function () {
        timerEl.innerHTML = secondsLeft;
        secondsLeft--
        // if all questions get answered, stop timer
        if (gameOver) {
            clearInterval(timerInterval)
        }
        // if time runs out stop timer and move to final score page
        //if(secondsLeft < 0) {
            //displayScore()
            //timerEl.innerHTML = 0
            //clearInterval(secondsLeft)
       // }
     
    }, 1000)
}


// Set questions to appear



// start quiz function
var startQuiz = function() {
    // add and remove css classes to switch from start page to questions page
    startEl.classList.add("hidden");
    startEl.classList.remove("show");
    questionsPageEl.classList.remove("hidden");
    questionsPageEl.classList.add("show");
    // Start timer and show first question
    setTime()
    //setQuestion()
}

var displayScore = function() {

}

// start quiz when start button is clicked
startButtonEl.addEventListener("click",startQuiz)