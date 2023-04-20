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
        console.log(game.curr);
        this.textContent = game.curr;
        game.curr = game.curr === "X" ? "O" : "X";
      });
      dom_Board.appendChild(field);
      Board.push(field);
    }
  };
  return { createBoard };
})();

const game = (() => {
  const curr = "X";
  gameBoard.createBoard();
  return { curr };
})();
