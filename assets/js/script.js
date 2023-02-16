// declare variables

// #quizContainer is the id for <main> html
let quizContainer = document.getElementById("quiz-container");

// theses variable will hold the test questions
let testQuestions = document.getElementById("questions");

// these variable will hold the test answers
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

// The init function is called when the page loads 
function init() { }

// startTest function is called when the "start" button is clicked

// startTimer function is called in startTest
function startTimer() {
 timer = setInterval(function () {
  timerCount--;
 })
}

/* answerCheck function is connected to the #checkAnswer in html, and is called after one of the answers is clicked and checked*/

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
 let highScore = 0;
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
// this needs to be inside of a function
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

/* scripts associate with the High Scores page, including the "Start Again" and "Clear High Scores" buttons */
highScores.setAttribute("id", "highScores");

scoresList.setAttribute("id", "scoresList");

startAgain.setAttribute("type", "button");
startAgain.setAttribute("id", "startAgain");

clearScores.setAttribute("type", "button");
clearScores.setAttribute("id", "clearScores");