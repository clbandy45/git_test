let boardObj = {
  board: ["", "", "", "", "", "", "", "","", "", "", "", "", "", "", "","", "", "", "", "", "", "", "","", "", "", "", "", "", "", "","","","",""],
  winningCombinations: [
    [0, 1, 2, 3],
    [1,2,3,4],
    [2,3,4,5],
    [6,7,8,9],
    [7,8,9,10],
    [8,9,10,11],
    [12,13,14,15],
    [13,14,15,16],
    [14,15,16,17],
    [18,19,20,21],
    [19,20,21,22],
    [20,21,22,23],
    [24,25,26,27],
    [25,26,27,28],
    [26,27,28,29],
    [30,31,32,33],
    [31,32,33,34],
    [32,33,34,35],
    [0,6,12,18],
    [6,12,18,24],
    [12,18,24,30],
    [1,7,13,19],
    [7,13,19,25],
    [13,19,25,31],
    [2,8,14,20],
    [8,14,20,26],
    [14,20,26,32],
    [3,9,15,21],
    [9,15,21,27],
    [15,21,27,33],
    [4,10,16,22],
    [10,16,22,28],
    [16,22,28,34],
    [5,11,17,23],
    [11,17,23,29],
    [17,23,29,35],
    [2,9,16,23],
    [1,8,15,22],
    [8,15,22,29],
    [0,7,14,21],
    [7,14,21,28],
    [14,21,28,35],
    [6,13,20,27],
    [13,20,27,34],
    [12,19,26,33],
    [18,13,8,3],
    [24,19,14,9],
    [19,14,9,4],
    [30,25,20,15],
    [25,20,15,10],
    [20,15,10,5],
    [31,26,21,16],
    [26,21,16,11],
    [32,27,22,17]
  ],
  winWithFiveCombos: [
    [0,1,2,3,4],
    [1,2,3,4,5],
    [6,7,8,9,10],
    [7,8,9,10,11],
    [12,13,14,15,16],
    [13,14,15,16,17],
    [18,19,20,21,22],
    [19,20,21,22,23],
    [24,25,26,27,28],
    [25,26,27,28,29],
    [30,31,32,33,34],
    [31,32,33,34,35],
    [0,6,12,18,24],
    [6,12,18,24,30],
    [1,7,13,19,25],
    [7,13,19,25,31],
    [2,8,14,20,26],
    [8,14,20,26,32],
    [3,9,15,21,27],
    [9,15,21,27,33],
    [4,10,16,22,28],
    [10,16,22,28,34],
    [5,11,17,23,29],
    [11,17,23,29,35],
    [0,7,14,21,28],
    [7,14,21,28,35],
    [1,8,15,22,29],
    [6,13,20,27,34],
    [30,25,20,15,10],
    [25,20,15,10,5],
    [24,19,14,9,4],
    [31,26,21,16,11]
  ]
 
};

function Player(name, marker, score) {
  this.name = name;
  this.marker = marker;
  this.score = score;
  this.sayTurn = function () {
    if (this.marker == "X") {
      return "You are X. You go first!";
    } else if (this.marker == "O") {
      return "You are O. You go second!";
    }
  };
}

const player1 = new Player("Player One", "X", 0);
const player2 = new Player("Player Two", "O", 0);

const screenBoard = document.getElementById("board");
const p1Box = document.getElementById("player1box");
const p2Box = document.getElementById("player2box");
const resultBox = document.getElementById("result-box");
const playAgain = document.getElementById("play-again");
let turn = "player1";
let char = "X";
let bonusPoints = "false";
let winner = "false";

function runBoard() {
  screenBoard.innerHTML = ""; //clear board contents

  //display array on board
  boardObj.board.forEach((item, index) => {
    screenBoard.insertAdjacentHTML(
      "beforeend",
      `<div class="game-square" id="square-${index}">${item}<div>`
    );
  });
}

function gameflow() {
  bonusPoints = "false";
  checkWinWithFive();
  checkWin();
  turnSwap();
}

