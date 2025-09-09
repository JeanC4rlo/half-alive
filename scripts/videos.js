const videoEl = document.querySelector("#intro-video");

const fontesVideo = [
    "https://jeanc4rlo.github.io/half-alive/videos/sophies-house.webm",
    "https://jeanc4rlo.github.io/half-alive/videos/dimyu.webm",
    "https://jeanc4rlo.github.io/half-alive/videos/summerland.webm",
    "https://jeanc4rlo.github.io/half-alive/videos/still-feel.mp4",
    "https://jeanc4rlo.github.io/half-alive/videos/time2.webm",
    "https://jeanc4rlo.github.io/half-alive/videos/nobody.mp4",
    "https://jeanc4rlo.github.io/half-alive/videos/whats-wrong.webm",
    "https://jeanc4rlo.github.io/half-alive/videos/subliminal.webm"
];

let videoContador = 0;
const totalVideos = fontesVideo.length;

videoEl.muted = true;

function rodarVideo() {
    videoEl.classList.remove("anim-intro-saida-video");
    videoEl.classList.add("anim-intro-entrada-video");

    const volumeBaixo = [4, 6];
    if (!videoEl.muted) {
        videoEl.volume = volumeBaixo.includes(videoContador) ? 0.3 : 0.5;
    }

    videoEl.src = fontesVideo[videoContador];
    videoEl.load();
    videoEl.play().catch((err) => {
        console.warn("Erro ao tentar reproduzir vídeo:", err);
    });
}

videoEl.addEventListener("ended", delayVideo);

function delayVideo() {
    videoEl.classList.add("anim-intro-saida-video");
    videoEl.classList.remove("anim-intro-entrada-video");

    setTimeout(() => {
        videoEl.pause();
        videoEl.removeAttribute("src");
        videoEl.load();

        setTimeout(proximoVideo, 6000);
    }, 4600);
}

function proximoVideo() {
    videoContador = (videoContador + 1) % totalVideos;
    rodarVideo();
}

function inicializarVideos() {
    setTimeout(() => {
        videoEl.classList.remove("anim-intro-saida-video");
        videoEl.classList.add("anim-intro-entrada-video");
        rodarVideo();
    }, 5000);
}

window.addEventListener("load", () => {
    videoEl.muted = true;
    inicializarVideos();

    document.body.addEventListener("click", () => {
        videoEl.muted = false;
    }, { once: true });
});
