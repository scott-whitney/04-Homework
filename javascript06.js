const quizButton = document.getElementById('quizBtn')
quizButton.addEventListener('click', startQuiz)

var HighScores = [];
var timeCounter = 45;
var counter = 0;
var $currentQuestion = document.createElement("h1");
// ol
var $questionAL = document.createElement('div');   
// li tags 
var $answerOne = document.createElement("div");
var $answerTwo = document.createElement("div");
var $answerThree = document.createElement("div");
var $answerFour = document.createElement("div");
// button a tags
var $answerBtnOne = document.createElement('a');
var $answerBtnTwo = document.createElement('a');
var $answerBtnThree = document.createElement('a');
var $answerBtnFour = document.createElement('a');

var questions = [
    {
    q: "What was the first company in the US to call a vehicle a SUV?", 
    a:["crosley", "Ford", "Chevy", "Rols Royce"],
    correct:0
    },
    {
    q: "When was the automatic transmission invented?",
    a:["1940", "1954", "1921", "1946"],
    correct:2
    },
    {
    q: "What does LSD stand for?",
    a:["limited slip differential", "Lock Sell Drive", "Limited slip dipstick", "Little shoe drive"],
    correct:0
    },
    {
    q: "What does chopping a hot rod mean?",
    a:["Scrapping it and selling it for parts", "Chopping the roof line down", "Chopping the car in half", "Chopping is not a hot rod term"],
    correct:1
    },
    {
    q: "What does sectioning a hot rod mean?",
    a:["Cutting height out of the body", "Used when painting the hot rod", "Mapping out sections to work on", "Removing body panels from the car to make it smaller"],
    correct:0
    },
    {
    q: "What does channeling mean on a hot rod?",
    a:["Channeling spiritual energy into the hot rod", "cleaning the channels in the carb", "cutting channels in the body so the car can be lowered", "This is not a hot rod term"],
    correct:2
    }]

function startQuiz() {

                    setupQuiz();
                    thisQuiz();
    //  var userScore = thisQuiz();
                    userInput();
    //  var userName = prompt("what are your initials?")
     var userTime = 0;
     var userScore = 0
     var userName = 0
    // var serializedScores = JSON.stringify(highscores);
    HighScores.push({userScore, userName, userTime})
    console.log(HighScores);
}





function thisQuiz() {


        $currentQuestion.textContent = questions[counter].q;
        $answerBtnOne.textContent = questions[counter].a[0];
        $answerBtnTwo.textContent = questions[counter].a[1];
        $answerBtnThree.textContent = questions[counter].a[2];
        $answerBtnFour.textContent = questions[counter].a[3];
        quizButton.textContent = "Next Question"
        counter++
}



function setupQuiz() {
    var $quizBox = document.getElementById("quizHere");
// setting up the structure
    $quizBox.appendChild($currentQuestion);
    $quizBox.appendChild($questionAL);
    $questionAL.appendChild($answerOne);
    $questionAL.appendChild($answerTwo);
    $questionAL.appendChild($answerThree);
    $questionAL.appendChild($answerFour);
// Setting up the buttons
    $answerOne.appendChild($answerBtnOne);
    $answerTwo.appendChild($answerBtnTwo);
    $answerThree.appendChild($answerBtnThree);
    $answerFour.appendChild($answerBtnFour);

    // turning them into buttons

    $answerBtnOne.setAttribute("class", "btn btn-primary")
    $answerBtnTwo.setAttribute("class", "btn btn-primary")
    $answerBtnThree.setAttribute("class", "btn btn-primary")
    $answerBtnFour.setAttribute("class", "btn btn-primary")
// Giving them Ids so userInput can use them as buttons with eventlistener
    $answerBtnOne.setAttribute("id", "answer1")
    $answerBtnTwo.setAttribute("id", "answer2")
    $answerBtnThree.setAttribute("id", "answer3")
    $answerBtnFour.setAttribute("id", "answer4")

}

function userInput() {
    possibleAOne = document.getElementById('answer1');
    possibleATwo = document.getElementById('answer2');
    possibleAThree = document.getElementById('answer3');
    possibleAFour = document.getElementById('answer4');

    possibleAOne.addEventListener('click', startQuiz)
    possibleATwo.addEventListener('click', startQuiz)
    possibleAThree.addEventListener('click', startQuiz)
    possibleAFour.addEventListener('click', startQuiz)

}

function answerCheck() {
    

}

