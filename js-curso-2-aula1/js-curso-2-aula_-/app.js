let listaDeNumeroSorteados = [];
let numeroLimite = 50;
let numeroSecreto = gerarUmNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1','jogo do número secreto');
    exibirTextoNaTela('p','Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1','Você acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas': 'tentativa';
        let mensagemTentavitas = `Você descobriu o número secreto com ${tentativas} : ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentavitas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O numero secreto é menor');
    }else{
        exibirTextoNaTela('p','O numero secreto é maior');
    }
    tentativas++;
    limparCampo();
      }
    } 

function gerarUmNumeroAleatorio () {
  let numeroEscolhido = parseInt (Math.random() * numeroLimite + 1);
  let quantidadeDeElementosNaLista = listaDeNumeroSorteados.length;

  if (quantidadeDeElementosNaLista == numeroLimite) {
    listaDeNumeroSorteados =[];
  }
  if (listaDeNumeroSorteados.includes(numeroEscolhido)){
    return gerarUmNumeroAleatorio();
  }else {
    listaDeNumeroSorteados.push(numeroEscolhido);
    console.log(listaDeNumeroSorteados);
    return numeroEscolhido;
  }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}



function reiniciarJogo(){
numeroSecreto = gerarUmNumeroAleatorio();
limparCampo();
tentativas = 1;
exibirMensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled',true);
}