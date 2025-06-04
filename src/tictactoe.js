var weAreOnLetter = "x";
var topArray = ["", "", ""];
var middleArray = ["", "", ""];
var bottomArray = ["", "", ""];

function move() {
  if (topArray[0] === "o" && middleArray[0] === "o" && bottomArray[0] === "") {
    document.getElementById("bottomLeft").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    middleArray[0] === "o" &&
    bottomArray[0] === "o" &&
    topArray[0] === ""
  ) {
    document.getElementById("topLeft").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    topArray[0] === "o" &&
    bottomArray[0] === "o" &&
    middleArray[0] === ""
  ) {
    document.getElementById("middleLeft").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    topArray[1] === "o" &&
    middleArray[1] === "o" &&
    bottomArray[1] === ""
  ) {
    document.getElementById("bottomCenter").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    middleArray[1] === "o" &&
    bottomArray[1] === "o" &&
    topArray[1] === ""
  ) {
    document.getElementById("topCenter").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    topArray[1] === "o" &&
    bottomArray[1] === "o" &&
    middleArray[1] === ""
  ) {
    document.getElementById("middleCenter").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    topArray[2] === "o" &&
    middleArray[2] === "o" &&
    bottomArray[2] === ""
  ) {
    document.getElementById("bottomRight").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    middleArray[2] === "o" &&
    bottomArray[2] === "o" &&
    topArray[2] === ""
  ) {
    document.getElementById("topRight").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    topArray[2] === "o" &&
    bottomArray[2] === "o" &&
    middleArray[2] === ""
  ) {
    document.getElementById("middleRight").innerHTML = "o";
    player2Wins();
    return;
  } else if (topArray[0] === "o" && topArray[1] === "o" && topArray[2] === "") {
    document.getElementById("topRight").innerHTML = "o";
    player2Wins();
    return;
  } else if (topArray[1] === "o" && topArray[2] === "o" && topArray[0] === "") {
    document.getElementById("topLeft").innerHTML = "o";
    player2Wins();
    return;
  } else if (topArray[0] === "o" && topArray[2] === "o" && topArray[1] === "") {
    document.getElementById("topCenter").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    middleArray[0] === "o" &&
    middleArray[1] === "o" &&
    middleArray[2] === ""
  ) {
    document.getElementById("middleRight").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    middleArray[1] === "o" &&
    middleArray[2] === "o" &&
    middleArray[0] === ""
  ) {
    document.getElementById("middleLeft").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    middleArray[0] === "o" &&
    middleArray[2] === "o" &&
    middleArray[1] === ""
  ) {
    document.getElementById("middleCenter").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    bottomArray[0] === "o" &&
    bottomArray[1] === "o" &&
    bottomArray[2] === ""
  ) {
    document.getElementById("bottomRight").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    bottomArray[1] === "o" &&
    bottomArray[2] === "o" &&
    bottomArray[0] === ""
  ) {
    document.getElementById("bottomLeft").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    bottomArray[0] === "o" &&
    bottomArray[2] === "o" &&
    bottomArray[1] === ""
  ) {
    document.getElementById("bottomCenter").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    topArray[0] === "o" &&
    middleArray[1] === "o" &&
    bottomArray[2] === ""
  ) {
    document.getElementById("bottomRight").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    middleArray[1] === "o" &&
    bottomArray[2] === "o" &&
    topArray[0] === ""
  ) {
    document.getElementById("topLeft").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    topArray[0] === "o" &&
    bottomArray[2] === "o" &&
    middleArray[1] === ""
  ) {
    document.getElementById("middleCenter").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    topArray[2] === "o" &&
    middleArray[1] === "o" &&
    bottomArray[0] === ""
  ) {
    document.getElementById("bottomLeft").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    middleArray[1] === "o" &&
    bottomArray[0] === "o" &&
    topArray[2] === ""
  ) {
    document.getElementById("topRight").innerHTML = "o";
    player2Wins();
    return;
  } else if (
    topArray[2] === "o" &&
    bottomArray[0] === "o" &&
    middleArray[1] === ""
  ) {
    document.getElementById("middleCenter").innerHTML = "o";
    player2Wins();
    return;
  }
  ////////////
  else if (
    topArray[0] === "x" &&
    middleArray[0] === "x" &&
    bottomArray[0] === ""
  ) {
    document.getElementById("bottomLeft").innerHTML = "o";
    bottomArray[0] = "o";
    return;
  } else if (
    middleArray[0] === "x" &&
    bottomArray[0] === "x" &&
    topArray[0] === ""
  ) {
    document.getElementById("topLeft").innerHTML = "o";
    topArray[0] = "o";

    return;
  } else if (
    topArray[0] === "x" &&
    bottomArray[0] === "x" &&
    middleArray[0] === ""
  ) {
    document.getElementById("middleLeft").innerHTML = "o";
    middleArray[0] = "o";

    return;
  } else if (
    topArray[1] === "x" &&
    middleArray[1] === "x" &&
    bottomArray[1] === ""
  ) {
    document.getElementById("bottomCenter").innerHTML = "o";
    bottomArray[1] = "o";

    return;
  } else if (
    middleArray[1] === "x" &&
    bottomArray[1] === "x" &&
    topArray[1] === ""
  ) {
    document.getElementById("topCenter").innerHTML = "o";
    topArray[1] = "o";

    return;
  } else if (
    topArray[1] === "x" &&
    bottomArray[1] === "x" &&
    middleArray[1] === ""
  ) {
    document.getElementById("middleCenter").innerHTML = "o";
    middleArray[1] = "o";

    return;
  } else if (
    topArray[2] === "x" &&
    middleArray[2] === "x" &&
    bottomArray[2] === ""
  ) {
    document.getElementById("bottomRight").innerHTML = "o";
    bottomArray[2] = "o";

    return;
  } else if (
    middleArray[2] === "x" &&
    bottomArray[2] === "x" &&
    topArray[2] === ""
  ) {
    document.getElementById("topRight").innerHTML = "o";
    topArray[2] = "o";

    return;
  } else if (
    topArray[2] === "x" &&
    bottomArray[2] === "x" &&
    middleArray[2] === ""
  ) {
    document.getElementById("middleRight").innerHTML = "o";
    middleArray[2] = "o";

    return;
  } else if (topArray[0] === "x" && topArray[1] === "x" && topArray[2] === "") {
    document.getElementById("topRight").innerHTML = "o";
    topArray[2] = "o";

    return;
  } else if (topArray[1] === "x" && topArray[2] === "x" && topArray[0] === "") {
    document.getElementById("topLeft").innerHTML = "o";
    topArray[0] = "o";

    return;
  } else if (topArray[0] === "x" && topArray[2] === "x" && topArray[1] === "") {
    document.getElementById("topCenter").innerHTML = "o";
    topArray[1] = "o";

    return;
  } else if (
    middleArray[0] === "x" &&
    middleArray[1] === "x" &&
    middleArray[2] === ""
  ) {
    document.getElementById("middleRight").innerHTML = "o";
    middleArray[2] = "o";

    return;
  } else if (
    middleArray[1] === "x" &&
    middleArray[2] === "x" &&
    middleArray[0] === ""
  ) {
    document.getElementById("middleLeft").innerHTML = "o";
    middleArray[0] = "o";

    return;
  } else if (
    middleArray[0] === "x" &&
    middleArray[2] === "x" &&
    middleArray[1] === ""
  ) {
    document.getElementById("middleCenter").innerHTML = "o";
    middleArray[1] = "o";

    return;
  } else if (
    bottomArray[0] === "x" &&
    bottomArray[1] === "x" &&
    bottomArray[2] === ""
  ) {
    document.getElementById("bottomRight").innerHTML = "o";
    bottomArray[2] = "o";

    return;
  } else if (
    bottomArray[1] === "x" &&
    bottomArray[2] === "x" &&
    bottomArray[0] === ""
  ) {
    document.getElementById("bottomLeft").innerHTML = "o";
    bottomArray[0] = "o";

    return;
  } else if (
    bottomArray[0] === "x" &&
    bottomArray[2] === "x" &&
    bottomArray[1] === ""
  ) {
    document.getElementById("bottomCenter").innerHTML = "o";
    bottomArray[1] = "o";

    return;
  } else if (
    topArray[0] === "x" &&
    middleArray[1] === "x" &&
    bottomArray[2] === ""
  ) {
    document.getElementById("bottomRight").innerHTML = "o";
    bottomArray[2] = "o";

    return;
  } else if (
    middleArray[1] === "x" &&
    bottomArray[2] === "x" &&
    topArray[0] === ""
  ) {
    document.getElementById("topLeft").innerHTML = "o";
    topArray[2] = "o";

    return;
  } else if (
    topArray[0] === "x" &&
    bottomArray[2] === "x" &&
    middleArray[1] === ""
  ) {
    document.getElementById("middleCenter").innerHTML = "o";
    middleArray[1] = "o";

    return;
  } else if (
    topArray[2] === "x" &&
    middleArray[1] === "x" &&
    bottomArray[0] === ""
  ) {
    document.getElementById("bottomLeft").innerHTML = "o";
    bottomArray[0] = "o";

    return;
  } else if (
    middleArray[1] === "x" &&
    bottomArray[0] === "x" &&
    topArray[2] === ""
  ) {
    document.getElementById("topRight").innerHTML = "o";
    topArray[2] = "o";

    return;
  } else if (
    topArray[2] === "x" &&
    bottomArray[0] === "x" &&
    middleArray[1] === ""
  ) {
    document.getElementById("middleCenter").innerHTML = "o";
    middleArray[1] = "o";

    return;
  } else {
    var randomNumber = Math.floor(Math.random() * 9);
    /*alert(randomNumber)
        alert(topArray)
        alert(middleArray)
        alert(bottomArray)*/

    if (randomNumber === 0) {
      if (topArray[0] === "") {
        topArray[0] = "o";
        document.getElementById("topLeft").innerHTML = "o";
      } else {
        move();
      }
    } else if (randomNumber === 1) {
      if (topArray[1] === "") {
        topArray[1] = "o";
        document.getElementById("topCenter").innerHTML = "o";
      } else {
        move();
      }
    } else if (randomNumber === 2) {
      if (topArray[2] === "") {
        topArray[2] = "o";
        document.getElementById("topRight").innerHTML = "o";
      } else {
        move();
      }
    } else if (randomNumber === 3) {
      if (middleArray[0] === "") {
        middleArray[0] = "o";
        document.getElementById("middleLeft").innerHTML = "o";
      } else {
        move();
      }
    } else if (randomNumber === 4) {
      if (middleArray[1] === "") {
        middleArray[1] = "o";
        document.getElementById("middleCenter").innerHTML = "o";
      } else {
        move();
      }
    } else if (randomNumber === 5) {
      if (middleArray[2] === "") {
        middleArray[2] = "o";
        document.getElementById("middleRight").innerHTML = "o";
      } else {
        move();
      }
    } else if (randomNumber === 6) {
      if (bottomArray[0] === "") {
        bottomArray[0] = "o";
        document.getElementById("bottomLeft").innerHTML = "o";
      } else {
        move();
      }
    } else if (randomNumber === 7) {
      if (bottomArray[1] === "") {
        bottomArray[1] = "o";
        document.getElementById("bottomCenter").innerHTML = "o";
      } else {
        move();
      }
    } else if (randomNumber === 8) {
      if (bottomArray[2] === "") {
        bottomArray[2] = "o";
        document.getElementById("bottomRight").innerHTML = "o";
      } else {
        move();
      }
    }

    if (topArray.toString() === "o,o,o") {
      player2Wins();
      return;
    } else if (middleArray.toString() === "o,o,o") {
      player2Wins();
      return;
    } else if (bottomArray.toString() === "o,o,o") {
      player2Wins();
      return;
    } else if (
      topArray[0] === "o" &&
      middleArray[1] === "o" &&
      bottomArray[2] === "o"
    ) {
      player2Wins();
      return;
    } else if (
      topArray[2] === "o" &&
      middleArray[1] === "o" &&
      bottomArray[0] === "o"
    ) {
      player2Wins();
      return;
    } else if (
      topArray[0] === "o" &&
      middleArray[0] === "o" &&
      bottomArray[0] === "o"
    ) {
      player2Wins();
      return;
    } else if (
      topArray[1] === "o" &&
      middleArray[1] === "o" &&
      bottomArray[1] === "o"
    ) {
      player2Wins();
      return;
    } else if (
      topArray[2] === "o" &&
      middleArray[2] === "o" &&
      bottomArray[2] === "o"
    ) {
      player2Wins();
      return;
    }
  }
}
function markCell(cell) {
  if (document.getElementById("select").value === "Play vs. Computer") {
    weAreOnLetter = "x";
  }
  if (document.getElementById(cell).innerHTML === "") {
    document.getElementById(cell).innerHTML = weAreOnLetter;
    if (weAreOnLetter === "x") {
      document.getElementById(cell).style.color = "black";
    } else {
      document.getElementById(cell).style.color = "black";
    }

    if (cell === "topLeft") {
      topArray[0] = weAreOnLetter;
    } else if (cell === "topCenter") {
      topArray[1] = weAreOnLetter;
    } else if (cell === "topRight") {
      topArray[2] = weAreOnLetter;
    } else if (cell === "middleLeft") {
      middleArray[0] = weAreOnLetter;
    } else if (cell === "middleCenter") {
      middleArray[1] = weAreOnLetter;
    } else if (cell === "middleRight") {
      middleArray[2] = weAreOnLetter;
    } else if (cell === "bottomLeft") {
      bottomArray[0] = weAreOnLetter;
    } else if (cell === "bottomCenter") {
      bottomArray[1] = weAreOnLetter;
    } else if (cell === "bottomRight") {
      bottomArray[2] = weAreOnLetter;
    }

    if (topArray.toString() === "x,x,x") {
      player1Wins();
      return;
    } else if (middleArray.toString() === "x,x,x") {
      player1Wins();
      return;
    } else if (bottomArray.toString() === "x,x,x") {
      player1Wins();
      return;
    } else if (
      topArray[0] === "x" &&
      middleArray[1] === "x" &&
      bottomArray[2] === "x"
    ) {
      player1Wins();
      return;
    } else if (
      topArray[2] === "x" &&
      middleArray[1] === "x" &&
      bottomArray[0] === "x"
    ) {
      player1Wins();
      return;
    } else if (
      topArray[0] === "x" &&
      middleArray[0] === "x" &&
      bottomArray[0] === "x"
    ) {
      player1Wins();
      return;
    } else if (
      topArray[1] === "x" &&
      middleArray[1] === "x" &&
      bottomArray[1] === "x"
    ) {
      player1Wins();
      return;
    } else if (
      topArray[2] === "x" &&
      middleArray[2] === "x" &&
      bottomArray[2] === "x"
    ) {
      player1Wins();
      return;
    } else if (topArray.toString() === "o,o,o") {
      player2Wins();
      return;
    } else if (middleArray.toString() === "o,o,o") {
      player2Wins();
      return;
    } else if (bottomArray.toString() === "o,o,o") {
      player2Wins();
      return;
    } else if (
      topArray[0] === "o" &&
      middleArray[1] === "o" &&
      bottomArray[2] === "o"
    ) {
      player2Wins();
      return;
    } else if (
      topArray[2] === "o" &&
      middleArray[1] === "o" &&
      bottomArray[0] === "o"
    ) {
      player2Wins();
      return;
    } else if (
      topArray[0] === "o" &&
      middleArray[0] === "o" &&
      bottomArray[0] === "o"
    ) {
      player2Wins();
      return;
    } else if (
      topArray[1] === "o" &&
      middleArray[1] === "o" &&
      bottomArray[1] === "o"
    ) {
      player2Wins();
      return;
    } else if (
      topArray[2] === "o" &&
      middleArray[2] === "o" &&
      bottomArray[2] === "o"
    ) {
      player2Wins();
      return;
    } else if (
      topArray.includes("") === false &&
      middleArray.includes("") === false &&
      bottomArray.includes("") === false
    ) {
      tie();
      return;
    }

    if (weAreOnLetter === "x") {
      weAreOnLetter = "o";
    } else {
      weAreOnLetter = "x";
    }

    if (document.getElementById("select").value === "Play vs. Computer") {
      move();
    }
  }
}

