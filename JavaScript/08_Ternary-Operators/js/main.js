// Conditionals: Ternary Operator
// O operador condicional (ternário) é o único operador JavaScript que possui três operandos. Este operador é frequentemente usado como um atalho para a instrução if.

// syntax
// condition ? idTrue : ifFalse;

let soup = "Chicken Noodle Soup";
let response = soup ? "Yes, we have soup." : "Sorry, no soup today.";
console.log(response);

// || teste 2
let sup = "Chicken Noodle Soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned
  ? "Sorry, no soup for you!"
  : sup
  ? `Yes, we have ${sup} today.`
  : "Sorry, no soup today.";
console.log(soupAccess);

// || teste 3
let testScore = 79;
let myGrade =
  testScore > 89
    ? "A"
    : testScore > 79
    ? "B"
    : testScore > 69
    ? "C"
    : testScore > 59
    ? "D"
    : "F";
console.log(`My Test grade is a ${myGrade}.`);

// || teste 4
let playerOne = "rock";
let computer = "rock";
let result =
  playerOne === computer
    ? "Tie game!"
    : playerOne === "rock" && computer === "paper"
    ? "Computer wins!"
    : playerOne === "paper" && computer === "scissors"
    ? "Computer wins!"
    : playerOne === "scissors" && computer === "rock"
    ? "computer wins!"
    : "playerOne wins";
console.log(result);
