// First Interactive Game
// || O método -> trim() <- remove os espaços em branco (whitespaces) do início e/ou fim de um texto. É considerado espaço em branco (espaço, tabulação, espaço fixo/rígido, etc.) e todo sinal de fim de linha de texto
// || O método -> toLowerCase() <- retorna o valor da string que foi chamada convertido para minúsculo.
let playGame = confirm("Vamos jogar pedra, papel ou tesoura?");
if (playGame) {
  //play
  let playerChoice = prompt("Por favor, insira pedra, papel ou tesoura.");
  if (playerChoice) {
    let playerOne = playerChoice.trim().toLowerCase();
    if (
      playerOne === "pedra" ||
      playerOne === "papel" ||
      playerOne === "tesoura"
    ) {
      let computerChoice = Math.floor(Math.random() * 3 + 1);
      let computer =
        computerChoice === 1
          ? "pedra"
          : computerChoice === 2
          ? "papel"
          : "tesoura";

      let result =
        playerOne === computer
          ? "Tie game!"
          : playerOne === "pedra" && computer === "papel"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
          : playerOne === "papel" && computer === "tesoura"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
          : playerOne === "tesoura" && computer === "pedra"
          ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`
          : `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins`;
      alert(result);
      let playAgain = confirm("Jogar novamente?");
      playAgain ? location.reload() : alert("OK, obrigado por jogar.");
    } else {
      alert("Você não inseriu pedra, papel ou tesoura.");
    }
  } else {
    alert("Acho que você mudou de ideia. Talvez na próxima vez.");
  }
} else {
  alert("Ok, talvez na próxima vez.");
}
