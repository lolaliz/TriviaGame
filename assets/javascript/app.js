


$(document).ready(function(){
    $("#resetbutton").hide();
    $("#scoreboard").hide();

var questions =[
{   question : 'World War I, originally known as the Great War, lasted from...',
    answers : ['1912-1916', '1913-1919', '1918-1922', '1914-1918' ],
    correctAnswer : 3,
   
},

{   question : 'The event that sparked World War I was…',
    answers : ['The assassination of Kaiser Wilhelm II of Germany', 'The Serbian army crossed the border into Germany', 'The assassination of Archduke Franz Ferdinand, heir to the Austro-Hungarian Empire', 
    'The German army crossed the border into Belgium '],
    correctAnswer : 2,
},
    
{   question : 'Which world power initially supported the Serbians?',
    answers : [ 'Russia', 'France', 'Great Britain', 'United States',],
    correctAnswer : 0,
},

{   question : 'At the start of the war, which group of countries lined up against Austria-Hungary and Germany?',
    answers : ['China, Russia, France, Serbia', 'Great Britain, Russia, France, Serbia', 'United States, Great Britain, France, Serbia',
    'Russia, Belgium, France, Great Britain, Serbia'],
    correctAnswer : 3,
},

{   question : 'On the Western Front, the French and British forces were able to drive back the German forces during which battle?',
    answers :['Battle of the Somme', 'First Battle of the Marne', 'Battle of Verdun', 'First Battle of Isonzo'],
    correctAnswer : 1,

},

{   question : 'The United States adopted a policy of neutrality at the outset of the war. In 1917, President Woodrow Wilson called for a declaration of war on Germany after…',
    answers : ['U.S. citizens were killed during a particularly bloody battle in France', 'German aggression began to affect the U.S. ability to engage in commerce and shipping in Europe',
             'Russia exited the war after instability led to revolution', 
             'Several attacks on passenger vessels and U.S. merchant ships around the British Isles' ],
    correctAnswer : 3,

}];

var rightAnswers = 0;
var wrongAnswers = 0;
//tracks the question number 
var questionIndex = 0;
var userResponse;
//15 seconds to answer question
var timer = 15;
//count down variable
var countDown;

function run() {
    clearInterval(countDown);
    countDown = setInterval(decrement, 1000);
  }

function decrement() {
    $("#timer").html(timer);
    timer--;

    if (timer === 0) {
        stop();
        $("#timerAlert").html("Time's up!");
        nextQuestion();
    }
}

function stop() {
    clearInterval(countDown);
   
  }

  function threeSeconds() {
    $("#timerAlert").empty()
    
  }
  


function inputQuestion () {
    
        $("#questionNumber").text("Question" + " " + (questionIndex + 1) + ":")
        $("#question").text(questions[questionIndex].question);
        $("#answer1").text(questions[questionIndex].answers[0]);
        $("#answer2").text(questions[questionIndex].answers[1]);
        $("#answer3").text(questions[questionIndex].answers[2]);
        $("#answer4").text(questions[questionIndex].answers[3]);
    
        run();
}

function nextQuestion() {
    // moves through the index of questions 
    questionIndex++;
    if (questionIndex > (questions.length - 1)) {
        endGame(); 
    } else {
        timer = 15;
        inputQuestion(questionIndex);
    }
    
}
        
function endGame() {
    $("#quiz").hide();
    $("#timerAlert").empty()
    $("#resetbutton").show()
    $("#scoreboard").show()
    scoreAndanswers()
}


        
function scoreAndanswers () {
    $("#numbercorrect").text("Total Correct:" + " " + rightAnswers)
    $("#numberwrong").text("Total Incorrect:" + " " + wrongAnswers)
    $("#listheading").text("Study up! Here are the correct answers:")
    $("#FirstCorrect").text("World War I, originally known as the Great War, lasted from 1914-1918.")
    $("#SecondCorrect").text("The event that sparked World War I was the assassination of Archduke Franz Ferdinand, heir to the Austro-Hungarian Empire.")
    $("#ThirdCorrect").text("Russia was the first major world power to support the Serbians.")
    $("#FourthCorrect").text("Russia, Belgium, France, Great Britain and Serbia lined up against Austria-Hungary and Germany at the start of the war. ")
    $("#FifthCorrect").text("French and British forces were able to drive back the German forces during the First Battle of the Marne. ")
    $("#SixthCorrect").text("President Woodrow Wilson called for a declaration of war on Germany after several attacks on passenger vessels and U.S. merchant ships around the British Isles. ")
}

function checkAnswer() {
    if (userResponse == questions[questionIndex].correctAnswer){
        $("#timerAlert").text("Correct!");
        rightAnswers++;
        setTimeout(threeSeconds, 3000);
        stop();
        $("#timer").empty(timer);
        nextQuestion()
    }
           
    else if (userResponse !== questions[questionIndex].correctAnswer){
        $("#timerAlert").text("Wrong!");
        wrongAnswers++;
        setTimeout(threeSeconds, 3000);
        stop();
        $("#timer").empty(timer);
        nextQuestion()
       
        
    }
}

	
$("#startthequiz").on("click", function() { 
    $("#startthequiz").hide();
    inputQuestion();
    
})



$("#answer1").on("click", function() {
    userResponse = 0;
    checkAnswer(0);
	});

$("#answer2").on("click", function() {
    userResponse = 1;
    checkAnswer(1);
    });

$("#answer3").on("click", function() {
    userResponse = 2;
    checkAnswer(2);
    });

$("#answer4").on("click", function() {
    userResponse = 3;
    checkAnswer(3);
    });

    function reset(){
        $("#startthequiz").show();
        $("#quiz").show();
        rightAnswers = 0;
        wrongAnswers = 0;
        questionIndex = 0;
        timer = 15;
        $("#startthequiz").on("click", function(){ 
            $("#startthequiz").hide();
            inputQuestion();
            
        })
    }


    $("#resetbutton").on("click", function() { 
        $("#resetbutton").hide();
         $("#scoreboard").hide();
        //$("#startthequiz").show();
        $("#questionNumber").empty();
        $("#question").empty();
        $(".answerbutton").empty();
        reset ();
        
    })
    



});







































