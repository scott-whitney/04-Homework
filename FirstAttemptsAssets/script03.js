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

    
    // timerCount();
    userScore = thisQuiz();
    userName = prompt("what are your initials?")
    // var serializedScores = JSON.stringify(highscores);
    HighScores.push({userScore, userName})
    console.log(HighScores);
    
}

function thisQuiz() {
    // count down progress b
    // countDownTimer();

    var dt = new Date();
    startTime = Math.round(dt.getTime() / 1000);

    console.log(startTime);
   
    
    var score = 0
    var $changeP = document.querySelector("#score");
    var timeLeft = 45

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
        var ct = new Date();
        // currentTime = ct.getTime();
        currentTime = Math.round(ct.getTime() / 1000);
        duration = currentTime - startTime;
        console.log(duration);
        // document.getElementById('count').innerHTML=duration;
        if (currentTime - startTime > timeLeft) {
            alert("Time is up!")
            i = questions.length;
            endTime = currentTime - startTime;
            // document.getElementById('count').innerHTML=duration;
        }
        
         else if (userAnswer === (questions[i].a)) {
            // document.getElementById('count').innerHTML=duration;
            $changeP.textContent = score;
            alert("good job!")
            score++
        } else {
            alert("Wrong!")
            timeLeft = timeLeft - 10;
            // document.getElementById('count').innerHTML=duration;
        }
    }

   



    // alert(score + " " + "out of 10");
    // alert(`you got the score of ${score} out of ${questions.length}`)

    return {score, endTime};

}

// function timerCount(){


//     var timer;
//     var counter = 45;

//     function startCounting(){
//         timer = window.setTimeout( "countDown()", 1000);
//         window.status = counter;
//     }

//     function countDown() {
//         counter = counter--;
//         window.status = counter;
//         if (counter == 0)
//         {
//             window.clearTimeout( timer );
//             timer = null;
//         }
//         else
//         {
//             timer = window.setTimeout( "countDown()", 1000);
//         }

//     }

