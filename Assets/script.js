var startButton = document.querySelector('#start-button');
var timerCount = document.querySelector('#timer')
var nextButton = document.querySelector('#next-button')
var highscoreButton = document.querySelector('#highscore-button')
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todos = [{
    name: "Boss", score: 10
}];
var secondsLeft = 15
var timerSpan = document.querySelector('#your-record')
var myTimer;
var finishTime = secondsLeft;
// when click button, start quiz
startButton.addEventListener('click', function(event){
    event.preventDefault
    startQuiz()

})

// click button, go to highscore section
highscoreButton.addEventListener('click', function(){
    highscoreTab()
})

function get(x){
    return document.getElementById(x);
}

function homescreen(){
    document.querySelector('.section-one').style.display = 'block'
    document.querySelector('.game-section').style.display = 'none'
    document.querySelector('.highscore-section').style.display = 'none'
    document.querySelector('.form-section').style.display = 'none'
}

var myQuestions = [
    {
    question: "Who invented JavaScript?",
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
    answer: "c"
    },
    {
    question: "Which one of these is a JavaScript package manager?",
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
    answer: "c"
    },
    {
    question: "Which tool can you use to ensure code quality?", 
        a: "Angular",
        b: "jQuery",
        c: "ESLint",
    answer: "c"
    }
];

// when start quiz, intro page vanish, show timer and question
function startQuiz() {
    document.querySelector('.section-one').setAttribute('style', 'display: none')
    document.querySelector('.game-section').style.display = 'block'
    
    startTimer()
    startQuestion1()
}
// start timer
function startTimer(){
    myTimer = setInterval(function(){

        secondsLeft = secondsLeft - 0.05 ;
        secondsLeft = secondsLeft.toFixed(2);

        timerCount.textContent = `Timer: ${secondsLeft} seconds left`;

        if (secondsLeft <= 0){
            finishTime = secondsLeft;
            clearInterval(myTimer);
            homescreen()
        }
    }, 50); 
}
function wrongAnswer(){
    secondsLeft = secondsLeft - 2
}
// questionaire + answer after answering, minus time when answer wrong
function startQuestion1(){
    myAnswers = get("myanswers")
    pos = [0]

    get("questiontitle").innerHTML = "Question "+"1"+" out of "+ myQuestions.length;

    question = myQuestions[pos].question;
    chA = myQuestions[pos].a;
    chB = myQuestions[pos].b;
    chC = myQuestions[pos].c;

    myAnswers.innerHTML = "<h4>"+question+"</h4>";

    myAnswers.innerHTML += "<label> <input id='choiceA' type='button' name='choices' value='A'> "+chA+"</label><br>";
    myAnswers.innerHTML += "<label> <input id='choiceB' type='button' name='choices' value='B'> "+chB+"</label><br>";
    myAnswers.innerHTML += "<label> <input id='choiceC' type='button' name='choices' value='C'> "+chC+"</label><br>";

    var choiceA = document.querySelector('#choiceA')
    var choiceB = document.querySelector('#choiceB')
    var choiceC = document.querySelector('#choiceC')
    choiceA.addEventListener('click', wrongAnswer)
    choiceB.addEventListener('click', wrongAnswer)
    choiceC.addEventListener('click', startQuestion2)


// need help on linking button on wrong - right answers
// need help on locking time after player finish
}
function startQuestion2(){

    myAnswers = get("myanswers")
    pos = [1]

    get("questiontitle").innerHTML = "Question "+"2"+" out of "+ myQuestions.length;

    question = myQuestions[pos].question;
    chA = myQuestions[pos].a;
    chB = myQuestions[pos].b;
    chC = myQuestions[pos].c;

    myAnswers.innerHTML = "<h4>"+question+"</h4>";

    myAnswers.innerHTML += "<label> <input id='choiceA' type='button' name='choices' value='A'> "+chA+"</label><br>";
    myAnswers.innerHTML += "<label> <input id='choiceB' type='button' name='choices' value='B'> "+chB+"</label><br>";
    myAnswers.innerHTML += "<label> <input id='choiceC' type='button' name='choices' value='C'> "+chC+"</label><br>";

    var choiceA = document.querySelector('#choiceA')
    var choiceB = document.querySelector('#choiceB')
    var choiceC = document.querySelector('#choiceC')
    choiceA.addEventListener('click', wrongAnswer)
    choiceB.addEventListener('click', wrongAnswer)
    choiceC.addEventListener('click', startQuestion3)
    
}
function startQuestion3(){
    myAnswers = get("myanswers")
    pos = [2]

    get("questiontitle").innerHTML = "Question "+"3"+" out of "+ myQuestions.length;

    question = myQuestions[pos].question;
    chA = myQuestions[pos].a;
    chB = myQuestions[pos].b;
    chC = myQuestions[pos].c;

    myAnswers.innerHTML = "<h4>"+question+"</h4>";

    myAnswers.innerHTML += "<label> <input id='choiceA' type='button' name='choices' value='A'> "+chA+"</label><br>";
    myAnswers.innerHTML += "<label> <input id='choiceB' type='button' name='choices' value='B'> "+chB+"</label><br>";
    myAnswers.innerHTML += "<label> <input id='choiceC' type='button' name='choices' value='C'> "+chC+"</label><br>";

    var choiceA = document.querySelector('#choiceA')
    var choiceB = document.querySelector('#choiceB')
    var choiceC = document.querySelector('#choiceC')
    choiceA.addEventListener('click', wrongAnswer)
    choiceB.addEventListener('click', wrongAnswer)
    choiceC.addEventListener('click', formSection)
}

// this form to record time and fill name
function formSection(){
        // save time
    finishTime = secondsLeft;
    console.log(finishTime)
    clearInterval(myTimer);
    timerSpan.textContent = `${finishTime} seconds`
    
    document.querySelector('.section-one').style.display = 'none'
    document.querySelector('.game-section').style.display = 'none'
    document.querySelector('.highscore-section').style.display = 'none'
    document.querySelector('.form-section').style.display = 'block'

    var goToHighscores = document.querySelector('#highscores')
    goToHighscores.addEventListener('click', highscoreTab)
    return finishTime
}

// high scores (hide all other tabs, pops up highscore)
function highscoreTab(){
    document.querySelector('.section-one').style.display = 'none'
    document.querySelector('.game-section').style.display = 'none'
    document.querySelector('.highscore-section').style.display = 'block'
}

// The following function renders items in a todo list as <li> elements
function renderTodos() {
    // Clear todoList element and update todoCountSpan
    todoList.innerHTML = "";

    // Render a new li for each todo
    todos.forEach( function(todo) {
        var item = `
            <li>
                name: ${todo.name}
                score: ${todo.score}
                <button>&times;</button>
            </li>
        `;


        todoList.innerHTML = todoList.innerHTML + item;

    });
}

// This function is being called below and will run when the page loads.
function init() {
  // Get stored todos from localStorage
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // This is a helper function that will render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Add submit event to form
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push({ name: todoText, score: finishTime});
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// Add click event to todoList element
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // Checks if element is a button
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});

// Calls init to retrieve data and render it to the page on load
init()