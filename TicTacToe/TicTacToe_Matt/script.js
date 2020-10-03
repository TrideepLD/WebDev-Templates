
//Every possible win combination

// player creation
var whoIsPlaying = 'Player 1';

//Create gamee State

// need turn

// square clicked

// winner
const winningCombos = [ 
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]


//Board
let board = 
[
0, 0, 0,
0, 0, 0,
0, 0, 0
]

// App State 
let turn = 1
let winner = null
let players = {
  '1' : 'X',
  '-1' : '0'
}

//HTML Element Selected! 
//All Cells 
const gameboard = document.querySelector('.gameboard').addEventListener('click', takeTurn);
const button = document.querySelector('.restart').addEventListener('click', takeTurn);

/*----- functions -----*/


function switchTurn(){
  if(whoIsPlaying === 'Player 1') {
    whoIsPlaying = 'Player 2'
} else {
    whoIsPlaying = 'Player 1'
  }
}

  // function takeTurn(e) {
  //   if (board[e.target.id]{
  //     !== '0' return;
  //   } 
  //   board[e.target.id] = turn
  //   console.log(board)


