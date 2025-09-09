const menuEl = document.querySelector("#menu-hamburguer");
const botaoMenuHamburguerEl = document.querySelector("#botao-hamburguer");
const botaoVoltarEl = document.querySelector("#fechar-menu");

function alternarMenu() {
    menuEl.classList.toggle("menu-aberto");
    botaoVoltarEl.classList.toggle("deslocar-seta");
}

botaoVoltarEl.addEventListener("click", alternarMenu);
botaoMenuHamburguerEl.addEventListener("click", alternarMenu)