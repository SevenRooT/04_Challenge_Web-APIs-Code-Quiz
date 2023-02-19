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

// this variable will hold the test answers
let quizArea = document.getElementById("quizArea");

// displays dividing line in div #checkAnswer
let checkAnswer = document.getElementById("checkAnswer");

// these variables create elements on the Final Score page
let scoreTitle = document.createElement("h2");
let finalScore = document.createElement("p");
let initialsField = document.createElement("input");
let scoreSubmit = document.createElement("button");
scoreSubmit.textContent = "Submit Initials and Score"

// these variables create elements on the High Scores page
let highScores = document.createElement("h2");
let scoresList = document.createElement("ul");
let startAgain = document.createElement("button");
let clearScores = document.createElement("button");

// variables set to empty, 0, blank, or false
let scoreCount = 0;
let latestScore = 0;
let highScore = 0;
let testScores = [];
let timer;
let timerCount;
let currentIndex = 0; // references index inside "questionChoicesAnswers" array  

// the test question object

const questionChoicesAnswers = [
 {
  question: "What is Javascript?",
  choices: ["minified java", "object oriented programming language", "client side scripting language"],
  answer: "client side scripting language"
 },
 {
  question: "Which of these is NOT a Javascript Data Type?",
  choices: ["value", "number", "string", "boolean"],
  answer: "value"
 },
 {
  question: "What is the /'this/' keyword in Javascript?",
  choices: ["current selected element", "DOM element", "html element"],
  answer: "DOM element"
 },
 {
  question: "What is the === operator?",
  choices: ["arrow function", "somewhat equal", "strictly equal", "equal"],
  answer: "strictly equal"
 },
]



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
   if (timerCount <= 0 || currentIndex >= questionChoicesAnswers.length) {
    clearInterval(timer);
    scoreScreen();
    quizArea.style.display = "none";
    // testAnswers.style.display = "none";
    startButton.style.display = "none";
    //needs to include items from High Score page
   }
  }
  //  something relating to incorrect answers will subtract time
  if (chosenAnswer = false) {

  }
 }, 1000);
}

/////////////////function renderQuestions()//////////////
// loads questions and multi-choice answers one at a time and leaves until an answer is clicked
function renderQuestion() {
 //  load the current question on the screen
 quizArea.innerHTML = "";
 var newH3 = document.createElement("h3");
 newH3.textContent = questionChoicesAnswers[currentIndex].question;
 quizArea.append(newH3)

 var arrOfChoices = questionChoicesAnswers[currentIndex].choices;
 for (let i = 0; i < arrOfChoices.length; i++) {
  var newLi = document.createElement("button");
  newLi.textContent = arrOfChoices[i];
  newLi.addEventListener("click", answerCheck);

  quizArea.append(newLi);
  newLi.style.display = "block";

 };

}

/////////////////function answerCheck()//////////////////
/* answerCheck function is connected to the #checkAnswer in html, and is called after one of the answers is clicked and checked*/
function answerCheck(event) {
 //checkAnswer.innerHTML = "";
 // console.log(event)
 // console.log(event.target)
 // console.log(event.target.textContent)

 // checks if the textContent of the button clicked matches the currentIndex of questionChoicesAnswers
 /*connected to onClick event in renderQuestions, which call answerCheck() with "event" as its argument to check for correct selection*/
 if (event.target.textContent == questionChoicesAnswers[currentIndex].answer) {

  // correct answer: dynamically display "Correct!" until next question is loaded
  console.log("correct")

  // allows checkAnswer to be displayed (style.css: set to display:none)
  //checkAnswer.style.display = "inline";

  // a timer to flash "Correct!" on the screen when answered correctly
  let answerTimer = setTimeout(() => {
   if (answerTimer >= 0) {
    checkAnswer.append("Correct!");
    checkAnswer.style.display = "inline";
   }
   //if (event = true) {
   //checkAnswer.style.display = "inline";
   //}
   //clearTimeout(answerTimer);
  }, 100);
  //checkAnswer.innerHTML = "";
  // incorrect answer: dynamically displays "Nope!" until next question is loaded 
 } else {
  console.log("incorrect")
  //time decreases
 }

 currentIndex++;
 if (currentIndex < questionChoicesAnswers.length) {
  renderQuestion()
 }



 /* scores need to be collected into a variable "scoreCount"" which is totaled into "latestScore", and then pushed into "testScores" array(which is set to "[]" above), adding points each time answered correctly*/
 checkAnswer.innerHTML = "";
}


//////////////function CollectScores()////////////////
/* function to set scores in DOM, including a counting method for continual tallying*/
// create an array or retrieve the existing scores from localStorage
function collectScores() {
 let scores = JSON.parse(localStorage.getItem("testScores")) || [];

 // an object to hold the key.values pairs of scoreCount and score
 let newScore = {};

 // populating the testScores array
 scores.scoreCount = scoreCount;
 scores.latestScore = latestScore;
 scores.push(newScore);

 // Store the updated array back into localStorage
 localStorage.setItem("testScores", JSON.stringify(scores));

 // looping through "gameScores" to identify highest score

 for (let key in scores) {
  let val = scores[key];
  if (val > highScore) {
   highScore = val;
  }
 }
}



/* scripts relating to when timer runs out -- screen changes to "All done!", "Your Final Score", initials text field, submit button */

//////////////////////function scoreScreen()/////////////////
//function must clear screen first
const scoreScreen = () => {

 // code to generate the new title "All Done!"

 scoreTitle.setAttribute("id", "scoreTitle");
 scoreTitle.textContent = "All Done!";

 // code to generate final score <p>

 finalScore.setAttribute("id", "finalScore");
 finalScore.textContent = "Your Final Score " + latestScore;

 // code to generate the initials field 

 initialsField.setAttribute("type", "text");
 initialsField.setAttribute("id", "initials-field"); //data needs to be captured 
 initialsField.setAttribute("label", "text");

 // code to generate the submit button for initials and score

 scoreSubmit.setAttribute("type", "button");
 scoreSubmit.setAttribute("id", "scoreSubmit");
 scoreSubmit.setAttribute("label", "button");

 // appends all final information to the #quizContainer from html

 quizContainer.appendChild(scoreTitle);
 quizContainer.appendChild(finalScore); //needs a function 
 quizContainer.appendChild(initialsField); //needs a function
 quizContainer.appendChild(scoreSubmit);
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