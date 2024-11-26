// ### **EXERCÍCIO 1 - Escolha de Bebida**
//Utilizando *switch…case* , crie um programa que pergunte qual bebida o usuário deseja dentre as opções listadas (água/suco/refrigerante/café),
//e então leia o numero digitado e exiba a mensagem correspondente

let prompt = require("prompt-sync")();

// let sabor = prompt("Fale que sabor você quer ")

// switch (sabor) {
//     case 1, "1":
//     console.log("Aqui está sua água")
//     break;
//     case 2, "2":
//     console.log("Aqui está seu suco")
//     break;
//     case 3, "3":
//     console.log("Aqui está seu refrigerante")
//     break;
//     case 4, "4":
//     console.log("Aqui está seu café")
//     break;
//     default:
//     console.log("Esse sabor não existe")
// }

// ### **EXERCÍCIO** 2: **Menu de Operações Matemáticas**

// Crie um programa que exiba um menu de opções para o usuário escolher uma operação matemática:

// - `1` → Soma
// - `2` → Subtração
// - `3` → Multiplicação
// - `4` → Divisão

// O programa deve ler a escolha do usuário e também dois números, ems eguida realizar a operação correspondente e exibir o resultado. Se a opção for inválida, exiba `"Opção inválida"`.


// ### **EXERCÍCIO** 2: **Menu de Operações Matemáticas**

// Crie um programa que exiba um menu de opções para o usuário escolher uma operação matemática:

// - `1` → Soma
// - `2` → Subtração
// - `3` → Multiplicação
// - `4` → Divisão

// O programa deve ler a escolha do usuário e também dois números, ems eguida realizar a operação correspondente e exibir o resultado. Se a opção for inválida, exiba `"Opção inválida"`.
// let calculadoraNumero = prompt("Digite um número:")
// let calculadoraNumero2 = prompt("Digite outro número:")
// let operador = prompt("Digite um operador: ")

//         switch(operador) {
//             case '-':  
//                 console.log(Number(calculadoraNumero) - Number(calculadoraNumero2))
//             break;
//             case '+':
//                 console.log(Number(calculadoraNumero) + Number(calculadoraNumero2))
//             break;
//             case '*': 
//                 console.log(Number(calculadoraNumero) * Number(calculadoraNumero2))
//             break;
//             case '/':
//                 console.log(Number(calculadoraNumero) / Number(calculadoraNumero2))
//             break;
//             default:
//             console.log("Você conhece uma calculadora?")
//         }

// ### **EXERCÍCIO** 3: Dicionário de cores

// Crie um programa que leia o nome de uma cor em inglês e exiba sua tradução em português. Considere as seguintes cores:

// - `"red"` → `"vermelho"`
// - `"blue"` → `"azul"`
// - `"green"` → `"verde"`
// Se a cor não estiver na lista, exiba `"Cor desconhecida"`.

// Exemplo de entrada e saída:

// - Entrada: `"blue"`
// - Saída: `"azul"`

// let cor = prompt("Digite uma cor e eu vou encontrar o nome dela em inglês!");

// switch(cor) {
//     case 'vermelho':
//     console.log("red")
//     break;
//     case 'verde':
//     console.log("green")
//     break;
//     case 'azul':
//     console.log("blue")
//     break;
//     default:
//     console.log("cor não existe!")
// }


// ### ******** DESAFIO - Sistema de Cadastro de Eventos *******

// Crie um programa que ajude no gerenciamento de inscrições para eventos. O programa deve permitir que o usuário escolha o tipo de evento, forneça algumas informações e mostre um resumo ao final.

// ### Requisitos:

// 1. O programa deve exibir um menu de tipos de evento com as seguintes opções:
//     - `1` → `"Workshop"`
//     - `2` → `"Palestra"`
//     - `3` → `"Hackathon"`
// 2. Dependendo do tipo de evento escolhido, o programa deve solicitar informações adicionais:
//     - Para `"Workshop"`: Pergunte o número de participantes. Cada participante custa **50 reais**.
//     - Para `"Palestra"`: Pergunte a duração (em horas). Cada hora custa **100 reais**.
//     - Para `"Hackathon"`: Pergunte o número de dias e o número de equipes. O custo é de **500 reais por equipe, por dia**.
// 3. O programa deve exibir o custo total do evento, o tipo de evento escolhido e as informações fornecidas pelo usuário.
// 4. Se o usuário escolher uma opção inválida, o programa deve exibir `"Opção inválida"`.

let eventos = prompt("Escolha o eventos que você deseja participar. 1. Workshop 2. Palestra 3. Hackathon");

switch(eventos) {
    case '1':
    let participantes = prompt("Você escolheu a opção 1: Workshop. Quantos participantes irão participar?");
    console.log('Workshop terá ' + participantes + ' participantes e cada um custará 50 reais, dando um total de ' + participantes * Number(50) + ' reais')
    break;
    case '2':
    let duracao = prompt("Você escolheu a opção 2: Palestra. Qual a duração em horas do evento?")
    console.log("O evento vai durar " + duracao + " horas, cada hora custando 100 reais, dando um total de " + duracao * Number(100) + " reais.");
    break;
    case '3':
    let numeroDeDias = prompt("Você escolheu a opção 3: Hackathon. Quantos dias o evento vai durar?")
    let numeroDeEquipes = prompt("Quantas equipes estarão presentes no evento?")
    let diaria = 500;
    let custoTotal = numeroDeDias * diaria;
    let custoFinal = custoTotal * numeroDeEquipes;
    console.log("O Hackathon irá durar " + numeroDeDias + " dias, terão " + numeroDeEquipes + " equipes participando. Cada equipe deverá pagar 500 reais por dia. Dando um total de: " + custoFinal + " reais.")
    break;
    default: 
    console.log("Valor inválido")
}