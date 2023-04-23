const Player = (name, symbol) => {
  return { name, symbol };
};

const gameBoard = (() => {
  const Board = [];
  const dom_Board = document.querySelector("#board");
  let field;
  let winner;
  let occupied = 0;
  const createBoard = () => {
    for (let i = 0; i < 9; i++) {
      field = document.createElement("div");
      field.dataset.pos = i;
      field.addEventListener("mousedown", function () {
        if (winner) {
          return;
        }
        if (this.textContent === "") {
          this.textContent = game.curr;
          game.curr = game.curr === "X" ? "O" : "X";
          occupied += 1;
          console.log(occupied);
        } else {
          return;
        }
        if (checkWinner()) {
          winner = true;
          game.set_winner(game.curr === "X" ? "O" : "X");
        }
      });
      dom_Board.appendChild(field);
      Board.push(field);
    }
  };
  let start_symbol;
  const checkLine = (arg) => {
    [start, end, step] = arg;
    start_symbol = Board[start].textContent;
    console.log(start, end, step);
    for (let i = start; i <= end; i += step) {
      if (start_symbol !== Board[i].textContent || start_symbol === "") {
        return false;
      }
    }
    return true;
  };
  const get_occupied = () => {
    return occupied;
  };
  const checkWinner = () => {
    return [
      [0, 2, 1],
      [3, 5, 1],
      [6, 8, 1],
      [0, 6, 3],
      [1, 7, 3],
      [2, 8, 3],
      [0, 8, 4],
      [2, 6, 2],
    ].some(checkLine);
  };
  return { checkWinner, createBoard, winner, get_occupied };
})();
// ibistek a duha
// slonik a blcha
// hviezdicka a slnieckom
// palmicka a vlna morska
// prasatko a tuipan
// chopotniska a maco
// velke bu a male bu
const game = (() => {
  const curr = "X";
  const h1 = document.querySelector("h1");
  let winner;
  gameBoard.createBoard();
  const set_winner = (pass) => {
    winner = pass;
    console.log(winner);
    display_winner();
  };
  const display_winner = () => {
    h1.textContent =
      "The winner is " +
      winner +
      ", if you would like to play another game press new game.";
    h1.className = "end";
    console.log(gameBoard.get_occupied());
  };

  return { curr, set_winner };
})();
