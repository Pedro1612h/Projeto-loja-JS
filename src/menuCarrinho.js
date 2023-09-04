import { catalogo } from "./utilidades.js";

function abrirCarrinho() {
  document.getElementById("carrinho").classList.add("abrir-carrinho");
  document.getElementById("carrinho").classList.remove("fechar-carrinho");
}

function fecharCarrinho() {
  document.getElementById("carrinho").classList.remove("abrir-carrinho");
  document.getElementById("carrinho").classList.add("fechar-carrinho");
}

export function inicializarCarrinho() {
  const botaoFecharCarrinho = document.getElementById("fechar-carrinho");
  const botaoAbrirCarrinho = document.getElementById("abrir-carrinho");

  botaoFecharCarrinho.addEventListener("click", fecharCarrinho);
  botaoAbrirCarrinho.addEventListener("click", abrirCarrinho);
}

export function adicionarAoCarrinho(idProduto) {
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
    document.getElementById("produto-carrinho");
  const cartaoProdutoCarrinho = `<article>
    <button>
      <i
        class="fa-solid fa-circle-xmark text-slate-500 hover:text-slate-800"
      ></i>
    </button>
    <img 
      src="./img/${produto.nomeArquivoImagem}"
      alt="Carrinho: ${produto.nome}"
    />
    <div class="info">
      <p class="nome">
        ${produto.nome}
      </p>
      <p class="marca">${produto.marca}</p>
      <p class="preco">$${produto.preco}</p>
    </div>
  </article>`;
  containerProdutosCarrinho.innerHTML += cartaoProdutoCarrinho;
}
