var prompt = require("prompt-sync")()


var nome = prompt("Digite seu nome ");
var horario = prompt("É de dia, tarde ou noite "); 

if (horario != 'dia' && horario != 'tarde' && horario != 'noite') {

    if (horario == 'dia') {console.log("Bom dia, " + nome)} 
    if (horario == 'tarde') { console.log("Boa tarde, " + nome)} 
    if (horario == 'noite') {console.log("Boa noite, " + nome)} 

} else {
    console.log("Valor inválido")
    }



// melhore programa incluindo o boa noite e imprimindo a opcao invalida caso o usuario nao digite manha tarde ou noite
