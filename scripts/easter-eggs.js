const easterEggUm = document.querySelector("#easter-egg1");
const easterEggDois = document.querySelector("#easter-egg2");

function mostrarEasterEgg(numeroEasterEgg) {
    if(numeroEasterEgg === 1) {
        easterEggUm.classList.toggle("easter-egg-visivel");
    } else {
        easterEggDois.classList.toggle("easter-egg-visivel");
    }
}