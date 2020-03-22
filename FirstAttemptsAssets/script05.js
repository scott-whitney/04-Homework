const quizButton = document.getElementById('quizBtn')
quizButton.addEventListener('click', startQuiz)

var HighScores = [];
// var highscores = [
//     {
//     score: 100, 
//     name: "tommy", 
//     time: 42.14
//     },

// ];

function startQuiz() {


    
     var userScore = thisQuiz();
     var userName = prompt("what are your initials?")
     var userTime = 0;
    // var serializedScores = JSON.stringify(highscores);
    HighScores.push({userScore, userName, userTime})
    console.log(HighScores);
}





function thisQuiz() {


    var score = 0
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

        var $currentQuestion = document.createElement("h1");
        var $questionAL = document.createElement('ol');
        var $answerOne = document.createElement("li");
        var $answerTwo = document.createElement("li");
        var $answerThree = document.createElement("li");
        var $answerFour = document.createElement("li");

        var $quizBox = document.getElementById("quizHere");

        $quizBox.appendChild($currentQuestion);
        $quizBox.appendChild($questionAL);
        $questionAL.appendChild($answerOne);
        $questionAL.appendChild($answerTwo);
        $questionAL.appendChild($answerThree);
        $questionAL.appendChild($answerFour);

        $currentQuestion.textContent = questions[i].q;
    console.log($currentQuestion)
    $answerOne.textContent = questions[i].a[0];
    console.log($answerOne);
    $answerTwo.textContent = questions[i].a[1];
    console.log($answerTwo);
    $answerThree.textContent = questions[i].a[2];
    console.log($answerThree);
    $answerFour.textContent = questions[i].a[3];
    console.log($answerFour);



    for(var i = 0; i < questions.length; i++)  {

        var $quizBox = document.getElementById("quizHere");
    
    // creating elements within the page
    // Giving the new variables text
    $currentQuestion.textContent = questions[i].q;
    console.log($currentQuestion)
    $answerOne.textContent = questions[i].a[0];
    console.log($answerOne);
    $answerTwo.textContent = questions[i].a[1];
    console.log($answerTwo);
    $answerThree.textContent = questions[i].a[2];
    console.log($answerThree);
    $answerFour.textContent = questions[i].a[3];
    console.log($answerFour);
    // ID = quizHere
    
    // Appending the elements to the ID as children
    // $quizBox.appendChild($currentQuestion);
    // $currentQuestion.appendChild($questionAL);
    // $questionAL.appendChild($answerOne);
    // $questionAL.appendChild($answerTwo);
    // $questionAL.appendChild($answerThree);
    // $questionAL.appendChild($answerFour);
    userAnswer = prompt("Answer 1,2,3 or 4");
    if (prompt = questions[i].correct +1) {
        alert("yes!");
        score++
    } else {
        alert("nope");
    }







}






return score;
}