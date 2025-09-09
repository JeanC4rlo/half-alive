const audioEl = document.querySelector("#audio");
const botoesEl = document.querySelectorAll(".botoes-audio")

const estadosAudio = [
    "https://jeanc4rlo.github.io/half-alive/imagens/misc/ui/play.png",
    "https://jeanc4rlo.github.io/half-alive/imagens/misc/ui/stop.png"
]

let audioAtual = -1;

function rodarAudio() {
    botoesEl[audioAtual].setAttribute("src", estadosAudio[1]);
    
    audioEl.muted = false;   
    audioEl.setAttribute("src", fontesAudio[audioAtual]);
    audioEl.load();
    audioEl.play();
}

function inicializarAudio(proximoAudio) {
    if(proximoAudio == audioAtual) {
        audioEl.pause();
        audioEl.currentTime = 0;
        botoesEl[audioAtual].setAttribute("src", estadosAudio[0]);
        audioAtual = -1;
    } else {
        if(audioAtual != -1) {
            botoesEl[audioAtual].setAttribute("src", estadosAudio[0]);
        }
        audioAtual = proximoAudio;
        rodarAudio();
    }
}
