document.addEventListener("DOMContentLoaded", function () {
  // Pages & UI
  const loginPage = document.getElementById("login-page");
  const landingPage = document.getElementById("landing-page");
  const quizContainer = document.getElementById("quiz-container");
  const resultsPage = document.getElementById("results-page");

  const userGreeting = document.getElementById("user-greeting");
  const loginForm = document.getElementById("login-form");

  const questionContainer = document.getElementById("question-container");
  const timerElement = document.getElementById("timer");
  const scoreDiv = document.getElementById("score");
  const correctionsDiv = document.getElementById("corrections");

  const startBtn = document.getElementById("start-btn");
  const prevBtn = document.getElementById("prev-btn");
  const nextBtn = document.getElementById("next-btn");
  const restartBtn = document.getElementById("restart-btn");

// ---- State ----
let currentQuestionIndex = 0;
let userAnswers = [];                  // array of arrays (selected indices) or null
let questionTimer = null;
const QUESTION_TIME = 60;              // seconds per question
let timeLeft = QUESTION_TIME;

// ---- Helper ----
function mmss(t) {
  const m = Math.floor(t / 60).toString().padStart(2, "0");
  const s = (t % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

// ---- Login ----
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  if (!name || !email) {
    alert("Please enter both name and email.");
    return;
  }
  userGreeting.textContent = `Hello, ${name}! Ready for your quiz?`;
  loginPage.classList.remove("active");
  landingPage.classList.add("active");
});

// ---- Start Quiz ----
startBtn.addEventListener("click", function () {
  landingPage.classList.remove("active");
  quizContainer.classList.add("active");
  currentQuestionIndex = 0;
  userAnswers = [];
  showQuestion();
  startTimer();
});

// ---- Navigation ----
prevBtn.addEventListener("click", function () {
  recordAnswer();
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    showQuestion();
    startTimer(); // reset timer on revisit (change if you want to persist)
  }
});

nextBtn.addEventListener("click", function () {
  recordAnswer();
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    showQuestion();
    startTimer();
  } else {
    showResults();
  }
});

restartBtn.addEventListener("click", function () {
  location.reload();
});

// ---- Render Question ----
function showQuestion() {
  const q = questions[currentQuestionIndex];
  const saved = userAnswers[currentQuestionIndex] || [];

  let html = `<h2>Question ${currentQuestionIndex + 1} of ${questions.length}</h2>`;
  html += `<p>${q.question}</p>`;
  html += `<div class="options">`;

  if (q.type === "single" || q.type === "truefalse") {
    q.options.forEach((opt, i) => {
      const checked = saved.includes(i) ? "checked" : "";
      html += `
        <label>
          <input type="radio" name="option" value="${i}" ${checked}> ${opt}
        </label>`;
    });
  } else if (q.type === "multiple") {
    q.options.forEach((opt, i) => {
      const checked = saved.includes(i) ? "checked" : "";
      html += `
        <label>
          <input type="checkbox" name="option" value="${i}" ${checked}> ${opt}
        </label>`;
    });
  }

  html += `</div>`;
  questionContainer.innerHTML = html;

  // Prev button visibility & Next label
  prevBtn.style.display = currentQuestionIndex === 0 ? "none" : "inline-block";
  nextBtn.textContent =
    currentQuestionIndex === questions.length - 1 ? "Finish" : "Next";
}

// ---- Record Answer ----
function recordAnswer() {
  const selected = Array.from(
    document.querySelectorAll('input[name="option"]:checked')
  ).map((el) => parseInt(el.value, 10));
  userAnswers[currentQuestionIndex] = selected.length ? selected : null;
}

// ---- Auto-advance when timer runs out ----
function goToNextQuestion() {
  recordAnswer(); // save answer before moving on
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
    startTimer();
  } else {
    showResults();
  }
}

// ---------------- TIMER ----------------
function startTimer() {
  // ✅ stop any old running timer before starting a new one
  clearInterval(questionTimer);

  timeLeft = QUESTION_TIME;
  updateTimer();

  questionTimer = setInterval(() => {
    timeLeft--;
    updateTimer();
    if (timeLeft <= 0) {
      clearInterval(questionTimer);
      goToNextQuestion(); // move to next question automatically
    }
  }, 1000);
}

