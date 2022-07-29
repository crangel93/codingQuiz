var buttonEl = document.querySelector("#start-quiz");
var time=75;
var isCorrect=false;

function startQuiz(){
    
    location.replace("question1.html")
    startTimer();
   
}
function startTimer(){
    setInterval(countDown,1000);
}
function countDown(){
    
    var timerEl= document.querySelector("#time");
    time-=1;
    
  
 
  timerEl.innerHTML = "Time: " + time;
 

}












//this is the correct answer button for question one
//I change the question and the button answers and add a new onclick
function correctButton1(){
    //selecting the question
    var question=document.querySelector("#question");
    //changing the question
    question.textContent="The condition in an if/ else statement is enclosed with _______.";
   
    var button1=document.querySelector("#button1");
    button1.textContent="1. quotes";
    var button2=document.querySelector("#button2");
    button2.textContent="2. curly brackets";
    //button2.onclick=correctButton2();
    var button3=document.querySelector("#button3");
    button3.textContent="3. parenthesis";
    var button4=document.querySelector("#button4");
    button4.textContent="4. square brackets";
    document.getElementById( "button1" ).setAttribute( "onClick", "wrongButton2()" );
    document.getElementById( "button3" ).setAttribute( "onClick", "wrongButton2()" );
    document.getElementById( "button4" ).setAttribute( "onClick", "wrongButton2()" );
    document.getElementById( "button2" ).setAttribute( "onClick", "correctButton2()" );

       
   
     var correctOrNot=document.querySelector("#correctOrNot");
      correctOrNot.innerHTML="Correct";
 

  


}
function correctButton2(){
   
    //selecting the question
    var question=document.querySelector("#question");
    //changing the question
    question.textContent="Arrays in JavaScript can be used to store _______.";
   
    var button1=document.querySelector("#button1");
    button1.textContent="1. numbers and strings";
    var button2=document.querySelector("#button2");
    button2.textContent="2. other arrays";
    var button3=document.querySelector("#button3");
    button3.textContent="3. booleans";
    var button4=document.querySelector("#button4");
    button4.onclick="correctButton3()";
    button4.textContent="4. all of the above";
    document.getElementById( "button1" ).setAttribute( "onClick", "wrongButton3()" );
    document.getElementById( "button3" ).setAttribute( "onClick", "wrongButton3()" );
    document.getElementById( "button4" ).setAttribute( "onClick", "correctButton3()" );
    document.getElementById( "button2" ).setAttribute( "onClick", "wrongButton3()" );

       
   
     var correctOrNot=document.querySelector("#correctOrNot");
      correctOrNot.innerHTML="Correct";
 

  


}function correctButton3(){
    
    //selecting the question
    var question=document.querySelector("#question");
    //changing the question
    question.textContent="String values must be enclosed within ______ when being assigned to variables.";
   
    var button1=document.querySelector("#button1");
    button1.textContent="1. commas";
    var button2=document.querySelector("#button2");
    button2.textContent="2. curly brackets";
    var button3=document.querySelector("#button3");
    button3.textContent="3. quotes";
    var button4=document.querySelector("#button4");
    button4.onclick="correctButton3()";
    button4.textContent="4. parenthesis";
    document.getElementById( "button1" ).setAttribute( "onClick", "wrongButton4()" );
    document.getElementById( "button3" ).setAttribute( "onClick", "correctButton4()" );
    document.getElementById( "button4" ).setAttribute( "onClick", "wrongButton4()" );
    document.getElementById( "button2" ).setAttribute( "onClick", "wrongButton4()" );

       
   
     var correctOrNot=document.querySelector("#correctOrNot");
      correctOrNot.innerHTML="Correct";




}

