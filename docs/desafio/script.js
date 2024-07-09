let texto_a_criptografar = "";
let texto_criptografado = "";
let texto_descriptografado = "";

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.textContent = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Nenhuma mensagem encontrada');
    exibirTextoNaTela('.output-text', 'Digite um texto que você deseja criptografar ou descriptografar.');
}

exibirMensagemInicial();

function criptografar() {
    
    texto_a_criptografar = document.getElementById('input-text').value;
    
    if (!validaTexto(texto_a_criptografar)) {
        throw new Error("Texto inválido, apenas letras minúsculas e espaços permitidos.")
    }

    texto_criptografado = texto_a_criptografar.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    exibirTextoNaTela('.output-text',texto_criptografado);
    document.getElementById('output-text').classList.add('output-text-temp');
}

function descriptografar() {
    
    texto_criptografado = document.getElementById('input-text').value;
    
    if (!validaTexto(texto_criptografado)) {
        throw new Error("Texto inválido, apenas letras minúsculas e espaços permitidos.")
    }
    
    texto_descriptografado = texto_criptografado.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");

    exibirTextoNaTela('.output-text',texto_descriptografado);
    document.getElementById('output-text').classList.add('output-text-temp');
}

function validaTexto(texto) {
    let regex = /^[a-z ]+$/;
    return regex.test(texto);
}

document.getElementById('criptografar-btn').addEventListener('click', () => {
    try {
        criptografar();
        esconderElemento('h1');
        esconderImagem('img');
    } catch (err) {
        alert(err.message);
    }
});

document.getElementById('descriptografar-btn').addEventListener('click', () => {
    try {
        descriptografar();
        esconderElemento('h1');
        esconderImagem('img');
    } catch (err) {
        alert(err.message);
    }
});

function esconderElemento(tag) {
    let elemento = document.getElementById('titulo');
    elemento.style.display = 'none';
}

function esconderImagem(img) {
    let imagem = document.getElementById('imagem-estudante');
    imagem.style.display = 'none';
}
