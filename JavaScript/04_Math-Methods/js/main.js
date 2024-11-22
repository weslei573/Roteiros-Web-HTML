// || Math Methods and Properties
console.log(Math.PI);

// --- O método Math.trunc() retorna a parte inteira de um número, descartando suas casas decimais.
console.log(Math.trunc(Math.PI));

// --- A função Math.round() retorna o valor de um número arredondado para o inteiro mais proximo.
console.log(Math.round(3.5));

// --- A função Math.ceil(x) retorna o menor número inteiro maior ou igual a "x".
console.log(Math.ceil(Math.PI));

// --- A função Math.floor(x) retorna o menor número inteiro dentre o número "x".
console.log(Math.floor(Math.PI));

// --- A função Math.pow(base, expoente) retorna a base elevada ao expoente power.
console.log(Math.pow(2, 4));

// --- A função Math.min() retorna o menor valor passado como parâmetro,
console.log(Math.min(2, 0.5, 9));

// --- A função Math.max() retorna o maior de um ou mais números.
console.log(Math.max(2, 10.5, 9));

// --- A função Math.random() retorna um número pseudo-aleatório no intervalo [0, 1[, ou seja, de 0 (inclusivo) até, mas não incluindo, 1 (exclusivo), que depois você pode dimensionar para um intervalo desejado.
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
// (De 1 para 10 )é o caminho a seguir -- CERTO
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);
// Tem chance de resultar em zero
console.log(Math.ceil(Math.random() * 10));