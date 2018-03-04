//Backend
var player1 = ""
var player2 = ""


function Player(playername, score) {
  this.playername = playername;
  this.score = score;
}


function nameAndScore() {
  $("#p1Name").text(p1.playername);
  $("#p2Name").text(p2.playername);
  $("#p1TotalScore").text(p1.score);
  $("#p2TotalScore").text(p2.score);
}
var playersturn = []

function issaOne() {
  if ($("#player1turn").is(":visible")) {
    playersturn = [0];
    $("#total1").text(playersturn);
    alert("Oops! Issa One");
    $("#player1turn").hide();
    $("#player2turn").text(p1.playername + "'s turn").show();

  } else if ($("#player2turn").is(":visible")) {
    playersturn = [0];
    $("#total1").text(playersturn);
    alert("Oops! Issa One");
    $("#player2turn").hide();
    $("#player1turn").text(p2.playername + "'s turn").show();
  }
}

function switchPlayers(){
  if($("#player1turn").is(":visible")){
    playersturn.push(rolling);
    playersturn.reduce(function(a, b) {
      return a + b;
    }, 0);
    p1.score = (p1.score+=playersturn)
    alert("hey " + p1.playername + " ya got " + p1.score);
  }
}





//Frontend
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var p1name = $("input#player1name").val();
    var p2name = $("input#player2name").val();
    score1 = 0;
    score2 = 0;
    p1 = new Player(p1name, score1);
    p2 = new Player(p2name, score2);
    console.log(p1.score);
    nameAndScore();
    $("div.hide1").hide();
    $("div.gameMode").show();
    $("input#roll").click(function(event) {
      event.preventDefault();
      $("die-roll").show();
      var rolling = (Math.floor(Math.random() * 6 + 1));
      $("#die-roll").text(rolling);
      if (rolling == 1) {
        issaOne();
      } else {
        playersturn.push(rolling);
        playersturn.reduce(function(a, b) {
          return a + b;
        }, 0);
        $("#total1").text(playersturn);
      }
    });
  $("#hold").click(function(event){
    switchPlayers();
    if(p1.score>=100){
      alert(p1.playername+ " takes the cake!");
    }
  });
  });


});