function wrongButton1(){
    var question=document.querySelector("#question");
    question.textContent="The condition in an if/ else statement is enclosed with _______.";
    var button1=document.querySelector("#button1");
    button1.textContent="1. quotes";
    var button2=document.querySelector("#button2");
    button2.textContent="2. curly brackets";
    //button2.onclick=correctButton2();
    var button3=document.querySelector("#button3");
    button3.textContent="3. parenthesis";
    var button4=document.querySelector("#button4");
    button4.textContent="4. square brackets";
    document.getElementById( "button1" ).setAttribute( "onClick", "wrongButton2()" );
    document.getElementById( "button3" ).setAttribute( "onClick", "wrongButton2()" );
    document.getElementById( "button4" ).setAttribute( "onClick", "wrongButton2()" );
    document.getElementById( "button2" ).setAttribute( "onClick", "correctButton2()" );

       
   
     var correctOrNot=document.querySelector("#correctOrNot");
      correctOrNot.innerHTML="Correct";
 
time-=15;

var correctOrNot=document.querySelector("#correctOrNot");
correctOrNot.innerHTML="Wrong";


  }
  function wrongButton2(){
   
    //selecting the question
    var question=document.querySelector("#question");
    //changing the question
    question.textContent="Arrays in JavaScript can be used to store _______.";
   
    var button1=document.querySelector("#button1");
    button1.textContent="1. numbers and strings";
    var button2=document.querySelector("#button2");
    button2.textContent="2. other arrays";
    var button3=document.querySelector("#button3");
    button3.textContent="3. booleans";
    var button4=document.querySelector("#button4");
    button4.onclick="correctButton3()";
    button4.textContent="4. all of the above";
    document.getElementById( "button1" ).setAttribute( "onClick", "wrongButton3()" );
    document.getElementById( "button3" ).setAttribute( "onClick", "wrongButton3()" );
    document.getElementById( "button4" ).setAttribute( "onClick", "correctButton3()" );
    document.getElementById( "button2" ).setAttribute( "onClick", "wrongButton3()" );

    time-=15;
   
     var correctOrNot=document.querySelector("#correctOrNot");
      correctOrNot.innerHTML="Correct";
 

  }
  function wrongButton3(){
    
    //selecting the question
    var question=document.querySelector("#question");
    //changing the question
    question.textContent="String values must be enclosed within ______ when being assigned to variables.";
   
    var button1=document.querySelector("#button1");
    button1.textContent="1. commas";
    var button2=document.querySelector("#button2");
    button2.textContent="2. curly brackets";
    var button3=document.querySelector("#button3");
    button3.textContent="3. quotes";
    var button4=document.querySelector("#button4");
    
    button4.textContent="4. parenthesis";
    document.getElementById( "button1" ).setAttribute( "onClick", "wrongButton4()" );
    document.getElementById( "button3" ).setAttribute( "onClick", "correctButton4()" );
    document.getElementById( "button4" ).setAttribute( "onClick", "wrongButton4()" );
    document.getElementById( "button2" ).setAttribute( "onClick", "wrongButton4()" );

    time-=15;
   
     var correctOrNot=document.querySelector("#correctOrNot");
      correctOrNot.innerHTML="wrong";
  }
  function wrongButton4(){
    
    //selecting the question
    var question=document.querySelector("#question");
    //changing the question
    question.textContent="A very useful tool used during development and devugging for printing content to the debugger is.";
   
    var button1=document.querySelector("#button1");
    button1.textContent="1. JavaScript";
    var button2=document.querySelector("#button2");
    button2.textContent="2. terminal/bash";
    var button3=document.querySelector("#button3");
    button3.textContent="3. for loops";
    var button4=document.querySelector("#button4");
    
    button4.textContent="4. console.log";
    document.getElementById( "button1" ).setAttribute( "onClick", "wrongButton5()" );
    document.getElementById( "button3" ).setAttribute( "onClick", "wrongButton5()" );
    document.getElementById( "button4" ).setAttribute( "onClick", "correctButton5()" );
    document.getElementById( "button2" ).setAttribute( "onClick", "wrongButton5()" );

    time-=15;
   
     var correctOrNot=document.querySelector("#correctOrNot");
      correctOrNot.innerHTML="wrong";


  }
  function correctButton4(){

    //selecting the question
    var question=document.querySelector("#question");
    //changing the question
    question.textContent="A very useful tool used during development and devugging for printing content to the debugger is.";
   
    var button1=document.querySelector("#button1");
    button1.textContent="1. JavaScript";
    var button2=document.querySelector("#button2");
    button2.textContent="2. terminal/bash";
    var button3=document.querySelector("#button3");
    button3.textContent="3. for loops";
    var button4=document.querySelector("#button4");
    
    button4.textContent="4. console.log";
    document.getElementById( "button1" ).setAttribute( "onClick", "wrongButton5()" );
    document.getElementById( "button3" ).setAttribute( "onClick", "wrongButton5()" );
    document.getElementById( "button4" ).setAttribute( "onClick", "correctButton5()" );
    document.getElementById( "button2" ).setAttribute( "onClick", "wrongButton5()" );

       
   
     var correctOrNot=document.querySelector("#correctOrNot");
      correctOrNot.innerHTML="correct";


  }
  function correctButton5(){
    location.replace("recordInitials.html");
    localStorage.setItem('score', time);
    var score = localStorage.getItem('score');
    console.log(score);

  }function wrongButton5(){

    time-=15;
    location.replace("recordInitials.html");
    localStorage.setItem('score', time);
    var score = localStorage.getItem('score');
    console.log(score);
  }
  function submitInitials(){
    
      var initials=document.querySelector("#initials").value;
      localStorage.setItem('initials', initials);
      window.open("highscores.html");
  }
  function restartQuiz(){
    window.open("index.html");
  }
startTimer();