

var yourscore = 0;
var aiscore = 0;

var le = document.getElementById('click');
le.addEventListener('click',function(){
  var audio = new Audio('dice.mp3');
  audio.play();
  roll();
});


function roll(){
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  var randomImageSource = "images/" + randomDiceImage; //images/dice1.png - images/dice6.png

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src", randomImageSource);


  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    yourscore = yourscore + 1;
    document.querySelector("h1").innerHTML = "🚩YOU Wins!";
  }
  else if (randomNumber2 > randomNumber1) {
    aiscore = aiscore + 1;
    document.querySelector("h1").innerHTML = "AI Wins! 🚩";
  }
  else {
    yourscore = yourscore + 1;
    aiscore = aiscore + 1;
    document.querySelector("h1").innerHTML = "Draw!";
  }


  document.getElementById('scoreYou').innerHTML = yourscore;
  document.getElementById('scoreAi').innerHTML =aiscore;

}
