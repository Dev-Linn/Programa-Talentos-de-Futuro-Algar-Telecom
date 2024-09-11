let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

//

function consolePress() {
    console.log('O botão foi clicado');
}

function loveJs() {
    alert('Eu amo JavaScript');
}

function customPrompt() { 
    let nome = window.prompt('Qual sua cidade?');
    console.log('Estive em ' + nome + ' e lembrei de você');
}

function soma() {
    let n1 = window.prompt('Digite 1 número inteiro');
    let n2 = window.prompt('Digite o número 2');

    let resultado = parseInt(n1) + parseInt(n2);
    alert('O resultado da soma é ' + resultado);
}