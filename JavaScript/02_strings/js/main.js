// || Strings
const myVariable = "Mathematics";

// The Length property 
// -- A propriedade length de um objeto String contém o comprimento da string
console.log(myVariable.length);

// || String Methods 
// -- O método charAt() retorna o caractere especificado a partir de uma string. 
console.log(myVariable.charAt(0));

// -- O método indexOf() retorna o índice da primeira ocorrência do valor fornecido em searchValue, 
console.log(myVariable.indexOf("t"));

// -- O método lastIndexOf() retorna o índice da última ocorrência do valor especificado encontrado. Quando fromIndex é especificado, a pesquisa é realizada de trás para frente. Retorna -1 se o valor não for encontrado
console.log(myVariable.lastIndexOf("at"));

// -- O método slice() extrai uma parte de uma string e a retorna como uma nova string, sem modificar a string original
console.log(myVariable.slice(5, 8));

// -- O método toUpperCase() retorna o valor da string original convertido em letras maiúsculas.
console.log(myVariable.toUpperCase());

// -- O método includes() determina se um conjunto de caracteres pode ser encontrado dentro de outra string,
console.log(myVariable.includes("mat"));

// -- O método split() divide uma String em uma lista ordenada de substrings, coloca essas substrings em um array e retorna o array. A divisão é feita procurando um padrão, onde o padrão é fornecido como o primeiro parâmetro na chamada do método.
console.log("Every good boy does fine".split(" "));


