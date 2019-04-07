gameInit();

  var gamePlay, player, roundScore, totalScore, previousDice1, previousDice2, goal;
  document.getElementById("newGame").addEventListener("click", gameInit);
  function gameInit() {
    gamePlay =true;
    player=Math.floor(Math.random()*2);
    roundScore=0;
    totalScore=[0,0];
    goal=100;


    document.getElementById("dice1").textContent="";
    document.getElementById("dice2").textContent="";


     document.getElementById("current-score-0").textContent= roundScore;
     document.getElementById("current-score-1").textContent= roundScore;

    document.getElementById("total-0").textContent= totalScore[0];
    document.getElementById('total-1').textContent= totalScore[1];

    document.getElementById("dice1").textContent= "";
    document.getElementById("dice2").textContent= "";

    document.getElementById("payer-label-0").textContent = "Player 1";
    document.getElementById("player-label-0").classList.remove("font-red");

    document.getElementById("player-label-1").textContent="Player 2";
    document.getElementById("player-label-1").classList.remove ("front-red");

    }


  }
