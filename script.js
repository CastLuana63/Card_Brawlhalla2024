const card = document.querySelector(".card");
const card1 = document.querySelector(".card1");
const card2 = document.querySelector(".card2");
const card3 = document.querySelector(".card3");
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");

var imagemCard1 = 1;
var imagemCard2 = 1;
var imagemCard3 = 1;
var posicaoInicial = 0;
var posicaoFinal = 0;
var arrasto = 0;

//Card1 infos -----------------------------------------------------------------
function atualizarCard1(direcao) {
  if (direcao > 0) {
    imagemCard1++;
  }
  if (direcao < 0) {
    imagemCard1--;
  }
  if (imagemCard1 > 6) {
    imagemCard1 = 1;
  }
  if (imagemCard1 < 1) {
    imagemCard1 = 6;
  }
  card1.style.backgroundImage = `url('personagem${imagemCard1}.png')`;
}

box1.addEventListener("mousedown", (event) => {
  posicaoInicial = event.clientX;
});

box1.addEventListener("mouseup", (event) => {
  posicaoFinal = event.clientX;
  arrasto = posicaoFinal - posicaoInicial;

  if (Math.abs(arrasto) > 50) {
    atualizarCard1(arrasto);
  }
});

//card2 info -----------------------------------------------------------------
function atualizarCard2(direcao) {
  if (direcao > 0) {
    imagemCard2++;
  }
  if (direcao < 0) {
    imagemCard2--;
  }
  if (imagemCard2 > 5) {
    imagemCard2 = 1;
  }
  if (imagemCard2 < 1) {
    imagemCard2 = 5;
  }
  card2.style.backgroundImage = `url('mapa${imagemCard2}.png')`;
}

box2.addEventListener("mousedown", (event) => {
  posicaoInicial = event.clientX;
});

box2.addEventListener("mouseup", (event) => {
  posicaoFinal = event.clientX;
  arrasto = posicaoFinal - posicaoInicial;

  if (Math.abs(arrasto) > 50) {
    atualizarCard2(arrasto);
  }
});

//card3 info -----------------------------------------------------------------
function atualizarCard3(direcao) {
  if (direcao > 0) {
    imagemCard3++;
  }
  if (direcao < 0) {
    imagemCard3--;
  }
  if (imagemCard3 > 4) {
    imagemCard3 = 1;
  }
  if (imagemCard3 < 1) {
    imagemCard3 = 4;
  }
  card3.style.backgroundImage = `url('mode${imagemCard3}.png')`;
}

box3.addEventListener("mousedown", (event) => {
  posicaoInicial = event.clientX;
});

box3.addEventListener("mouseup", (event) => {
  posicaoFinal = event.clientX;
  arrasto = posicaoFinal - posicaoInicial;

  if (Math.abs(arrasto) > 50) {
    atualizarCard3(arrasto);
  }
});

// ATUALIZAR INFO >>>>>>>>>>
//Card1 infos -----------------------------------------------------------------
function changeDescription(
  container,
  titles,
  descriptions,
  info1,
  info2,
  info3
) {
  let box = container.querySelector(".box");
  let nome = box.querySelector(".nome");
  let descricao = box.querySelector(".descricao");
  let infos1 = box.querySelector(".info1");
  let infos2 = box.querySelector(".info2");
  let infos3 = box.querySelector(".info3");

  var indiceAtual = 0;
  var posicaoStart = 0;

  function atualizarInfo() {
    nome.textContent = titles[indiceAtual];
    descricao.textContent = descriptions[indiceAtual];
    infos1.textContent = info1[indiceAtual];
    infos2.textContent = info2[indiceAtual];
    infos3.textContent = info3[indiceAtual];
  }

  atualizarInfo();

  //card1 [informaçoes]
  box.addEventListener("mousedown", function (event) {
    posicaoStart = event.clientX;
  });

  box.addEventListener("mouseup", (event) => {
    var posicaoEnd = event.clientX;
    var arrastinho = posicaoEnd - posicaoStart;

    if (Math.abs(arrastinho) > 50) {
      if (arrastinho > 0) {
        indiceAtual = (indiceAtual + 1) % descriptions.length;
      } else {
        indiceAtual =
          (indiceAtual - 1 + descriptions.length) % descriptions.length;
      }
      atualizarInfo();
    }
  });
}

