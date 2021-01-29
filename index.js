var readlineSync = require("readline-sync");

var score = 0;

// Data of Highscore

var highscore = [
  {
    name: "Varu",
    score: 4,
  },
  {
    name: "Evil_Varu",
    score: 5,
    How: "Because Evil is always a step ahead !",
  },
];

//Array of Objects

var question = [
  {
    question: "What color of uniform does Arrow wear in his series ?",
    answer: "Green",
  },
  {
    question: "Whom does he fall in love while he was stranded on the Island ?",
    answer: "Shado",
  },
  {
    question: "What is the actual name of Arrow ?",
    answer: "Olvier Queen",
  },
];

//Welcome function
function welcome() {
  var userName = readlineSync.question("What is Your Name Hooman! ?\n");

  console.log(
    "Welcome " +
      userName +
      " Lets see if you know something about the ArrwoVerse series in DC, Please feel free to Google The answers if you are unfamiliar with this TV series, Consider it as a fun open-book Quiz"
  );
}

//Play Function

function play(question, answer) {
  var userName = readlineSync.question(question);

  if (userName.toUpperCase === answer.toUpperCase) {
    console.log("right !");
    score = score + 1;
  } else {
    console.log("wrong :(");
  }

  console.log("Current Score: " + score);
  console.log("-----------------");
}

//Game Function

function game() {
  for (let i = 0; i < question.length; i++) {
    const currentQuestion = question[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

//Score Function

function showScores() {
  console.log("Awesome ! You scored " + score);
  console.log("Check Out The High Score Of Others");

  highscore.map((score) => console.log(score.name, ":", score.score));
}

welcome();
game();
showScores();
