let arrayGif = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif']
let numCartas = 10;
let baralho = document.querySelector(".jogo");
let cartasDisponiveis = [];
let cartasViradas = [];
let cartaSelecionada = [];
let numClique = 0;
let maxClique = 2;

/* function iniciarJogo() {
  while (numCartas % 2 !== 0 || numCartas < 4 || numCartas > 14) {
    numCartas = Number(prompt("Com quantas cartas você quer jogar? Escolha um nº par entre 4 e 14"));
  }
}; */
/* iniciarJogo(); */


function sortearCartas() {
  for (let i = 0; i < numCartas / 2; i++) {
    cartasDisponiveis.push(arrayGif[i]);
    cartasDisponiveis.push(arrayGif[i]);
  }
};
sortearCartas();
cartasDisponiveis.sort(comparador);

for (let i = 0; i < numCartas; i++) {
  baralho.innerHTML += `
    <div class="container-cartas" onclick="girarCarta(this)">
      <img src= "imagens/${cartasDisponiveis[i]}" class="fundo-carta ocultar">
      <img src= "imagens/front.png" class="frente-carta">
    </div>
`
};

arrayGif.sort(comparador); // Após esta linha, a minhaArray estará embaralhada

// Esta função pode ficar separada do código acima, onde você preferir
function comparador() {
  return Math.random() - 0.5;
}


function girarCarta(elemento) {
  if (numClique === maxClique){
    return;
  }

  cartaSelecionada.push(elemento);
  numClique++;
  elemento.querySelector(".frente-carta").classList.add("ocultar");
  elemento.querySelector(".fundo-carta").classList.remove("ocultar");
  analisarSelecao();
};


function analisarSelecao() {
  let carta1=cartaSelecionada[0].innerHTML;
  let carta2=cartaSelecionada[1].innerHTML;
  if (carta1===carta2){
    return;
  }

};

function numJogadas() {

};

function acabouJogo() {
  if (cartasViradas === numCartas) {
    alert(`Você ganhou em ${numJogadas} jogadas! `)
  }
}

