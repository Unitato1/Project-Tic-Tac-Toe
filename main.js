const Player = (name, symbol) => {
  return { name, symbol };
};

const gameBoard = (() => {
  let Board = [];
  const dom_Board = document.querySelector("#board");
  const newgame = document.querySelector(".newgame");
  const h1 = document.querySelector("h1");
  let field;
  let winner;
  let occupied = 0;
  const reset = () => {
    Board = [];
    winner = false;
    occupied = 0;
    dom_Board.replaceChildren();
    h1.textContent = "Tic-Tac-Toe";
    createBoard();
    h1.className = "";
  };
  newgame.addEventListener("click", () => {
    reset();
  });
  const createBoard = () => {
    for (let i = 0; i < 9; i++) {
      field = document.createElement("div");
      field.dataset.pos = i;
      field.addEventListener("mousedown", function () {
        if (winner || this.textContent !== "") {
          return;
        }
        this.textContent = game.curr;
        game.curr = game.curr === "X" ? "O" : "X";
        occupied += 1;
        if (checkWinner()) {
          winner = true;
          game.set_winner(game.curr === "X" ? "O" : "X", false);
          return;
        }
        if (occupied === 9) {
          winner = true;
          game.set_winner(game.curr === "X" ? "O" : "X", true);
          return;
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
  return { newgame, checkWinner, createBoard, winner, get_occupied };
})();
// ibistek a duha
// slonik a blcha
// hviezdicka a slnieckom
// palmicka a vlna morska
// prasatko a tuipan
// chopotniska a maco
// velke bu a male bu
const player = (name, symbol) => {
  return { name, symbol };
};
const game = (() => {
  const curr = "X";
  const h1 = document.querySelector("h1");
  const player_one = document.querySelector("#player_one");
  const player_two = document.querySelector("#player_two");
  const submit = document.querySelector("#submit");
  const radio_X = document.querySelector("#X");
  const radio_O = document.querySelector("#O");
  const label_X = document.querySelector("#label_X");
  const label_O = document.querySelector("#label_O");
  const sign_players = () => {
    Player_One = Player(player_one.value, label_X.textContent);
    Player_Two = Player(player_two.value, label_O.textContent);
    if (radio_X.checked) {
      console.log(Player_One, Player_Two);
    }
  };
  radio_X.addEventListener("click", () => {
    label_X.textContent = "X";
    label_O.textContent = "O";
  });
  radio_O.addEventListener("click", () => {
    label_X.textContent = "O";
    label_O.textContent = "X";
  });
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    sign_players();
  });
  // gameBoard.createBoard();
  const set_winner = (winner, tie) => {
    gameBoard.newgame.className = "newgame gamend";
    if (tie) {
      h1.textContent = "It's tie. Try another game.";
    } else {
      h1.textContent = "The winner is " + winner + ".";
    }
  };

  return { curr, set_winner };
})();
