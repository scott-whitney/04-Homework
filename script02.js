const quizButton = document.getElementById('quizBtn')
quizButton.addEventListener('click', startQuiz)


var highscores = [
    {score: 100, name: "tommy", time: 42.14},

];

function startQuiz() {
    userScore = thisQuiz();
    userName = prompt("what are your initials?")

    var serializedScores = JSON.stringify(highscores);

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

    alert(score + " " + "out of 10");
    alert(`you got the score of ${score} out of ${questions.length}`)

    return score;

}




// to show the scores:
function showScores(parent, scores) {
    // a <dl> could also be appropriate
    var scoresElt = document.createElement('ol'),
        i, scoreText;
    scores.sort(function(a, b) {return b.score - a.score;});
    for (i=0; i < scores.length; ++i) {
        scoresElt.appendChild(document.createElement('li'));
        scoreText = scores[i].score + ': ' + scores[i].name;
        scoresElt.lastChild.appendChild(document.createTextNode(scoreText));
    }
    parent.appendChild(scoresElt);
}