let arrayGif = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif']
let numCartas;
let baralho = document.querySelector(".jogo");
let cartasDisponiveis = [];

enredoJogo()

function iniciarJogo() {
  while (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14) {
    numCartas = Number(prompt("Com quantas cartas você quer jogar? Escolha um nº par entre 4 e 14"));
  }
};

for (let i = 0; i < numCartas; i++) {
  baralho.innerHTML += `
    <div class="container-cartas">
      <img src= "imagens/${cartasDisponiveis[i]}" class="ocultar img-cartas">
      <img src= "imagens/front.png" class="img-cartas">
    </div>
`
};

function sortearCartas() {
  for (let i = 0; i < numCartas; i++) {
    cartasDisponiveis.push(arrayGif[i]);
  }
}

arrayGif.sort(comparador); // Após esta linha, a minhaArray estará embaralhada


// Esta função pode ficar separada do código acima, onde você preferir
function comparador() {
  return Math.random() - 0.5;
}

function enredoJogo() {
  iniciarJogo();
  sortearCartas();

}
