const botaoEl = document.querySelector("#botao-mutar");
const iconeBotaoMutar = document.querySelector("#botao-mutar img");

const imagensBotao = [
    "https://jeanc4rlo.github.io/half-alive/imagens/misc/ui/muted.png",
    "https://jeanc4rlo.github.io/half-alive/imagens/misc/ui/sound.png",
]

function mutarVideo() {
    videoEl.muted = !videoEl.muted;

    if(videoEl.muted) {
        iconeBotaoMutar.setAttribute("src", imagensBotao[0]);
    } else {
        iconeBotaoMutar.setAttribute("src", imagensBotao[1]);
    }
}

botaoEl.addEventListener("click", mutarVideo);

mutarVideo();