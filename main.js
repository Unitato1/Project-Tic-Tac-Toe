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
      field.textContent = "X";
      dom_Board.appendChild(field);
      Board.push(field);
    }
  };
  return { createBoard };
})();

const game = (() => {
  gameBoard.createBoard();
})();
