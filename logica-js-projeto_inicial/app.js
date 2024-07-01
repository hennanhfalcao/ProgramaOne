alert('Boas-vindas ao jogo do Número Secreto');

let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1);
let tentativas = 1;
let tentativa;
let palavraTentativa = "";
while (tentativa != numeroSecreto) {
    let tentativa = prompt(`Escolha um número entre 1 e ${numeroMaximo}`);
    if (tentativa == numeroSecreto) {
        break;
    }
    else {
        if (tentativa > numeroSecreto) {
            alert(`O número secreto é menor que ${tentativa}.`);
        }
        else {
            alert(`O número secreto é maior que ${tentativa}.`);
        }
    
    }
    tentativas++;
}

palavraTentativa = tentativas > 1 ? 'tentativas':'tentativa';

alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`);

