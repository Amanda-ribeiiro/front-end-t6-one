const html = document.querySelector('html');
const btFoco = document.querySelector('.app__card-button--foco');
const btCurto = document.querySelector('.app__card-button--curto');
const btLongo = document.querySelector('.app__card-button--longo');
const banner = document.querySelector('.app__image');
const titulo = document.querySelector('.app__title');
const botoes = document.querySelectorAll('.app__card-button');
const startPauseBtn = document.querySelector('#start-pause');
const musicaFocoInput = document.querySelector('#alternar-musica');
const iniciarOuPausarBt = document.querySelector('#start-pause span');
const iconeIniciarOuPausar = document.querySelector('.app__card-primary-butto-icon');
const tempoNaTela = document.querySelector('#timer');

const musica = new Audio ('../../sons/luna-rise-part-one.mp3');
const audioPlay = new Audio('../../sons/play.wav');
const audioPausa = new Audio('../../sons/pause.mp3');
const audioTempoFinalizado = new Audio('./sons/beep.mp3');

let segundosDecorrido = 1500
let intervaloId = null

musica.loop = true


musicaFocoInput.addEventListener('change', () => {
    if(musica.paused) {
        musica.play()
    } else {
        musica.pause()
    }
});


btFoco.addEventListener('click', () => {
    segundosDecorrido = 1500
    alterarcontexto('foco');
    btFoco.classList.add('active');
});

btCurto.addEventListener('click', () => {
    segundosDecorrido = 300
    alterarcontexto('descanso-curto');
    btCurto.classList.add('active');
});

btLongo.addEventListener('click', () => {
    segundosDecorrido = 900
    alterarcontexto('descanso-longo');
    btLongo.classList.add('active');
});

function alterarcontexto (contexto) {
    mostrarTempo()
    botoes.forEach(function (contexto){
        contexto.classList.remove('active');
    })

    html.setAttribute('data-contexto', contexto);
    banner.setAttribute('src', `./imagens/${contexto}.png`);
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case "descanso-curto":
            titulo.innerHTML = `
            Que tal da uma respirada ?<br>
            <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;
        case "descanso-longo":
            titulo.innerHTML = `
            Hora de voltar à superfície.<br>
            <strong class="app__title-strong">Faça uma pausa longa!</strong>
                `
            break;
        default:
    }
};

const contagemRegressiva = () => {
    if(segundosDecorrido <= 0) {
        audioTempoFinalizado.play()
        alert('Tempo finalizado!')
        zerar()
        return
    }
    segundosDecorrido -= 1
    mostrarTempo()
}

startPauseBtn.addEventListener("click", iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId) {
        audioPausa.play();
        zerar()
        return
    }
    audioPlay.play();
    intervaloId = setInterval(contagemRegressiva, 1000)
    iniciarOuPausarBt.textContent = "Pausar"
    iconeIniciarOuPausar.setAttribute('src', `./imagens/pause.png`)
}

function zerar() {
    clearInterval(intervaloId)
    iniciarOuPausarBt.textContent = "Começar"
    iconeIniciarOuPausar.setAttribute('src', `./imagens/play_arrow.png`)
    intervaloId = null
}

function mostrarTempo() {
    const tempo = new Date (segundosDecorrido * 1000)
    const tempoFormato = tempo.toLocaleTimeString('pt-Br', {minute: '2-digit', second: '2-digit'})
    tempoNaTela.innerHTML = `${tempoFormato}`
}

mostrarTempo()
