const linkEl = document.querySelector("#desca-para-mais");

function atualizarSeta() {
    if(window.scrollY >= (window.innerHeight * (60 / 100))) {
        linkEl.removeAttribute("href");
        linkEl.classList.add("invisivel");
    }
    else {
        linkEl.setAttribute("href", "#conteudo-principal");
        linkEl.classList.remove("invisivel");
    }
}

window.addEventListener("scroll", atualizarSeta);

atualizarSeta();