function updateTimer() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  timerElement.textContent =
    `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

// ---- Results ----
function showResults() {
  clearInterval(questionTimer);
  quizContainer.classList.remove("active");
  resultsPage.classList.add("active");

  let score = 0;
  correctionsDiv.innerHTML = "";

  questions.forEach((q, index) => {
    const userAns = userAnswers[index];
    let isCorrect = false;

    if (q.type === "single" || q.type === "truefalse") {
      isCorrect = userAns?.[0] === q.answer;
    } else if (q.type === "multiple") {
      const correct = [...q.answers].sort().join(",");
      const selected = userAns ? [...userAns].sort().join(",") : "";
      isCorrect = selected === correct;
    }

    if (isCorrect) score++;

    const yourText =
      userAns && userAns.length
        ? userAns.map((i) => q.options[i]).join(", ")
        : "No answer";

    const correctText =
      q.type === "single" || q.type === "truefalse"
        ? q.options[q.answer]
        : q.answers.map((i) => q.options[i]).join(", ");

    correctionsDiv.innerHTML += `
      <div class="correction">
        <p><strong>Q${index + 1}:</strong> ${q.question}</p>
        <p><strong>Your answer:</strong> <span class="${
          isCorrect ? "correct" : "incorrect"
        }">${yourText}</span></p>
        <p><strong>Correct answer:</strong> <span class="correct">${correctText}</span></p>
        <hr>
      </div>`;
  });

  scoreDiv.textContent = `You scored ${score} out of ${questions.length}`;
}


   const questions = [
  { 
    type: "single", 
    question: "What does HTML stand for?", 
    options: [
      "Hyper Trainer Markup Language", 
      "Hyper Text Markup Language", 
      "Hyper Text Markdown Language", 
      "Hyper Text Machine Language"
    ], 
    answer: 1 
  },
  { 
    type: "single", 
    question: "Which tag is used for paragraphs?", 
    options: ["&lt;p&gt;", "&lt;para&gt;", "&lt;paragraph&gt;", "&lt;text&gt;"], 
    answer: 0 
  },
  { 
    type: "multiple", 
    question: "Which of the following are valid HTML elements?", 
    options: ["&lt;div&gt;", "&lt;span&gt;", "&lt;section&gt;", "&lt;bold&gt;"], 
    answers: [0,1,2] 
  },
  { 
    type: "truefalse", 
    question: "The &lt;header&gt; tag is used to define the page footer.", 
    options: ["True", "False"], 
    answer: 1 
  },
  { 
    type: "single", 
    question: "Which attribute specifies an image source?", 
    options: ["href", "src", "link", "img"], 
    answer: 1 
  },
  { 
    type: "multiple", 
    question: "Which tags are used for lists?", 
    options: ["&lt;ul&gt;", "&lt;ol&gt;", "&lt;li&gt;", "&lt;list&gt;"], 
    answers: [0,1,2] 
  },
  { 
    type: "truefalse", 
    question: "The &lt;title&gt; tag appears inside the &lt;body&gt; element.", 
    options: ["True", "False"], 
    answer: 1 
  },
  { 
    type: "single", 
    question: "Which tag is used for links?", 
    options: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;", "&lt;url&gt;"], 
    answer: 0 
  },
  { 
    type: "multiple", 
    question: "Which attributes can be used in the &lt;a&gt; tag?", 
    options: ["href", "target", "src", "rel"], 
    answers: [0,1,3] 
  },
  { 
    type: "truefalse", 
    question: "The &lt;img&gt; tag always requires a closing tag.", 
    options: ["True", "False"], 
    answer: 1 
  },


  //CSS
  { type: "single", question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], answer: 0 },
  { type: "single", question: "Which property changes text color?", options: ["color", "text-color", "font-color", "background-color"], answer: 0 },
  { type: "multiple", question: "Which properties affect spacing in CSS?", options: ["margin", "padding", "border", "font-size"], answers: [0,1,2] },
  { type: "truefalse", question: "The '#' symbol is used for class selectors.", options: ["True", "False"], answer: 1 },
  { type: "single", question: "Which property makes text bold?", options: ["font-weight", "font-style", "text-decoration", "font-bold"], answer: 0 },
  { type: "multiple", question: "Which CSS properties control text appearance?", options: ["font-size", "font-style", "color", "padding"], answers: [0,1,2] },
  { type: "truefalse", question: "The 'padding' property adds space outside an element.", options: ["True", "False"], answer: 1 },
  { type: "single", question: "Which property sets the background color?", options: ["bgcolor", "background-color", "color", "back-color"], answer: 1 },
  { type: "multiple", question: "Which CSS symbols select elements?", options: ["#", ".", "*", "&"], answers: [0,1,2] },
  { type: "truefalse", question: "The 'text-align' property can only be used on paragraph tags.", options: ["True", "False"], answer: 1 },


  // ---------------- JavaScript (14 mixed)
  { type: "single", question: "Which company developed JavaScript?", options: ["Netscape", "Microsoft", "Google", "Apple"], answer: 0 },
  { type: "single", question: "Which operator is used for strict equality?", options: ["=", "==", "===", "!="], answer: 2 },
  { type: "single", question: "Which keyword declares a variable that cannot be reassigned?", options: ["var", "let", "const", "static"], answer: 2 },
  { type: "single", question: "Which method removes the last element of an array?", options: ["pop()", "push()", "shift()", "unshift()"], answer: 0 },
  { type: "single", question: "What is the default value of an uninitialized variable?", options: ["0", "null", "undefined", "NaN"], answer: 2 },
  { type: "multiple", question: "Which of the following are JavaScript data types?", options: ["String", "Number", "Boolean", "HTML"], answers: [0,1,2] },
  { type: "multiple", question: "Which methods manipulate arrays in JS?", options: ["push()", "pop()", "find()", "slice()"], answers: [0,1,2,3] },
  { type: "single", question: "Which keyword is used to declare a block-scoped variable?", options: ["var", "let", "const", "static"], answer: 1 },
  { type: "single", question: "Which of these is a front-end JS framework?", options: ["React", "Node.js", "Express", "MongoDB"], answer: 0 },
  { type: "single", question: "Which function converts an object to a JSON string?", options: ["JSON.stringify()", "JSON.parse()", "JSON.objectify()", "JSON.convert()"], answer: 0 },
  { type: "single", question: "Which keyword is used for asynchronous functions?", options: ["async", "await", "both async and await", "none"], answer: 2 },
  { type: "single", question: "Which symbol is used for the remainder operator?", options: ["%", "&", "*", "/"], answer: 0 },
  { type: "single", question: "Which method finds an element in an array?", options: ["find()", "filter()", "map()", "forEach()"], answer: 0 },
  { type: "single", question: "Which method adds an element to the end of an array?", options: ["push()", "pop()", "shift()", "unshift()"], answer: 0 },

  // ---------------- Scrum (8 True/False + 1 Multiple)
  { type: "truefalse", question: "Scrum is a framework for agile software development.", options: ["True", "False"], answer: 0 },
  { type: "truefalse", question: "The Scrum Master prioritizes the product backlog.", options: ["True", "False"], answer: 1 },
  { type: "truefalse", question: "Daily Scrum is a 15-minute time-boxed event.", options: ["True", "False"], answer: 0 },
  { type: "truefalse", question: "Sprints can last from 1 to 4 weeks.", options: ["True", "False"], answer: 0 },
  { type: "truefalse", question: "Scrum artifacts include Product Backlog, Sprint Backlog, and Increment.", options: ["True", "False"], answer: 0 },
  { type: "truefalse", question: "Development Team decides how much work to take in a sprint.", options: ["True", "False"], answer: 0 },
  { type: "truefalse", question: "Scrum is a waterfall methodology.", options: ["True", "False"], answer: 1 },
  { type: "multiple", question: "Who participates in Scrum ceremonies?", options: ["Scrum Master", "Product Owner", "Development Team", "Stakeholders"], answers: [0,1,2,3] },

  // ---------------- GitHub (7 True/False + 1 Multiple)
  { type: "truefalse", question: "GitHub uses Git for version control.", options: ["True", "False"], answer: 0 },
  { type: "truefalse", question: "The command 'git push' uploads commits to remote repository.", options: ["True", "False"], answer: 0 },
  { type: "truefalse", question: "The command 'git clone' copies a repository to your local machine.", options: ["True", "False"], answer: 0 },
  { type: "truefalse", question: "The command 'git add' stages files for commit.", options: ["True", "False"], answer: 0 },
  { type: "truefalse", question: "The '.gitignore' file specifies files to exclude from version control.", options: ["True", "False"], answer: 0 },
  { type: "truefalse", question: "The command 'git log' shows the commit history.", options: ["True", "False"], answer: 0 },
  { type: "truefalse", question: "GitHub allows collaboration between multiple developers.", options: ["True", "False"], answer: 0 },
  { type: "multiple", question: "Which actions are common in Git workflow?", options: ["commit", "push", "pull", "merge"], answers: [0,1,2,3] }
   ]})