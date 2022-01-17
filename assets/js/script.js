// Global Variable
var startContainerEl = document.getElementById("start-container");
var questionContainerEl = document.getElementById("question-container");
var arrQuestions
var gameOver
var timerEl = document.querySelector("#timer");
timerEl.innerText = 0;
var startButton = document.querySelector("#start-btn");
var questionNum = 0
var answerButtonsEl = document.getElementById("question")
var questionEl = document.getElementById("question")
var correctEl = document.getElementById("correct")
var wrongEl = document.getElementById("wrong")
var score = 0
var finalScoreContainer = document.getElementById("final-score-container")
var finalScore = document.getElementById("final-score")
var submitButton = document.querySelector("#submit-btn");
var highScoreContainerEl = document.getElementById("high-score-container")
var listHighScoreEl = document.getElementById("high-score-list")
var formInitials = document.getElementById("initials-form")
var clearScoresButton = document.querySelector("#clear-scores")
var playAgainButton = document.querySelector("#play-again")
var viewHighScoresButton = document.querySelector("#high-score-btn")

// Array of questions & answers
var questions = [
    { 
        question: "String values must be enclosed within ______ when being assigned to variables.", 
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
        choices: [{choice: "1. quotes"}, {choice: "2. curly brackets"}, {choice: "3. parenthesis"}, {choice: "4. square brackets"}],
        answer: "3. parenthesis", 
    },
    { 
        question: "Arrays in JavaScript can be used to store ________.", 
        choices: [{choice: "1. numbers and strings"}, {choice: "2. other arrays"}, {choice: "3. booleans"}, {choice: "4. all of the above"}],
        answer: "4. all of the above", 
    },
  ];
  // Empty High Scores Array
var arrHighScores = [];


// Functions
var startQuiz = function() {
    // change display 
    startContainerEl.classList.add("hidden");
    startContainerEl.classList.remove("show");
    questionContainerEl.classList.remove("hidden");
    questionContainerEl.classList.add("show")
   
    //found through googlefuing - solved problem with displaying questions
    arrQuestions = questions.sort() 
    setTime()
    setQuestion()
  }
// Start time countdown
  var setTime = function () {
    secondsLeft = 75;
    var timeCheck = setInterval(function() {
        timerEl.innerText = secondsLeft;
        secondsLeft--
        if (gameOver) {
            clearInterval(timeCheck)
        }
    if (secondsLeft < 0) {
        displayScore()
        timerEl.innerText = 0
        clearInterval(timeCheck)
        if (questionContainerEl.className = "show") {
            questionContainerEl.classList.remove("show");
            questionContainerEl.classList.add("hidden");
        }

    }
  
    }, 1000)
  }

  var setQuestion = function() {
    displayQuestion(arrQuestions[questionNum])
  }
 // Display 1st question and its answer choices from array
  var displayQuestion = function(num) {
    questionEl.innerText = num.question
    for (var i = 0; i < num.choices.length; i++) {
        var answerButton = document.createElement("button")
        answerButton.innerText = num.choices[i].choice
        answerButton.addEventListener("click", checkAnswer)
        answerButtonsEl.appendChild(answerButton)
        }
       
    };
