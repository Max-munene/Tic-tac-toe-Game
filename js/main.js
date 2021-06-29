import Game from './Game.js'
import GameView from './GameView.js'


let game = new Game();
let gameView = new GameView();

document.querySelector(".restart").addEventListener("click",() => {
  console.log("New Game");
  onRestartClick();
})

let tiles = document.querySelectorAll(".board-tile");
tiles.forEach((tile) =>{
  tile.addEventListener("click", ()=>{
   onTileClick(tile.dataset.index);
  })

})

function onTileClick(i){

  game.makeMove(i);//make a move 
  gameView.updateBoard(game);//update booard
  
  
}

function onRestartClick(){
  game = new Game();
  gameView.updateBoard(game);
}

gameView.updateBoard(game);
