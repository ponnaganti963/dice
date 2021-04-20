

var yourscore = 0;
var aiscore = 0;
var level = 10;
var op = document.querySelector('select');
document.querySelector('.startbtn').addEventListener('click',function(){
  document.querySelector('.mybd').style.display ="inline";
  document.querySelector('.selectingLevel').style.display = "none";
  if(op.value == "easy"){
    level =20;
  } else if (op.value == "hard") {
    level = 50;
  }else{
    level = 80;
  }
})

  var le = document.getElementById('click');
  le.addEventListener('click',function(){
    var audio = new Audio('dice.mp3');
    audio.play();
    roll();
  });

  var l = document;
  l.addEventListener('keypress',function(){
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

      yourscore = yourscore + randomNumber1;
      aiscore = aiscore + randomNumber2;

    document.getElementById('scoreYou').innerHTML = yourscore;
    document.getElementById('scoreAi').innerHTML =aiscore;
   if(yourscore >= level || aiscore >= level)
    result();

  }

  function result(){
      document.querySelector('.container-md').style.display = "inline";
      document.querySelector('.dices').style.opacity = 0.3;
      document.querySelector('.stylebtn').disabled = true;
      if(yourscore > aiscore ){

      document.querySelector("h1").innerHTML = "🚩YOU Wins!";
      var audio = new Audio('Positive-game-notification.mp3');
      audio.play();


    }else if (yourscore < aiscore ) {

      document.querySelector("h1").innerHTML = "AI Wins! 🚩";
      var audio = new Audio('losing-synth-melody-sound-effect.mp3');
      audio.play();



    } else {

      document.querySelector("h1").innerHTML = "Draw!";
    }

    document.querySelector('.container-md').style.display = "inline";
}

  function clearing(){
    yourscore =0;
    aiscore =0;

    window.location.reload();
  }
