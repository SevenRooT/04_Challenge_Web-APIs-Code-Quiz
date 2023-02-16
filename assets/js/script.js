// declare variables

// #quizContainer is the id for <main> html
let quizContainer = document.getElementById("quiz-container");

// theses variable will hold the test questions
let testQuestions = document.getElementById("questions");

// these variable will hold the test answers
let testAnswers = document.getElementById("answers");

// these variables create elements to be displayed after clock runs out
let finalTitle = document.createElement("h2");
let finalScore = document.createElement("p");
let initialsField = document.createElement("input");
let scoreSubmit = document.createElement("button");

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

// After: "All done!", "Your Final Score", initials text field, submit button
// hiding this screen's elements until timer runs out
if (gameTimer === 0) {

}
// this needs to be inside of a function
//function must clear screen first
const finalScreen = () => {


 // code to generate the new title "All Done!"

 finalTitle.setAttribute("id", "finalTitle");
 finalTitle.textContent = "All Done!";

 // code to generate final score <p>

 finalScore.setAttribute("id", "finalScore");
 finalScore.textContent = "Your Final Score " + "";

 // code to generate the initials field 

 initialsField.setAttribute("type", "text");
 initialsField.setAttribute("id", "initials-field");

 // code to generate the submit button for initials and score

 scoreSubmit.setAttribute("type", "button");
 scoreSubmit.setAttribute("id", "scoreSubmit");

 // appends all final information to the #quizContainer from html

 quizContainer.appendChild(finalTitle);
 quizContainer.appendChild(finalScore); //needs a function 
 quizContainer.appendChild(initialsField); //needs a function
}