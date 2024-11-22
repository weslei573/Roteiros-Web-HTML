// || Numbers

const myNumber = 42;
const myFloat = 42.01;
const myString = "42.123asd";

// O objeto JavaScript Number é um objeto encapsulado que permite você trabalhar com valores numéricos. 
console.log(Number(myString));

// Number encapsula a string em numero, e esse numero esta sendo somado por 3
console.log(Number(myString) + 3);

// Estou vendo se o encapsulado e igual ao numero inteiro
console.log(Number(myString) === myNumber);

// || Number Methods

// --- O método Number.isInteger() determina se o valor passado é um inteiro.
console.log(Number.isInteger(myNumber));

// --- O método Number.parseFloat() converte a string recebida como argumento e a retorna como um número de ponto flutuante. 
console.log(Number.parseFloat(myString));

// --- O método toFixed() formata um número utilizando notação de ponto fixo.
console.log(Number.parseFloat(myString).toFixed(2));

// --- O método toString() retorna uma string representando o objeto Number especificado.

console.log(myFloat.toString());

console.log(typeof Number.parseFloat(myString));

// --- Chainig = Usando vários métodos encadeados juntos
console.log(Number.parseFloat("42.2343dssf").toFixed(2).toString());

// NaN é uma sigla para Não a Number
console.log(Number("Wes"));

// --- O método Number.isNaN() determina se o valor passado é NaN. Versão mais robusta do original global 

Number.isNaN();
console.log(Number.isNaN("Wes"));
console.log(isNaN("Wes"));