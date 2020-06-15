var player1Name = prompt("What is your Name?");
var player2Name = prompt("What is your Partner's Name?");
document.querySelectorAll("p")[0].innerHTML= player1Name;
document.querySelectorAll("p")[1].innerHTML= player2Name;

var randomNumber1 = Math.floor(Math.random()*6 + 1);
var randomNumberSource = ("dice"+randomNumber1+".gif");
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomNumberSource);


var randomNumber2 = Math.floor(Math.random()*6 + 1);
var randomNumberSource2= ("dice" +randomNumber2+".gif");
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomNumberSource2);


if (randomNumber1 > randomNumber2){
  document.querySelectorAll("h1")[0].innerHTML= "🚩" + player1Name +" Wins!";
}else if (randomNumber1 < randomNumber2) {
  document.querySelectorAll("h1")[0].innerHTML= player2Name+ "Wins!🚩";
}
else {
  document.querySelectorAll("h1")[0].innerHTML= "🚩Drow!🚩";
}
