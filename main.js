const Player = (name, symbol) => {
  return { name, symbol };
};

const gameBoard = (() => {
  const Board = [];
  const dom_Board = document.querySelector("#board");
  let field;
  const createBoard = () => {
    for (let i = 0; i < 9; i++) {
      field = document.createElement("div");
      field.dataset.pos = i;
      field.addEventListener("mousedown", function () {
        if (this.textContent === "") {
          this.textContent = game.curr;
          game.curr = game.curr === "X" ? "O" : "X";
          console.log(game.checkWinner());
        }
      });
      dom_Board.appendChild(field);
      Board.push(field);
    }
    return Board;
  };
  return { Board, createBoard };
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
  let start_symbol;
  gameBoard.createBoard();
  const board = gameBoard.Board;
  const checkLine = (start, end, step) => {
    console.log(board[start]);
    start_symbol = gameBoard.Board[start].textContent;
    for (let i = start + step; start < end; i = +step) {
      if (start_symbol !== gameBoard.Board[i].textContent) {
        return false;
      }
    }
    return true;
  };
  const checkWinner = () => {
    return [
      [0, 2, 1],
      [3, 5, 1],
      [6, 8, 1],
    ].some(checkLine);
  };
  return { curr, checkWinner };
})();
