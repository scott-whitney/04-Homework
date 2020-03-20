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


    myFunction();
    userScore = thisQuiz();
    userName = prompt("what are your initials?")
    userTime = 0;
    // var serializedScores = JSON.stringify(highscores);
    HighScores.push({userScore, userName, userTime})
    console.log(HighScores);
}

function thisQuiz() {




    var score = 0

    var questions = [ {q: "Are Crosley's the first SUV?", a:true}, 
    {q: "Did Crosley make the first American Sports Car?", a:true}, 
    {q: "is Scott's crosley green?", a:true},
    {q: "Was Scott's Crosley $1000?", a:false},
    {q: "Was it hard to get into the backyard?", a:true},
    {q: "Scott did it all alone", a:false},
    {q: "Scott loves car", a:true},
    {q: "Scott cant come up with more questions", a:false},
    {q: "Scott doesnt want to type more questions", a:true},
    {q: "Scott had to write one more question", a:true}]




    // loop through the array
    for(var i = 0; i < questions.length; i++) {
        var userAnswer = confirm(questions[i].q);
        if (userAnswer === (questions[i].a)) {
            alert("good job!")
            score++
        } else {
            alert("Wrong!")
        }
    }

   



    // alert(score + " " + "out of 10");
    // alert(`you got the score of ${score} out of ${questions.length}`)

    return score;

}


function checkTime(){
    var totalSeconds = 60*10;
    var cMinutes = parseInt(totalSeconds/60);
    var cSeconds = parseInt(totalSeconds%60);
    


}