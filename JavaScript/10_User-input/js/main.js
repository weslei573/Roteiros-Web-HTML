// User Input

// O método Window.alert() mostra uma caixa de diálogo de aviso com o conteúdo opcionalmente especificado e um botão OK.
// || -> alert("Hello World!"); <-

// O método Window.confirm() mostra uma janela modal com uma mensagem opcional e dois botões, OK e Cancelar.
// || -> \n e uma quebra de linha
// || -> confirm("OK === True\nCancel === False"); <- 

// Exemplo de capitura de click ok ou cancel como boolean
// || -> let myBoolean = confirm("OK === True\nCancel === False"); 
// || -> console.log(myBoolean); 

// Exemplo de pega nome, e se não coloca nada ele dara um comentario
let name = prompt("Please enter your name.");
if (name) {
    console.log(name.length);
    console.log(name.trim().length);
    console.log(name.trim());
} else {
    console.log("Your didn't enter your name!");
    
}
