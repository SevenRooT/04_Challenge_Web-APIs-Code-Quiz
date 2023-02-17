// declare variables

// connects #startButton to function
let startButton = document.getElementById("startButton");

//connects id="highScorePersistent" to display of highest logged score
const highScorePersistent = document.getElementById("highScorePersistent");
let displayHigh = document.getElementById("displayHigh");

// connects id="countDownClock" for displaying
const countDownClock = document.getElementById("countDownClock");
let displayTime = document.getElementById("displayTime");

// #quizContainer is the id for <main> html
let quizContainer = document.getElementById("quizContainer");

// this variable will hold the test questions
let testQuestions = document.getElementById("questions");

// this variable will hold the test answers
let testAnswers = document.getElementById("answers");

// these variables create elements on the Final Score page
let scoreTitle = document.createElement("h2");
let finalScore = document.createElement("p");
let initialsField = document.createElement("input");
let scoreSubmit = document.createElement("button");

// these variables create elements on the High Scores page
let highScores = document.createElement("h2");
let scoresList = document.createElement("ul");
let startAgain = document.createElement("button");
let clearScores = document.createElement("button");

// variables set to empty, 0, blank, or false
let scoreCount = 0;
let latestScore = 0;
let highScore = 0;

let timer;
let timerCount;

// the test question object

const questionsList = {
 question1: "What is Javascript?",
 question2: "Which of these is NOT a Javascript Data Type?",
 question3: "What is the /'this/' keyword in Javascript?",
 question4: "What is the === operator?"
}

const answerList = {
 answers1: ["minified java", "object oriented programming language", "client side scripting language"],
 answers2: ["number", "string", "boolean", "value"],
 answers3: ["current selected element", "html element", "DOM element"],
 answers4: ["somewhat equal", "strictly equal", "equal", "arrow function"]
}

//////////////////function init()/////////////////////
// called when the page loads 
function init() { }

//////////////////function startTest()/////////////////////
// called when the "start" button is clicked
function startTest() {
 //link to id="highScorePersistent" to populate with highScore
 displayHigh.textContent = highScore;
 timerCount = 90;
 renderQuestion()
 startTimer()
}

//////////////////function startTimer()/////////////////////
// called in startTest
function startTimer() {
 timer = setInterval(function () {
  timerCount--;

  displayTime.textContent = timerCount;
  if (timer >= 0) {
   if (timerCount === 0) {
    clearInterval(timer);
    scoreScreen();
   }
  }
  // if something relating to incorrect answers will subtract time
  if (chosenAnswer = false) {

  }
 }, 1000);
}

/////////////////function renderQuestions()//////////////
// displays test questions on the screen
function renderQuestion() {
 // load first question and answer pair
 testQuestions.textContent = questionsList.question1;
 testAnswers.textContent = answerList.answers1;
 //loop through each key.value pair from question
 // create an array with all object keys
 const keys = Object.keys(questionsList);
 // create variable to track current index
 let currentIndex = 0;
 // listen for click on button choice of last answer
 /* must work for two circumstances: load 1st question on test start (should be covered in startTest function) load remaining question each time an answer is clicked */

}



/////////////////function answerCheck()//////////////////
/* answerCheck function is connected to the #checkAnswer in html, and is called after one of the answers is clicked and checked*/
// onClick event checks for correct selection
/* correct answer: dynamically display "Correct!" until next question is loaded*/
/* incorrect answer: dynamically displays Nope! until next question is loaded */



//////////////function CollectScores()////////////////
/* function to set scores in DOM, including a counting method for continual tallying*/
// create an array or retrieve the existing scores from localStorage
function collectScores() {
 let scores = JSON.parse(localStorage.getItem("gameScores")) || [];

 // an object to hold the key.values pairs of scoreCount and score
 let newScore = {};

 // populating the gameScores array
 scores.scoreCount = scoreCount;
 scores.latestScore = latestScore;
 scores.push(newScore);

 // Store the updated array back into localStorage
 localStorage.setItem("gameScores", JSON.stringify(scores));

 // looping through "gameScores" to identify highest score

 for (let key in scores) {
  let val = scores[key];
  if (val > highScore) {
   highScore = val;
  }
 }
}



/* scripts relating to when timer runs out -- screen changes to "All done!", "Your Final Score", initials text field, submit button */

//hiding this screen's elements until timer runs out
if (timerCount === 0) {

}
//////////////////////function scoreScreen()/////////////////
//function must clear screen first
const scoreScreen = () => {


 // code to generate the new title "All Done!"

 scoreTitle.setAttribute("id", "scoreTitle");
 scoreTitle.textContent = "All Done!";

 // code to generate final score <p>

 finalScore.setAttribute("id", "finalScore");
 finalScore.textContent = "Your Final Score " + highScore;

 // code to generate the initials field 

 initialsField.setAttribute("type", "text");
 initialsField.setAttribute("id", "initials-field");

 // code to generate the submit button for initials and score

 scoreSubmit.setAttribute("type", "button");
 scoreSubmit.setAttribute("id", "scoreSubmit");

 // appends all final information to the #quizContainer from html

 quizContainer.appendChild(scoreTitle);
 quizContainer.appendChild(finalScore); //needs a function 
 quizContainer.appendChild(initialsField); //needs a function
}

///////////////////function highScoreScreen()///////////////
// creates final screen after submit button is clicked on scoreScreen
/* scripts associate with the High Scores page, including the "Start Again" and "Clear High Scores" buttons */
function highScoreScreen() {
 highScores.setAttribute("id", "highScores");

 scoresList.setAttribute("id", "scoresList");

 startAgain.setAttribute("type", "button");
 startAgain.setAttribute("id", "startAgain");

 clearScores.setAttribute("type", "button");
 clearScores.setAttribute("id", "clearScores");
}

// Attaches event listener to start button to call startGame function on click
startButton.addEventListener("click", startTest);

// Calls init() so that it fires when page opened
init();


/*---------------------QUESTIONS--------------------*/

// best route to append the highScore to the id="highScorePersistent"
// same same for appending countdown to the id="countDownClock"