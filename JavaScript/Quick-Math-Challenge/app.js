let score = 0;
let timeLeft = 10;
let lastActivity = Date.now();
const questionEl = document.getElementById("question");
const answerEl = document.getElementById("answer");
const timerEl = document.getElementById("timer");
const scoreEl = document.getElementById("score");
let correctAnswer;

function generateQuestion() {
  let num1 = Math.floor(Math.random() * 10) + 1;
  let num2 = Math.floor(Math.random() * 10) + 1;
  let operators = ["+", "-", "*"];
  let operator = operators[Math.floor(Math.random() * operators.length)];
  correctAnswer = eval(`${num1} ${operator} ${num2}`);
  questionEl.textContent = `${num1} ${operator} ${num2} = ?`;
  answerEl.value = "";
  timeLeft = 10;
}

answerEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    checkAnswer();
    lastActivity = Date.now();
  }
});

function checkAnswer() {
  let userAnswer = parseInt(answerEl.value);
  if (userAnswer === correctAnswer) {
    score += 10;
  } else {
    score -= 5;
  }
  scoreEl.textContent = "Score: " + score;
  generateQuestion();
}

function countdown() {
  timeLeft--;
  timerEl.textContent = `Time Left: ${timeLeft}s`;
  if (timeLeft <= 0) {
    checkAnswer();
  }
}

function checkInactivity() {
  if (Date.now() - lastActivity >= 60000) {
    alert("Game Over! No activity for 1 minute.");
    location.reload();
  }
}

setInterval(countdown, 1000);
setInterval(checkInactivity, 1000);
generateQuestion();
