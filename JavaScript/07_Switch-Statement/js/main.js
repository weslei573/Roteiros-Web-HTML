// Conditionals: Switch Statements

// syntax
// Esse exemplo esta escolhendo aleatoriamente um numero de 1 a 3, e mostrando a escolha
switch (Math.floor(Math.random() * 3 + 1)) {
  case 1:
    console.log("Escolhei 1");
    break;
  case 2:
    console.log("Escolhei 2");
    break;
  case 3:
    console.log("Escolhei 3");
    break;

  default:
    console.log("No match");

    break;
}

// Aqui você esta escolhendo a Lista de rock, ou pode se, paper e rock, ai você usa o computer para escolher algo dentro da condição 
let playerOne = "rock";
let computer = "scissors";

switch (playerOne) {
  case computer:
    console.log("'tie game!");
    break;

  case "rock":
    if (computer === "paper") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins");
    }
    break;

  case "paper":
    if (computer === "scissors") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins");
    }
    break;

  default:
    if (computer === "rock") {
      console.log("computer wins!");
    } else {
      console.log("playerOne wins");
    }
    break;
}
