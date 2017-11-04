window.onload = function()
{
  var gameControl = document.getElementById('gameControl');
  var gameState = document.getElementById('gameState');
  var gameBorder = document.getElementById('gameBorder');
  Is_mole = 0;
  gameControl.onclick = function()
  {
    if(gameState.innerText == 'Game over') GameStart(Is_mole);
    else GameStop();
  }
  gameBorder.onclick = function(input) {
    Playing(input.target);
   }
  return;
}

function GameStart(Is_mole)
{
  var gameState = document.getElementById('gameState');
  var Time = document.getElementById('TimeCount');
  var Score = document.getElementById('scoreNum');
  gameState.innerText = 'Playing';
  Time.innerText = 31;
  Score.innerText = 0;
  TimeCounting();
  Playing(0);
}

function GameStop()
{
  Is_mole = 0;
  clearTimeout(t);
  var gameState = document.getElementById('gameState');
  gameState.innerText = 'Game over';
  ClearMole()
}

function GameOver()
{
  Is_mole = 0;
  var Time = document.getElementById('TimeCount');
  Time.innerText = 0;
  var gameState = document.getElementById('gameState');
  gameState.innerText = 'Game over';
  ClearMole()
  clearTimeout(t);
  Alert(); //The alert will break the clearTimeout() into ineffective
}
function Alert()
{
  var Score = document.getElementById('scoreNum').innerText;
  var info = "Game over\n" + "Score: " + Score;
  alert(info);
}

function TimeCounting()
{
  if(document.getElementById('gameState').innerText == 'Game over') return;
  var Time = document.getElementById('TimeCount');
  Time.innerText = Time.innerText - 1;
  if(Time.innerText == -1) GameOver();
  t = setTimeout("TimeCounting()", 1000);
}

function Playing(target)
{
  if(document.getElementById('gameState').innerText == 'Game over') return;
  if(Is_mole == 1)
  {
    if(target.className == 'mole')
    {
      var color = target.getAttribute("style", "background-color");
      var Score = document.getElementById('scoreNum');
      if(color == "background-color:skyblue") {
        Score.innerText = Number(Score.innerText) + 1;  //Namber(): to make it a number
        target.setAttribute("style", "background-color:white");
        Is_mole = 0;
      }
      else{
        Score.innerText = Score.innerText - 1;
      }
    }
  }
  if(Is_mole == 0)
  {
    var temp = -1;
    while(temp < 0 || temp > 59) temp = Math.ceil(Math.random()*60) - 1;
     //由于取0概率极小，为了概率相同，取 1 ~ 60 为主的值，再减1获得要求数值
    var Mole = document.getElementById(temp);
    Mole.setAttribute("style", "background-color:skyblue");
    Is_mole = 1;
  }
}
function ClearMole()
{
  for(var i = 0; i < 60; i++)
  {
    var Mole = document.getElementById(i);
    Mole.setAttribute("style", "background-color:white");
  }
}
