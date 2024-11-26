var prompt = require("prompt-sync")()


var nome = prompt("Digite seu nome ");
var horario = prompt("É de dia, tarde ou noite "); 

if (horario == 'dia') {
    console.log("Bom dia, " + nome)
} else if (horario == 'tarde') {
    console.log("Boa tarde, " + nome)
} else if (horario == 'noite') {
    console.log("Boa noite, " + nome)
} else {
    console.log("Valor inválido")
}



// melhore programa incluindo o boa noite e imprimindo a opcao invalida caso o usuario nao digite manha tarde ou noite