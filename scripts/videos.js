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
let totalVideos = fontesVideo.length;

function rodarVideo() {
    videoEl.classList.remove("anim-intro-saida-video");
    videoEl.classList.add("anim-intro-entrada-video");

    if(videoContador == 4) {
        videoEl.volume = 0.3;
    } else {
        videoEl.volume = 0.5;
    }

    videoEl.setAttribute("src", fontesVideo[videoContador]);
    videoEl.load();
    videoEl.play();
}

videoEl.addEventListener('ended', delayVideo, false);

function delayVideo() {
    videoEl.classList.add("anim-intro-saida-video");
    videoEl.classList.remove("anim-intro-entrada-video");

    setTimeout(() => {
        videoEl.setAttribute("src", "undefined");
        setTimeout(proximoVideo, 6000);
    }, 4600);
}

function proximoVideo() {
    videoContador++;
    if(videoContador == totalVideos) {
        videoContador = 0;
        rodarVideo(videoContador);
    }
    else {
        rodarVideo(videoContador);
    }
}

function inicializarVideos() {
    setTimeout(() => {
        videoEl.classList.remove("anim-intro-saida-video");
        videoEl.classList.add("anim-intro-entrada-video");
        rodarVideo();
    }, 5000);
}

window.addEventListener("load", inicializarVideos);