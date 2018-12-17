var player1="";
var player2="";

var throwdice = function () {
  return Math.floor(Math.random())+1;
}

function Player(turn) {
  this.roll = 0;
  this.tempscore = 0;
  this.totalscore = 0;
  this.turn = turn;
  this.playerName;
}

Player.prototype.rollone = function() {
  if (this.roll === 1) {
  this.tempscore = 0;
  alert("Sorry " + this.playerName + ", you rolled a 1! Your turn is over!")
  } else {
  this.tempscore += this.roll;
  }
}

Player.prototype.hold = function () {
  this.totalscore += this.tempscore;
  this.tempscore = 0;
  alert(this.playerName + ", your turn is over, pass the mouse!");
}

Player.prototype.changeturn = function () {
  if (this.roll ===1) {
    this.turn = false;
  } else {
    this.turn = true;
  }
}
