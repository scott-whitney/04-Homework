const quizButton = document.getElementById('quizBtn')
quizButton.addEventListener('click', startQuiz)
// const quizButtonTwo = document.getElementById('quizBtn2')
// quizButtonTwo.addEventListener('click', restartQuiz);

var playerInitails = ("PFW");
var HighScores = [];
var timeCounter = 0;
var timeSubtractor = 0;
var counter = 0;
var score = 0;
var remainingTime = 0;
var realRemainingTime = 45;

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

// HighScore Elements
var $highScoreCard = document.createElement('div')
var $highScoreHeader = document.createElement('div')
var $highScoreList = document.createElement('ul')

var scoreList = localStorage.getItem('highScores');
var highScoreList = JSON.parse(scoreList);


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
        // timer(45, callback);

        timerSet();
        var startQuizBtn = document.getElementById("quizBtn");
        startQuizBtn.remove();
    }  
    
    
    
        setupQuiz();
        thisQuiz();
        userInput();
    

    // if (counter > questions.length)  {
    //     counter = questions.length
    // }
    //     // whipeQBoard()
    //     console.log("nah you didn't find it")
    //     createInitialsInput()
        
        

    // } else {
    //     setupQuiz();
    //     thisQuiz();
    //     userInput();
    // }
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
    if (counter > questions.length)  {
        counter = questions.length
    }
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

    if (realRemainingTime > 10){
        realRemainingTime = realRemainingTime - 10;
        startQuiz();
    // } else {
    //     realRemainingTime = 0
    //     console.log("did you find it?")
    //     createInitialsInput()

    }
    
    
}





function highScore() {
    var initialsPW = document.getElementById("inputInitials").value;
    console.log(initialsPW);
    var userTime = realRemainingTime;
    var userScore = score
    var userName = initialsPW

   
    
    Array.prototype.push.apply(HighScores, highScoreList);
    
    
    HighScores.push({userScore, userName, userTime})
    console.log(HighScores);
    HighScores.sort();
    console.log(HighScores);
    var stringHighScores = JSON.stringify(HighScores)




    localStorage.setItem('highScores', stringHighScores);





    whipeSBoard()
    createScorePattern();

}

function whipeQBoard() {
        // $stopQuizBtn0 = document.getElementById("answer0");
        // $stopQuizBtn0.remove();
        $answerBtnOne.remove();
        $answerBtnTwo.remove();
        $answerBtnThree.remove();
        $answerBtnFour.remove();
        // var stopQuizBtn1 = document.getElementById("answer1");
        // stopQuizBtn1.remove();
        // var stopQuizBtn2 = document.getElementById("answer2");
        // stopQuizBtn2.remove();
        // var stopQuizBtn3 = document.getElementById("answer3");
        // stopQuizBtn3.remove();
    
        $currentQuestion.remove();
        console.log("whipeQboard")
        if (counter > questions.length)  {
            counter = questions.length
        }


}
function createInitialsInput() {

    
    console.log("createInitialsInput")

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

    var $stopInputForm = document.getElementById("form1");
    $stopInputForm.remove();
    var $stopInputBtn = document.getElementById("noDupes");
    $stopInputBtn.remove();
    var $stopQuizText = document.getElementById("quizHere");
    $stopQuizText.remove();

    // LoadScoreTrigger

}


function timerSet(){
    var $userVisibleTime = document.getElementById("timer");
    var timerInterval = setInterval(function() {
        realRemainingTime--;
        $userVisibleTime.textContent = realRemainingTime;
        if (counter === questions.length){
            
            console.log("counter welp")
            clearInterval(timerInterval);
            whipeQBoard()
            createInitialsInput()
        }
        else if(realRemainingTime <= 0){
            console.log("counter yo");
            clearInterval(timerInterval);
            whipeQBoard()
            createInitialsInput()
            // different one
        }
        
    }, 1000);

}

// function showScores(){


//     createScorePattern();

// }

function createScorePattern() {
    // newBtn
    // <a id="quizBtn" class="btn btn-primary">Take Quiz</a>








    var scoreList = localStorage.getItem('highScores');
    var highScoreList = JSON.parse(scoreList);
    console.log(highScoreList);
    // var $highScoreCard = document.createElement('div')
    // var $highScoreHeader = document.createElement('div')
    // var $highScoreList = document.createElement('ol')
    var $highScoreCard = document.createElement('div')
    var $highScoreHeader = document.createElement('div')
    var $highScoreList = document.createElement('ol')
    
    var $listItem0 = document.createElement('li');
    var $listItem1 = document.createElement('li');
    var $listItem2 = document.createElement('li');
    var $listItem3 = document.createElement('li');
    var $listItem4 = document.createElement('li');
    var $listItem5 = document.createElement('li');
    var $listItem6 = document.createElement('li');
    var $listItem7 = document.createElement('li');
    var $listItem8 = document.createElement('li');
    var $listItem9 = document.createElement('li');

        $highScoreList.setAttribute("style", "text-align-center")
    
        $listItem0.setAttribute("id", "listItem0");
        $listItem1.setAttribute("id", "listItem1");
        $listItem2.setAttribute("id", "listItem2");
        $listItem3.setAttribute("id", "listItem3");
        $listItem4.setAttribute("id", "listItem4");
        $listItem5.setAttribute("id", "listItem5");
        $listItem6.setAttribute("id", "listItem6");
        $listItem7.setAttribute("id", "listItem7");
        $listItem8.setAttribute("id", "listItem8");
        $listItem9.setAttribute("id", "listItem9");


    

    document.body.appendChild($highScoreCard);
    $highScoreCard.appendChild($highScoreHeader);
    $highScoreCard.appendChild($highScoreList);

    $highScoreList.appendChild($listItem0);
    $highScoreList.appendChild($listItem1);
    $highScoreList.appendChild($listItem2);
    $highScoreList.appendChild($listItem3);
    $highScoreList.appendChild($listItem4);
    $highScoreList.appendChild($listItem5);
    $highScoreList.appendChild($listItem6);
    $highScoreList.appendChild($listItem7);
    $highScoreList.appendChild($listItem8);
    $highScoreList.appendChild($listItem9);

    $lI0 = document.getElementById("listItem0");
    $lI1 = document.getElementById("listItem1");
    $lI2 = document.getElementById("listItem2");
    $lI3 = document.getElementById("listItem3");
    $lI4 = document.getElementById("listItem4");
    $lI5 = document.getElementById("listItem5");
    $lI6 = document.getElementById("listItem6");
    $lI7 = document.getElementById("listItem7");
    $lI8 = document.getElementById("listItem8");
    $lI9 = document.getElementById("listItem9");

    

    listItemCaller = [
            $lI0,
            $lI1,
            $lI2,
            $lI3,
            $lI4,
            $lI5,
            $lI6,
            $lI7,
            $lI8,
            $lI9,
        ]

        // listItemCaller[0].textContent = highScoreList[0].userName;

  for (i = 0; i < listItemCaller.length; i++) {
        listItemCaller[i].textContent = "Name:" + " " + highScoreList[i].userName + " " + "Score:" + " " + highScoreList[i].userScore + " " + "Timer:" + " " + highScoreList[i].userTime;


  }
}