changeDescription(document.getElementById('card1'),
  ["Bödvar", "Caspian", "Diana", "Jiro", "Kaya", "Rayman"],
  [
    "Este viking empunha Espada e Martelo, tendo Força e Destreza limitadas a 6 pontos em suas estatísticas e Armadura e Velocidade em 5.",
    "Ele é um enganador, Katars e Manoplas empunhando ladrão, e detém o título de Príncipe da Batávia.",
    "Diana é uma  Caçador de Monstros, esta tem um Arco e Blasters. Diana provavelmente recebeu o nome da Deusa Romana Diana, que era a Deusa da caça e dos animais selvagens.",
    "Ele é um shinobi das sombras e habilidoso em combate com foice e espada. Na infânciano treinou no Reino do Crepúsculo, onde suas táticas não convencionais o destacaram.",
    "Aos seis anos, ela conseguia acertar um floco de neve em queda com uma flecha. Aos oito, derrubou dois bisões com um único arremesso de lança.",
    "Rayman luta com determinação para ganhar o Chifre e completar sua missão, mas ele também ama o rude selvagem de Valhalla.",
  ],
  [
    "MEIO URSO/HUMANO",
    "HUMANO/HOMEM",
    "HUMANO/MULHER",
    "HUMANO/SAMURAI",
    "GUARDIÂ DA NATUREZA",
    "HERÓI MÍSTICO",
  ],
  [
    "Espada Larga",
    "Truque de Mão",
    "Mastercraft Recurvo",
    "Espada",
    "Arco",
    "Fists (Punhos)",
  ],
  [
    "Martelo de Guerra",
    "Adagas do Showman",
    "Travas de Roda",
    "Foice",
    "Lança",
    "Axe (Machado)",
  ]
);

changeDescription(document.getElementById('card2'),
  [
    "Brawlhaven",
    "Crystal Temple",
    "Spirit Realm",
    "Tree Fort",
    "Shipwreck Falls",
  ],
  [
    "É uma ilha flutuando no céu, com símbolos nórdicos e o crânio do que parece ser um dragão podem ser vistos escondidos no corpo rochoso da ilha.",
    "O crystal temple é um local onde a luz cristalina brilha intensamente, proporcionando um ambiente majestoso e místico para os lutadores.",
    "O spirit realm é um reino espiritual onde as leis da física são flexíveis e as plataformas flutuantes desafiam os combatentes.",
    "O tree fort é uma fortaleza construída nas copas das árvores antigas, oferecendo um terreno elevado para batalhas estratégicas.",
    "Shipwreck falls é uma arena dinâmica localizada em uma cascata cercada por destroços de navios, com perigos constantes de queda e plataformas instáveis.",
  ],
  [
    "Ilhas do céu",
    "Cristalino",
    "Reino Celestial",
    "Topo das Árvores",
    "Pirata",
  ],
  [
    "Bödvar",
    "Stevonnie, Amethyst, Pearl, Garnet",
    "Po, Tigress, Tai Lung",
    "Finn, Jake, Princess Bubblegum",
    "Thatch",
  ],
  [
    "Padrão pequeno",
    "Grande",
    "Padrão pequeno",
    "Padrão pequeno",
    "Padrão pequeno",
  ]
);

changeDescription(document.getElementById('card3'),
  ["Casual Matchmaking", "Ranqueado", "Custom Room", "Offline Play"],
  [
    "Como o nome indica, o modo é destinado principalmente para jogadores mais casuais, em comparação com o modo Ranqueado.",
    "O modo Ranqueado é destinado para jogadores que buscam uma experiência competitiva, onde podem medir suas habilidades contra outros jogadores e subir na classificação.",
    "O modo Custom Room permite que você crie salas personalizadas onde pode convidar amigos ou outros jogadores para partidas com regras e configurações específicas.",
    "O modo Offline Play é ideal para quem quer jogar sem conexão à internet, seja sozinho ou com amigos no mesmo dispositivo.",
  ],
  ["GRATUITO PARA TODOS", "1V1 RANQUEADO", "1V1", "SINGLE PLAYER"],
  ["STRIKEOUT 1V1", "SEASONAL REWARDS", "FREE-FOR-ALL", "LOCAL CO-OP"],
  ["AMIGÁVEL 2V2", "2V2 RANQUEADO", "2V2", "TRAINING"]
);