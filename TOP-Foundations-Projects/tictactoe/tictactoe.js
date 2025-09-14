let boardObj = {
  board: ["", "", "", "", "", "", "", "", ""],
  winningCombinations: [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
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
    const [a, b, c] = boardObj.winningCombinations[i];

    if (
      boardObj.board[a] !== "" &&
      boardObj.board[a] === boardObj.board[b] &&
      boardObj.board[a] === boardObj.board[c]
    ) {
      if (player1.marker === boardObj.board[a]) {
        resultBox.innerHTML = `${player1.name} wins!`;
        player1.score++;

        runBoard();
        runPlayers();
        return;
      } else if (player2.marker === boardObj.board[a]) {
        resultBox.innerHTML = `${player2.name} wins!`;
        player2.score++;

        runBoard();
        runPlayers();
        return;
      }
    }
  }
  if (!boardObj.board.includes("")) {
    resultBox.innerHTML = "The game was a draw!";
    winner = "false";
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
  boardObj.board = ["", "", "", "", "", "", "", "", ""];

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


