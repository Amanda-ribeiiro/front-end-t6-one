function tocarSom (seletorAudio){
    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
            elemento.play();
        } else {
            console.log('Elemento não encontrado ou seletor inválido');
    }
}

// Buscar pela classe seletora das teclas
const listaDeTeclas = document.querySelectorAll('.tecla');

for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]; // Pega a tecla atual da lista de teclas
    const instrumento = tecla.classList[1]; // Pega o nome do instrumento que representa essa tecla
    const idAudio = `#som_${instrumento}`; // Acessar o ID com base no nome do instrumento
    // Adiciona o evento de clique para as teclas
    tecla.onclick = function () {
        tocarSom(idAudio);
    }

    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
}

