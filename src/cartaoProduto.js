import { catalogo } from "./utilidades.js";
import { adicionarAoCarrinho } from "./menuCarrinho.js";

export function renderizarCatalogo() {
  for (const produtoCatalogo of catalogo) {
    const cartaoProduto = `<div class="aria-item" id="card-produto-${produtoCatalogo.id}">
        <div class="foto">
          <img
          src="./img/${produtoCatalogo.nomeArquivoImagem}"
          alt="Produto 1 do Magazine Hashtag."
          class='group-hover:scale-110 duration-300 my-3 rounded-lg'
          />
        </div>
        <p class='marca'>${produtoCatalogo.marca}</p>
        <p class='nome'>${produtoCatalogo.nome}</p>
        <p class='preco'>$${produtoCatalogo.preco}</p>
        <button id='adicionar-${produtoCatalogo.id}' class='botao-adicionar'
        >Adicionar</button>
        </div>`;

    document.getElementById("container-produto").innerHTML += cartaoProduto;
  }

  for (const produtoCatalogo of catalogo) {
    document
      .getElementById(`adicionar-${produtoCatalogo.id}`)
      .addEventListener("click", () => adicionarAoCarrinho(produtoCatalogo.id));
  }
}
