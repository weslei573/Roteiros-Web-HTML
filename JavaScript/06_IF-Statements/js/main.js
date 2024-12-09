// Conditionals: If Statements

// syntax
let customerIsBanned = false;
let soup = "chicken noodle soup";
let crackers = true;
let reply;
if (customerIsBanned) {
  reply = "No soup for your!";
} else if (soup && crackers) {
  reply = `Here's your order of ${soup} & crackers.`;
} else if (soup) {
  reply = `Here's your order of ${soup}`;
} else {
  reply = `Sorry, werw out of soup.`;
}
console.log(reply);

// Teste com numero

let testScore = 59;
let collegeStudent = true;
let grade;

if (testScore >= 90) {
  grade = "A";
} else if (testScore >= 80) {
  grade = "B";
} else if (testScore >= 70) {
  grade = "C";
} else if (testScore >= 60) {
  grade = "D";
} else {
  // Declaração if aninhada
  if (collegeStudent) {
    grade = "U";
  } else {
    grade = "F";
  }
}
console.log(grade);

// Decision tree!

if (playerOne === computer) {
  // tie game!
} else if (playerOne === "rock") {
  if (computer === "paper") {
    // computer vitórias
  } else {
    // playerOne vitórias
  }
} else if (playerOne === "paper") {
  if (computer === "scissors") {
    // computer vitórias
  } else {
    // playerOne vitórias
  }
} else {
  if (computer === "rock") {
    // computer vitórias
  } else {
    // playerOne vitórias
  }
}
