const quizButton = document.getElementById('quizBtn')
quizButton.addEventListener('click', startQuiz)
var playerInitails = ("PFW");
var HighScores = [];
var timeCounter = 0;
var timeSubtractor = 0;
var counter = 0;
var score = 0;
var remainingTime = 0;

var $currentQuestion = document.createElement("h1");
// ol
var $questionAL = document.createElement('div');   
// li tags 
var $answerOne = document.createElement("div");
var $answerTwo = document.createElement("div");
var $answerThree = document.createElement("div");
var $answerFour = document.createElement("div");
// button <a> tags
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
    if (counter === 0) {
        timer(45, callback);
        var startQuizBtn = document.getElementById("quizBtn");
        startQuizBtn.remove();
    }

    if (counter === 6)  {
        whipeQBoard()
        createInitialsInput()
        // highScore();

    } else {
        setupQuiz();
        thisQuiz();
        userInput();
    }
}





function thisQuiz() {


        $currentQuestion.textContent = questions[counter].q;
        $answerBtnOne.textContent = questions[counter].a[0];
        $answerBtnTwo.textContent = questions[counter].a[1];
        $answerBtnThree.textContent = questions[counter].a[2];
        $answerBtnFour.textContent = questions[counter].a[3];
        quizButton.textContent = "Next Question"

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
    $answerBtnOne.setAttribute("id", "answer0")
    $answerBtnTwo.setAttribute("id", "answer1")
    $answerBtnThree.setAttribute("id", "answer2")
    $answerBtnFour.setAttribute("id", "answer3")

}
// This is where the ability to recognize wrong answers will go
function userInput() {
    

    possibleA0 = document.getElementById('answer0');
    possibleA1 = document.getElementById('answer1');
    possibleA2 = document.getElementById('answer2');
    possibleA3 = document.getElementById('answer3');

    answerList = [
        possibleA0,
        possibleA1,
        possibleA2,
        possibleA3

    ]
    possibleA0.addEventListener('click', answerWrong)
    possibleA1.addEventListener('click', answerWrong)
    possibleA2.addEventListener('click', answerWrong)
    possibleA3.addEventListener('click', answerWrong)

    var i = questions[counter].correct;
    answerList[i].removeEventListener('click', answerWrong)
    answerList[i].addEventListener('click', answerCheck)


    
}
// Correct Answers
function answerCheck() {
    possibleA0 = document.getElementById('answer0');
    possibleA1 = document.getElementById('answer1');
    possibleA2 = document.getElementById('answer2');
    possibleA3 = document.getElementById('answer3');

    answerList = [
        possibleA0,
        possibleA1,
        possibleA2,
        possibleA3

    ]
    var i = questions[counter].correct;
    answerList[i].removeEventListener('click', answerCheck)

    

    console.log(counter);
    counter++
    score++
    startQuiz();



}
function answerWrong(){
    possibleA0 = document.getElementById('answer0');
    possibleA1 = document.getElementById('answer1');
    possibleA2 = document.getElementById('answer2');
    possibleA3 = document.getElementById('answer3');

    answerList = [
        possibleA0,
        possibleA1,
        possibleA2,
        possibleA3

    ]
    possibleA0.removeEventListener('click', answerWrong)
    possibleA1.removeEventListener('click', answerWrong)
    possibleA2.removeEventListener('click', answerWrong)
    possibleA3.removeEventListener('click', answerWrong)

    var i = questions[counter].correct;
    answerList[i].removeEventListener('click', answerCheck)
    // timeSubtractor = timeSubtractor + 10;
    counter++
    startQuiz();
}





function highScore() {
    var initialsPW = document.getElementById("inputInitials").value;
    console.log(initialsPW);
    var userTime = timeCounter;
    var userScore = score
    var userName = initialsPW

   HighScores.push({userScore, userName, userTime})
   console.log(HighScores);
   whipeSBoard()

}

function whipeQBoard() {
        var stopQuizBtn0 = document.getElementById("answer0");
        stopQuizBtn0.remove();
        var stopQuizBtn1 = document.getElementById("answer1");
        stopQuizBtn1.remove();
        var stopQuizBtn2 = document.getElementById("answer2");
        stopQuizBtn2.remove();
        var stopQuizBtn3 = document.getElementById("answer3");
        stopQuizBtn3.remove();
    
        $currentQuestion.remove();


}
function createInitialsInput() {

    timeSubtractor = timeSubtractor + 100;


    var $stopQuizText = document.getElementById("quizHere");
    $stopQuizText.textContent = "Please give us your initials"
    // Creating the necissary tags to make an input bar
    var $inputMainDiv = document.createElement("form");
    var $inputChildDiv = document.createElement("div");
    var $inputMainSpan = document.createElement("span");
    var $inputMainInput = document.createElement("input");
    // get element ID of parent div tag
    var $stopQuizText = document.getElementById("quizHere");
    // begin assembly
    $stopQuizText.appendChild($inputMainDiv);
    $inputMainDiv.appendChild($inputChildDiv);
    $inputMainDiv.appendChild($inputMainInput);
    $inputChildDiv.appendChild($inputMainSpan);
    // setting the form ID so I can hopfully grab its value
    $inputMainDiv.setAttribute("id", "form1");
    $inputMainInput.setAttribute("id", "inputInitials")
    // Adding the button
    var $inputInitialsBtn = document.createElement('input');
    // class card body
    var $cardElement =  document.querySelector(".card-body")
    // adding the button to be the last child of Card Body
    $cardElement.appendChild($inputInitialsBtn);
    $inputInitialsBtn.setAttribute("form", "form1")
    $inputInitialsBtn.setAttribute("class", "btn btn-primary")
    $inputInitialsBtn.setAttribute("value", "submit")
    $inputInitialsBtn.setAttribute("id", "noDupes")
    $inputInitialsBtn.textContent = "Submit" 
    console.log($inputInitialsBtn);
    $inputInitialsBtn.addEventListener('click', highScore);
    console.log($inputMainInput); 
}
function whipeSBoard() {
    // remove input form bar
//     $inputMainDiv.remove();
//     $inputChildDiv.remove();
//     $inputMainInput.remove();
//     $inputMainSpan.remove();
// // remove submit button
//     $inputInitialsBtn.remove();
    var $stopInputForm = document.getElementById("form1");
    $stopInputForm.remove();
    var $stopInputBtn = document.getElementById("noDupes");
    $stopInputBtn.remove();
    var $stopQuizText = document.getElementById("quizHere");
    $stopQuizText.remove();

    // LoadScoreTrigger

}

function timer(seconds, cb) {
    var remainingTime = seconds;
    window.setTimeout(function() {
      cb();
      timeCounter = remainingTime
      var $userVisibleTime = document.getElementById("timer");
        // $userVisibleTime = timeCounter;
        $userVisibleTime.textContent = timeCounter;
    //   console.log(remainingTime);
        console.log(timeCounter);
      if (remainingTime > timeSubtractor) {
        timer(remainingTime - 1, cb); 
      }
    }, 1000);
  }
  
  var callback = function() {
    //   timeCounter = ('callback');
    console.log('callback');
    // console.log(timeCounter);
  };
  
//   timer(90, callback);