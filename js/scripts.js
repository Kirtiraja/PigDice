// Game.prototype.addScores = function(turn) {
//
//   for (var i = 1; i < turn.length; i++){
//     if (turn.includes(1)){
//       alert("Next player's turn")
//     } else if  (turn.includes(2) || turn.includes(3) || turn.includes(4) || turn.includes(5) || turn.includes(6))  {
//       console.log('hit the else if');
//     }
//     console.log("working")
//   }
// return turn
// }
// // }
//


//
//
// Player1.prototype.addScore
//

function Player () {
  this.score = [];
  this.turn = []
}


Player.prototype.addScore = function(){
var total=0;
for(var i in this.turn) {
  total += this.turn[i];
 }
 this.score.push(total)
 console.log(this.score)
}


//user interface
$(document).ready(function(){
  var turn = [];
  var player1 = new Player ()
  var player2 = new Player ()

  $("#hold1").click(function(event) {
    event.preventDefault();
    player1.addScore(player1.turn);
    $("#score1").text(player1.score);
  //   if (player1.turn.includes(2) || player1.turn.includes(3) || player1.turn.includes(4) || player1.turn.includes(5) || player1.turn.includes(6) ) {
  //   player1.addScore(player1.turn);
  //   console.log(player1.turn)
  // }
})
  $("#hold2").click(function(event) {
    event.preventDefault();
    player2.addScore(player2.turn);
    $("#score2").text(player2.score);
  })


  $("#button").click(function(event){
    event.preventDefault()
    var dice = Math.floor((Math.random() * 6) + 1)
    $(".results").append(dice + ", ");
    // player2.turn.push(dice)
    console.log(player1.turn)
    if (dice !== 1){
      player1.turn.push(dice)
      player2.turn.push(dice)
    }
    else {
      player1.turn = 0;
      alert("1! Next Player's turn!")
     }
//     else if (player1.turn.includes(2) || player1.turn.includes(3) || player1.turn.includes(4) || player1.turn.includes(5) || player1.turn.includes(6) ) {
//     player1.addScore(player1.turn);
//     console.log(player1.turn)
//     $("#score1").text(player1.score);
// }

})
})
