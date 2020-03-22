const quizButton = document.getElementById('quizBtn')
quizButton.addEventListener('click', startQuiz)

function startQuiz() {
    thisQuiz();

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




        for(var i = 0; i < questions.length; i++) {
            var userAnswer = confirm(questions[i].q);
            if (userAnswer === (questions[i].a[questions[i.correct]])) {
                alert("good job!")
                score++
            } else {
                alert("Wrong!")
            }
        }



    ]






    return score;
}