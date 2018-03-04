//Backend
var player1 = ""
var player2 = ""
var playersturn = []

function Player(player1name, player2name, score1, score2){
  this.player1name = player1name;
  this.player2name = player2name;
  this.score1 = score1;
  this.score2 = score2;
}
Player.prototype.totalscore = function(a, b){
  return a+b;
}
function nameAndScore(){
  $("#player1name").text(player1name);
  $("#player2name").text(player1name);
  $("")


}



//Frontend
$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault();




    $("div.hide1").hide();
    $("div.gameMode").show();

  });


});
