var player = "X";

let a = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
let matchOver = false;

function currenctPlayer() {
  if (player == "X") {
    player = "O";
    document.querySelector(".player").innerHTML = "O";
  } else {
    document.querySelector(".player").innerHTML = "X";
    player = "X";
  }
}
// play function
function play(elem) {
  if (elem.innerHTML == "" && !matchOver) {
    elem.innerHTML = player;
    if (elem.id == 0) {
      a[0][0] = player;
    }
    if (elem.id == 1) {
      a[0][1] = player;
    }
    if (elem.id == 2) {
      a[0][2] = player;
    }
    if (elem.id == 3) {
      a[1][0] = player;
    }
    if (elem.id == 4) {
      a[1][1] = player;
    }
    if (elem.id == 5) {
      a[1][2] = player;
    }
    if (elem.id == 6) {
      a[2][0] = player;
    }
    if (elem.id == 7) {
      a[2][1] = player;
    }
    if (elem.id == 8) {
      a[2][2] = player;
    }
    checkWinner(player);
    currenctPlayer();
  }
  if (elem.innerHTML !== "") {
    return false;
  }
}

function checkWinner(player) {
  const nonEmpty = a.every((elem, index) => {
    return a[index].every((elm) => {
      return elm !== "";
    });
  });
  if (
    (a[0][0] === player && a[0][1] === player && a[0][2] === player) ||
    (a[1][0] === player && a[1][1] === player && a[1][2] === player) ||
    (a[2][0] === player && a[2][1] === player && a[2][2] === player) ||
    (a[0][0] === player && a[1][0] === player && a[2][0] === player) ||
    (a[0][1] === player && a[1][1] === player && a[2][1] === player) ||
    (a[0][2] === player && a[1][2] === player && a[2][2] === player) ||
    (a[0][0] === player && a[1][1] === player && a[2][2] === player) ||
    (a[0][2] === player && a[1][1] === player && a[2][0] === player)
  ) {
    document.getElementById(
      "game-status"
    ).innerHTML = `Player ${player} won the match`;
    matchOver = true;
  } else if (nonEmpty) {
    document.getElementById("game-status").innerHTML = `Match Tie`;
  }
}

// reset function
function reset() {
  var cells = document.querySelectorAll(".game__cell");
  cells.forEach((elem) => {
    elem.innerHTML = "";
    console.clear();
    player = "X";
    a = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];
    document.getElementById("game-status").innerHTML = "";
    matchOver = false;
    document.querySelector(".player").innerHTML = "X";
  });
}
