var player1Name = prompt("What is your Name?");
var player2Name = prompt("What is your Partner's Name?");
document.querySelectorAll("p")[0].innerHTML= player1Name;
document.querySelectorAll("p")[1].innerHTML= player2Name;

var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumberSource = ("images/dice"+randomNumber1+".png");
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomNumberSource);


var randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomNumberSource2= ("images/dice" +randomNumber2+".png");
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomNumberSource2);


if (randomNumber1 > randomNumber2){
  document.querySelectorAll("h1")[0].innerHTML= "🚩Player1 Wins!";
}else if (randomNumber1 < randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML= "Player2 Wins!🚩";
}
else {
  document.querySelectorAll("h1")[0].innerHTML= "🚩Drow!🚩";
}
