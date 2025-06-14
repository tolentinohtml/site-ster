class MobileNavbar {

  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu) {
      this.addClickEvent();
    }
    return this;
  }
}

const mobileNavbar = new MobileNavbar(
  ".mobile-menu",
  ".nav-list",
  ".nav-list li",
);
mobileNavbar.init();
const botoes = document.querySelectorAll("#lista-linguas button");
const detalhes = document.querySelectorAll(".detalhe-lingua");

botoes.forEach(botao => {
  botao.addEventListener("click", () => {
    // Esconde todas as seções
    detalhes.forEach(div => div.style.display = "none");

    // Pega o id da língua clicada e mostra ela
    const id = botao.getAttribute("data-lingua");
    document.getElementById(id).style.display = "block";
  });
});
document.querySelectorAll('#lista-linguas button').forEach(botao => {
  botao.addEventListener('click', () => {
    const span = botao.querySelector('span');

    if (span) {
      botao.removeChild(span);
    } else {
      const coracao = document.createElement('span');
      coracao.textContent = '❤️';
      botao.appendChild(coracao);
    }
    // Seleciona todos os botões
const botoes = document.querySelectorAll('#lista-linguas button');

// Seleciona todas as divs de detalhes
const detalhes = document.querySelectorAll('.detalhe-lingua');

// Adiciona evento de clique pra cada botão
botoes.forEach(botao => {
  botao.addEventListener('click', () => {
    // Esconde todos os detalhes
    detalhes.forEach(div => div.style.display = 'none');

    // Pega a linguagem clicada
    const lingua = botao.getAttribute('data-lingua');

    // Mostra a div correspondente
    const divSelecionada = document.getElementById(lingua);
    if (divSelecionada) {
      divSelecionada.style.display = 'block';
    }
  });
});

  });
});