// Check to see if the answer being clicked is correct or wrong
    var checkAnswer = function(event) {
        var answerSelect = event.target
            if(arrQuestions[questionNum].answer === answerSelect.innerHTML){
                correct()
                score = score + 10;
            }
            else {
                wrong()
                score = score - 5;
                secondsLeft = secondsLeft -10;
            };
     
        // move on to next question in array - ** new choices appearing but old ones not going away **
        questionNum++
         if  (arrQuestions.length > questionNum) {
            setQuestion(questionNum)
        }   
        else {
           gameOver = "true";
           questionContainerEl.classList.add("hidden")
           questionContainerEl.classList.remove("show")
           displayScore();
            }
        
    };
    var correct = function() {
        if (correctEl.className = "hidden") {
            correctEl.classList.remove("hidden")
            correctEl.classList.add("banner")
            wrongEl.classList.remove("banner")
            wrongEl.classList.add("hidden")
            }
        }  
      //display wrong! on screen
      var wrong = function() {
        if (wrongEl.className = "hidden") {
            wrongEl.classList.remove("hidden")
            wrongEl.classList.add("banner")
            correctEl.classList.remove("banner")
            correctEl.classList.add("hidden")
        }
      }
   
      var displayScore = function () {
        questionContainerEl.classList.add("hidden");
        finalScoreContainer.classList.remove("hidden");
        finalScoreContainer.classList.add("show");
      
        var scoreText = document.createElement("h4");
        scoreText.innerText = ("Your final score is " + score + "!");
        finalScore.appendChild(scoreText);
        console.log(scoreText)

        if (correctEl.className = "show") {
            correctEl.classList.remove("show");
            correctEl.classList.add("hidden");
        }
      
        if (wrongEl.className = "show") {
            wrongEl.classList.remove("show");
            wrongEl.classList.add("hidden");
        }
      }  

      var createHighScore = function(event) {
          event.preventDefault()
          var initials = document.querySelector("#initials").value;

          if (!initials) {
              return;
          }
        formInitials.reset();

          var highScore = {
            initials:initials,
            score:score
            }

            arrHighScores.push(highScore);
            arrHighScores.sort((a, b)=> {return b.score - a.score});

            while (listHighScoreEl.firstChild) {
                listHighScoreEl.removeChild(listHighScoreEl.firstChild)
               }

            for (var i = 0; i < arrHighScores.length; i++) {
                var highScoreEl = document.createElement("li");
                highScoreEl.ClassName = "high-score";
                highScoreEl.innerHTML = arrHighScores[i].initials + " - " + arrHighScores[i].score;
                listHighScoreEl.appendChild(highScoreEl);
                }

          displayHighScore();
          saveHighScore();
      }
      // save high scores in local storage
      var saveHighScore = function() {
          localStorage.setItem("highScores", JSON.stringify(arrHighScores))
            }

      //call high scores to load on the page
      var loadHighScores = function () {
        var locHighScores = localStorage.getItem("arrHighScores")
            if (!locHighScores) {
                return false;
            }

        locHighScores = JSON.parse(locHighScores);
        locHighScores.sort((a, b) => {return b.score-a.score})
        

        for (var i = 0; i < locHighScores.length; i++) {
            var highScoreEl = document.createElement("li");
            highScoreEl.ClassName = "high-score";
            highScoreEl.innerHTML = locHighScores[i].initials + " - " + locHighScores[i].score;
            listHighScoreEl.appendChild(highScoreEl);

            arrHighScores.push(locHighScores[i]);
        }
      }

    var displayHighScore = function() {
        highScoreContainerEl.className = "hidden";
        highScoreContainerEl.classList.add("show");
        gameOver = "true"

        if (finalScoreContainer.className = "show") {
            finalScoreContainer.classList.remove("show");
            finalScoreContainer.classList.add("hidden");
        }
       if (startContainerEl.className = "show") {
           startContainerEl.classList.remove("show");
           startContainerEl.classList.add("hidden");  
       }
       if (questionContainerEl.className = "show") {
           questionContainerEl.classList.remove("show");
           questionContainerEl.classList.add("hidden");
       }
    
    }
    var clearHighScores = function() {
        arrHighScores = [];
        while (listHighScoreEl.firstChild) {
            listHighScoreEl.removeChild(listHighScoreEl.firstChild);
        }
        localStorage.clear(arrHighScores);
    }
     
    var playAgain = function () {
        highScoreContainerEl.classList.remove("show")
        highScoreContainerEl.classList.add("hidden")  
        startContainerEl.classList.add("show")
        startContainerEl.classList.remove("hidden")
        finalScoreContainer.removeChild(finalScoreContainer.lastChild)
        questionNum = 0
        timerEl.textContent = 0
        score = 0 
    }



        startButton.addEventListener("click", startQuiz);
        formInitials.addEventListener("click", createHighScore);
        clearScoresButton.addEventListener("click", clearHighScores);
        playAgainButton.addEventListener("click", playAgain);
        viewHighScoresButton.addEventListener("click",displayHighScore)
