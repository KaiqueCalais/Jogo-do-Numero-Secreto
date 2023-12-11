let listaDeNumerosSorteados = [];
const numeroMaximoPossivel = 100;
let numeroSecreto = gerarNumeroAleatorio();

console.warn(`O número secreto é ${numeroSecreto}.`);

let tentativas = 0;
const campoDeChute = document.querySelector('input');

const botaoNovojogo = document.querySelector('#reiniciar');
const botaoChutar = document.querySelector('.container__botao');

function exibirTexto(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    // responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function mensagemInicial() {
    exibirTexto('h1', 'Jogo do número secreto');
    exibirTexto('p', `Escolha um número entre 1 e ${numeroMaximoPossivel}.`);
}

mensagemInicial();

function alternarCorDoTexto() {
    document.querySelector('p').classList.toggle('verde');
}

function limparCampoDeChute() {
    campoDeChute.value = '';
}

function desabilitarBotao(botao) {
    if (botao.hasAttribute('disabled')) {
        botao.removeAttribute('disabled');
    } else {
        botao.setAttribute('disabled', true);
    }
}


function verificarChute() {
    chute = campoDeChute.value;
    tentativas++;
    let tentativaString = tentativas == 1 ? 'tentativa' : 'tentativas';

    if (chute == numeroSecreto) {
        exibirTexto('h1', `Você acertou com ${tentativas} ${tentativaString}!`);
        exibirTexto('p', `O numéro secreto era ${numeroSecreto}.`)
        alternarCorDoTexto();

        desabilitarBotao(botaoChutar);
        desabilitarBotao(botaoNovojogo);
    } else if (chute > numeroSecreto) {
        exibirTexto('p', `O número secreto é menor que ${chute}.`)
    } else {
        exibirTexto('p', `O número secreto é maior que ${chute}.`)
    }

    limparCampoDeChute();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximoPossivel + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNalista >= numeroMaximoPossivel) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}



function newGame() {
    desabilitarBotao(botaoChutar);
    desabilitarBotao(botaoNovojogo);

    numeroSecreto = gerarNumeroAleatorio();
    console.warn(`O número secreto é ${numeroSecreto}.`)

    tentativas = 0;

    mensagemInicial();
    alternarCorDoTexto();
}


// AULA 2
// Desafio 1
// mensagemConsole();
// function mensagemConsole() {
//     console.log('Olá, mundo!');
// }

// Desafio 2
// function nomeNoConsole(nome) {
//     console.log(`Olá, ${nome}!`)
// }
// nomeNoConsole('Amanda');

// Desafio 3
// function dobrarNumero(numero) {
//     return numero * 2;
// }
// console.log(dobrarNumero(7));

// Desafio 4
// function media(numero1, numero2, numero3) {
//     return (numero1 + numero2 + numero3) / 3;
// }
// console.log(media(20, 20, 50));

// Desafio 5
// function maiorNumero(numero1, numero2) {
//     if (numero1 > numero2) {
//         return numero1;
//     } else {
//         return numero2;
//     }
// }
// console.log(maiorNumero(0, 6));

// Desafio 6
// function quadrado(numero) {
//     return numero * numero;
// }
// console.log(quadrado(10));


// AULA 3
// Desafio 1
// function imc(altura, peso) {
//     let imc = peso / (altura *= altura);
//     imc = imc.toFixed(2);
//     console.log('O IMC é ' + imc + '.');
// }

// Desafio 2
// function fatorial(numero) {
//     let fatorial = numero;
//     while (numero > 1) {
//         numero--;
//         fatorial *= numero;
//     }

//     console.log(fatorial);
// }

// Desafio 3
// function conversaoDolarReal(valorEmDolares) {
//     let valorEmReais = valorEmDolares * 4.80;
//     return valorEmReais.toFixed(2);
// }
// console.log('R$ ' + conversaoDolarReal(10));

// Desafio 4
// function salaRetangular(comprimentoDaSala, larguraDaSala) {
//     let perimetroDaSala = (comprimentoDaSala + larguraDaSala) * 2;
//     let areaDaSala = comprimentoDaSala * larguraDaSala;

//     console.log(`Esta sala tem ${perimetroDaSala}m de perímetro e ${areaDaSala}m² de área.`)
// }

// Desafio 5
// function salaCircular(raioDaSala) {
//     let circunferenciaDaSala = (2 * 3.14 * raioDaSala).toFixed(1);
//     let areaDaSala = 3.14 * (raioDaSala *= raioDaSala);

//     console.log(`Esta sala tem ${circunferenciaDaSala}m de perímetro e ${areaDaSala}m² de área.`)
// }

// Desafio 6
// function tabuada(numero) {
//     let tabuada = [];

//     for (let i = 0; i <= 10; i++) {
//         tabuada[i] = (numero * i);
//     }

//     exibirTexto('p', tabuada)
// }


// AULA 4
// Desafio 1
// let listaGenerica = [];

// Desafio 2
// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// Desafio 3
// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

// Desafio 4
// let nomes = ['Amanda', 'Focalors', 'Furina'];
// console.log(nomes[0]);

// Desafio 5
// console.log(nomes[1]);

// Desafio 6
// console.log(nomes[nomes.length - 1]);
