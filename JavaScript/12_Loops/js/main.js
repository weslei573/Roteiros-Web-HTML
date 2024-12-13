// || Loops
// A declaração -> while <- cria um laço que executa uma rotina especifica enquanto a condição de teste for avaliada como verdadeira. A condição é avaliada antes da execução da rotina.
// teste 1
let myNumber = 0;
while (myNumber < 50) {
  myNumber += 2;
  // -> myNumber++; <- ele ira conta ate 50
  // -> myNumber += 2 <- conta os numero pares até 50
  console.log(myNumber);
} 

// Não crie um loop infinito

// A declaração -> do...while <- cria um laço que executa uma declaração até que o teste da condição for falsa (false). A condição é avaliada depois que o bloco de código é executado, resultando que uma -> declaração seja executada pelo menos uma vez <-.
// teste 2
do {
    myNumber +=2;
    console.log(myNumber);
} while (myNumber < 50); 


// A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula, seguidas por uma declaração ou uma sequência de declarações executadas em sequência.
// Teste 3
for (let e = 0; e <= 10; e++) {
    console.log(e);
} 

// O método -> charAt() <- retorna o caractere especificado a partir de uma string. 
// Teste 4
let nome = "augusto";
for (let i = 0; i < nome.length; i++) {
    console.log(nome.charAt(i));
} 

// Esse exemplo esta com uma condição que limalizar o loops em "l"
// A palavra chave -> continue <- termina a atual iteração do laço em que ele se encontra ou de um laço rotulado, e continua a execução deste laço com a próxima iteração.
let nam = "weslei";
let counter = 0;
let myLetter;
while (counter <= 4) {
  myLetter = nam[counter];
  console.log(myLetter);
  if (counter === 1) {
    counter += 2;
    continue;
  }
  if (myLetter === "l") break;
  counter++;
}
console.log(counter);
