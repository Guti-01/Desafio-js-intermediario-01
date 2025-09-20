const slides = document.querySelectorAll(".slide");
let slideAtual = 0;

function mudarSlide(direcao) {
  slides[slideAtual].classList.remove("ativo");

  if ((slideAtual + direcao) >= 0 && (slideAtual + direcao) < slides.length) {
    slideAtual = slideAtual + direcao;
  }
  slides[slideAtual].classList.add("ativo");

  atualizarSetas();
}

const setaEsquerda = document.querySelector(".seta-esquerda");
const setaDireita = document.querySelector(".seta-direita");

function atualizarSetas() {
    if (slideAtual === 0) {
        setaEsquerda.classList.add("seta-desativada")
    } else {
        setaEsquerda.classList.remove("seta-desativada");
    };
    if (slideAtual === slides.length - 1) {
    setaDireita.classList.add("seta-desativada");
} else {
    setaDireita.classList.remove("seta-desativada");
}
}