function player1Wins() {
  var x = document.getElementsByClassName("cell");
  for (var z = 0; z < 9; z++) {
    x[z].style.pointerEvents = "none";
  }

  if (document.getElementById("select").value === "Play vs. Computer") {
    document.getElementById("finishPlace").innerHTML =
      "<br><br>You Win!<br><br>";
  } else {
    document.getElementById("finishPlace").innerHTML =
      "<br><br>Player 1 Wins!<br><br>";
  }

  var button = document.createElement("button");
  button.innerHTML = "Play Again";
  button.addEventListener("click", playAgain);

  document.getElementById("finishPlace").appendChild(button);
}

function player2Wins() {
  var x = document.getElementsByClassName("cell");
  for (var z = 0; z < 9; z++) {
    x[z].style.pointerEvents = "none";
  }
  if (document.getElementById("select").value === "Play vs. Computer") {
    document.getElementById("finishPlace").innerHTML =
      "<br><br>Computer Wins!<br><br>";
  } else {
    document.getElementById("finishPlace").innerHTML +=
      "<br><br>Player 2 Wins!<br><br>";
  }

  var button = document.createElement("button");
  button.innerHTML = "Play Again";
  button.addEventListener("click", playAgain);

  document.getElementById("finishPlace").appendChild(button);
}

function tie() {
  var x = document.getElementsByClassName("cell");
  for (var z = 0; z < 9; z++) {
    x[z].style.pointerEvents = "none";
  }
  document.getElementById("finishPlace").innerHTML = "<br><br>Draw!<br><br>";

  var button = document.createElement("button");
  button.innerHTML = "Play Again";
  button.addEventListener("click", playAgain);

  document.getElementById("finishPlace").appendChild(button);
}

function playAgain() {
  window.location.reload();
}
