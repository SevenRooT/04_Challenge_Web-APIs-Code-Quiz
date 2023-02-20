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
let highScores = document.getElementById("highScores");

// these variables create elements on the Final Score page
let scoreTitle = document.createElement("h2");
let finalScore = document.createElement("p");
let initialsField = document.createElement("input");
let scoreSubmit = document.createElement("button");
scoreSubmit.textContent = "Submit Initials and Score"

// these variables create elements on the High Scores page
let highScoresTitle = document.createElement("h2");

let scoresList = document.createElement("ul");
let startAgain = document.createElement("button");

let clearScores = document.createElement("button");


// variables set to empty, 0, blank, or false
let scoreCount = 0;
let latestScore = [];
let highScore = 0;
let testScores_ = [];
let timer;
let timerCount;
let currentIndex = 0; // references index inside "questionChoicesAnswers" array  
let initials = "";

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
 startButton.disabled = true;
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
    collectScores();
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
    checkAnswer.append("Correct");
    checkAnswer.style.display = "inline";
   }
   scoreCount = scoreCount + 10;
  }, 100);

 } else {
  // a timer to flash "Incorrect" on the screen when answered correctly
  let answerTimer = setTimeout(() => {
   if (answerTimer >= 0) {
    checkAnswer.append("Incorrect");
    checkAnswer.style.display = "inline";
   }
  }, 100);
  timerCount = timerCount - 10;
 }

 currentIndex++;
 if (currentIndex < questionChoicesAnswers.length) {
  renderQuestion()
 }
 /* scores need to be collected into a variable "scoreCount"" which is totaled into "latestScore", and then pushed into "testScores_" array(which is set to "[]" above), adding points each time answered correctly*/
 checkAnswer.innerHTML = "";
}


//////////////function CollectScores()////////////////
/* function to set scores in DOM, including a counting method for continual tallying*/
// create an array or retrieve the existing scores from localStorage
function collectScores() {
 latestScore = scoreCount;

 console.log(scoreCount);
 console.log(latestScore);

 let scores = JSON.parse(localStorage.getItem("testScores_")) || [];

 //for (let thisScore in latestScore) {
 //let val = latestScore[thisScore];
 //if (val <= 0) {
 // latestScore[i] = val;
 //}
 //};

 scoreSubmit.addEventListener("click", addUser, true);
 scoreSubmit.addEventListener("click", highScoreScreen, true);

 function addUser() {

  initials = document.getElementById("initialsField").value;
  let addInitials = "testScores_" + initials;
  scores.latestScore = latestScore;
  scores.push(latestScore);
  localStorage.setItem(addInitials, JSON.stringify(scores));
  //scores++;
 };

 // looping through "gameScores" to identify highest score

 for (let key in scores) {
  let val = scores[key];
  if (val > highScore) {
   highScore = val;
  }
  console.log(highScore);
 }
}

//////////////////////function scoreScreen()/////////////////
/* scripts relating to when timer runs out -- screen changes to "All done!", "Your Final Score", initials text field, submit button */
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
 initialsField.setAttribute("id", "initialsField"); //data needs to be captured 
 initialsField.setAttribute("label", "text");


 // code to generate the submit button for initials and score

 scoreSubmit.setAttribute("type", "button");
 scoreSubmit.setAttribute("id", "scoreSubmit");
 scoreSubmit.setAttribute("label", "button");

 // appends all final information to the #quizContainer from html

 quizContainer.appendChild(scoreTitle);
 quizContainer.appendChild(finalScore);
 quizContainer.appendChild(initialsField); //needs a function
 quizContainer.appendChild(scoreSubmit);

 // listens for submit button to be clicked, signaling that the initials have be answered

 // gets initials so they can be appended to testScores_ in DOM

}

///////////////////function highScoreScreen()///////////////
// eventListener assigning button click of scoreSubmit to hide scoreScreen and show highScoreScreen

// creates final screen after submit button is clicked on scoreScreen
/* scripts associate with the High Scores page, including the "Start Again" and "Clear High Scores" buttons */
const highScoreScreen = () => {
 // hides quizArea items
 quizArea.innerHTML = "";
 startButton.style.display = "none";
 // hides scoreScreen
 checkAnswer.style.display = "none";
 scoreTitle.style.display = "none";
 finalScore.style.display = "none";
 initialsField.style.display = "none";
 scoreSubmit.style.display = "none";
 // displays highScore items
 highScores.style.display = "block";
 highScoresTitle.textContent = "High Scores";
 startAgain.textContent = "Test Again";
 clearScores.textContent = "Clear High Scores"

 scoresList.setAttribute("id", "scoresList");

 startAgain.setAttribute("type", "button");
 startAgain.setAttribute("id", "startAgain");
 startAgain.setAttribute("label", "button");

 clearScores.setAttribute("type", "button");
 clearScores.setAttribute("id", "clearScores");
 clearScores.setAttribute("label", "button");
}

// Attaches event listener to start button to call startGame function on click
startButton.addEventListener("click", startTest);

// Calls init() so that it fires when page opened
init();


/*---------------------QUESTIONS--------------------*/
