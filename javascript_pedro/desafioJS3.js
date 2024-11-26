//Faça um programa em Javascript que peça para o professor:
//- nome do aluno
//- nota 1
//- nota 2
//- nota 3
//- porcentagem de faltas
// se a media for >=7 E porcentagem de faltas for <25%, aluno aprovado
// se a media for <7 e >=5 E porcentagem de faltas for <25%, recuperação
//se a media for <5 OU faltas >=25% , aluno reprovado
// otimize a sua logica e faça um codigo elegante e limpo

let prompt = require("prompt-sync")();

        let nome = prompt("Qual seu nome?");
        let nota1 = parseFloat(prompt("Digite a nota da primeira prova: "));
        let nota2 = parseFloat(prompt("Digite a nota da primeira prova: "));
        let nota3 = parseFloat(prompt("Digite a nota da primeira prova: "));
        let faltas = parseFloat(prompt("Faltas do aluno: "))
        let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;


        if (media >= Number(7) && faltas <= Number(25)) {
            console.log("Aluno aprovado")
        } else if (media < Number(7) && media >= Number(5) && faltas <= Number(25)) {
            console.log("Aluno de recuperação")
        } else if (media < Number(5) && faltas >= Number(25)) {
            console.log("Aluno reprovado")
        }
        