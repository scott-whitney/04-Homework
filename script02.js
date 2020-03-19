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


    countDownTimer();
    
    userScore = thisQuiz();
    userName = prompt("what are your initials?")
    // var serializedScores = JSON.stringify(highscores);
    HighScores.push({userScore, userName})
    console.log(HighScores);
}

function thisQuiz() {
    var score = 0
    // count down progress b






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


function countDownTimer() {

    var count = 45;
    var interval = setInterval(function(){
        document.getElementById('count').innerHTML=count;
        count--;
        if (count === 0){
          clearInterval(interval);
          document.getElementById('count').innerHTML='Done';
          // or...
          alert("You're out of time!");
        }
      }, 1000);

}



// to show the scores:
// function showScores(parent, scores) {
//     // a <dl> could also be appropriate
//     var scoresElt = document.createElement('ol'),
//         i, scoreText;
//     scores.sort(function(a, b) {return b.score - a.score;});
//     for (i=0; i < scores.length; ++i) {
//         scoresElt.appendChild(document.createElement('li'));
//         scoreText = scores[i].score + ': ' + scores[i].name;
//         scoresElt.lastChild.appendChild(document.createTextNode(scoreText));
//     }
//     parent.appendChild(scoresElt);
// }

// function HighScores() {
//     if(typeof(Storage)!=="undefined"){
//         var scores = false;
//         if(localStorage["high-scores"]){
//             high_scores.style.display = "block";
//             high_scores.innerHTML = '';
//             scores = JSON.parse(localStorage["high-scores"]);
//             scores = scores.sort(function(a,b){return parseInt(b)-parseInt(a)});

//             for()
//         }
//     } else {
//         high_scores.style.display = "none";
//     }
// }