function turnSwap() {
  if (turn === "player1") {
    turn = "player2";
    char = `${player2.marker}`;
  } else {
    turn = "player1";
    char = `${player1.marker}`;
  }
}

function checkWin() {
  for (let i = 0; i < boardObj.winningCombinations.length; i++) {
    const [a, b, c, d] = boardObj.winningCombinations[i];

    if (
      boardObj.board[a] !== "" &&
      boardObj.board[a] === boardObj.board[b] &&
      boardObj.board[a] === boardObj.board[c] &&
      boardObj.board[a] === boardObj.board[d]
    ) {
      if (player1.marker === boardObj.board[a]) {
          if (bonusPoints === "true"){
        resultBox.innerHTML = `${player1.name} wins! +2 bonus points for connecting 5!`;
          } else { resultBox.innerHTML = `${player1.name} wins!`}
        player1.score++;
        winner = "true";
        runBoard();
        runPlayers();
        return;
      } else if (player2.marker === boardObj.board[a]) {
        if (bonusPoints === "true"){
        resultBox.innerHTML = `${player2.name} wins! +2 bonus points for connecting 5!`;
          } else { resultBox.innerHTML = `${player2.name} wins!`}

        player2.score++;
        winner = "true";
        runBoard();
        runPlayers();
        return;
      }
    }
  }
  if (!boardObj.board.includes("")) {
    resultBox.innerHTML = "The game was a draw!";
    winner = "true";
  }
}

function checkWinWithFive() {
  for (let i = 0; i < boardObj.winWithFiveCombos.length; i++) {
    const [a, b, c, d, e] = boardObj.winWithFiveCombos[i];

    if (
      boardObj.board[a] !== "" &&
      boardObj.board[a] === boardObj.board[b] &&
      boardObj.board[a] === boardObj.board[c] &&
      boardObj.board[a] === boardObj.board[d] &&
      boardObj.board[a] === boardObj.board[e]
    ) {
      if (player1.marker === boardObj.board[a]) {
        bonusPoints = "true";
        player1.score++;
        player1.score++;

      } else if (player2.marker === boardObj.board[a]) {
        bonusPoints = "true";
        player2.score++;
        player2.score++;
      }
    }
  }
}

function boardEdit() {
  const boxes = document.getElementsByClassName("game-square");

  Array.from(boxes).forEach((box, index) => {
    box.addEventListener("click", () => {
      //put the marker in the array
      if (boardObj.board[index] === "") {
        boardObj.board.splice(index, 1, char);
      } else {
        return; //if a char already there, kick out to avoid player change
      }

      gameflow(); //check for win, swap turns
      runBoard(); //populate the board
      boardEdit(); //add the event listeners, etc.
    });
  });
}

function runPlayers() {
  p1Box.innerHTML = `<div class="player-name">${player1.name}</div>
  <div class="player-score">${player1.score}</div>
  <div class="player-marker">${player1.marker}</div>
  <div class="player-turn">${player1.sayTurn()}</div>`;

  p2Box.innerHTML = `<div class="player-name">${player2.name}</div>
  <div class="player-score">${player2.score}</div>
  <div class="player-marker">${player2.marker}</div>
  <div class="player-turn">${player2.sayTurn()}</div>`;
}

runBoard();
boardEdit();
runPlayers();

playAgain.addEventListener("click", () => {
  if (winner === "false") {
    return;
  }
  boardObj.board = ["", "", "", "", "", "", "", "","", "", "", "", "", "", "", "","", "", "", "", "", "", "", "","", "", "", "", "", "", "", "","","","",""];

  resultBox.innerHTML = "";
  char = "X";
  if (player1.marker === "X") {
    player1.marker = "O";
  } else {
    player1.marker = "X";
    turn = "player1";
  }

  if (player2.marker === "O") {
    player2.marker = "X";
    turn = "player2";
  } else {
    player2.marker = "O";
  }

  runPlayers();
  runBoard();
  boardEdit();
});


