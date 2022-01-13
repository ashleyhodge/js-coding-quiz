// Global Variable
var startContainerEl = document.getElementById("start-container");
var questionContainerEl = document.getElementById("question-container");
var arrQuestions
var gameover
var timerEl = document.querySelector("#timer");
timerEl.innerText = 0;
var startButton = document.querySelector("#start-btn");
var QuestionIndex = 0
var answerButtonsEl = document.getElementById("answer-buttons")
var questionEl = document.getElementById("question")
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")
// Array of questions & answers

var questions = [
    { 
        question: "String values must be enclosed within ______ whenbeing assigned to variables.", 
        choices: [{choice: "1. commas"}, {choice: "2. curly brackets"}, {choice: "3. quotes"}, {choice: "4. parenthesis"}],
        answer: "4. parenthesis", 
      },
    { 
        question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
        choices: [{choice: "1. JavaScript"}, {choice: "2. terminal/bash"}, {choice: "3. for loops"}, {choice: "4. console.log"}],
        answer: "4. console.log", 
    },
    {   
        question: "Commonly used data types DO NOT include: ", 
        choices: [{choice: "1. strings"}, {choice: "2. booleans"}, {choice: "3. alerts"}, {choice: "4. numbers"}],
        answer: "3. alerts", 
    },
    {   
        question: "The condition in an if/else statement is enclosed with _______.",   
        choices: [{choice: "1. quotes"}, {choice: "2. curly brackets"}, {choice: "3. parenthesis"}, {choice: "square brackets"}],
        answer: "3. parenthesis", 
    },
    { 
        question: "Arrays in JavaScript can be used to store ________.", 
        choices: [{choice: "1. numbers and strings"}, {choice: "2. other arrays"}, {choice: "3. booleans"}, {choice: "4. all of the above"}],
        answer: "4. all of the above", 
    },
  ];
// Functions
var startGame = function() {
    //add classes to show/hidden start and quiz screen
    startContainerEl.classList.add("hidden");
    startContainerEl.classList.remove("show");
    questionContainerEl.classList.remove("hidden");
    questionContainerEl.classList.add("show");
    //found through googlefuing - somehow solved problem with displaying questions
    arrQuestions = questions.sort(() => Math.random() - 0.5)
    setTime()
    setQuestion()
  }


  var setTime = function () {
    timeleft = 75;
  
  var timercheck = setInterval(function() {
    timerEl.innerText = timeleft;
    timeleft--
  
    if (gameover) {
        clearInterval(timercheck)
    }
   
    //if (timeleft < 0) {
        //showScore()
        //timerEl.innerText = 0
        //clearInterval(timercheck)
    //}
  
    }, 1000)
  }

  var setQuestion = function() {
  
    displayQuestion(arrQuestions[QuestionIndex])
  }



  var displayQuestion = function(index) {
    questionEl.innerText = index.question
    for (var i = 0; i < index.choices.length; i++) {
        var answerbutton = document.createElement("button")
        answerbutton.innerText = index.choices[i].choice
        answerbutton.classList.add("btn")
        answerbutton.classList.add("answerbtn")
        //answerbutton.addEventListener("click", )
        answerButtonsEl.appendChild(answerbutton)
        }
    };

   


   


        startButton.addEventListener("click", startGame)