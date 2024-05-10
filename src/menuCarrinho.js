import { catalogo, lerLocalStorage, salvarLocalStorage } from "./utilidades.js";

const idsProdutoCarrinhoComQuantidade = lerLocalStorage("carrinho") ?? {}

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



function removerDoCarrinho(idProduto){
  delete idsProdutoCarrinhoComQuantidade[idProduto];
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  renderizarProdutoCarrinho();
}

function incrementarQuantidadeProduto(idProduto){
  idsProdutoCarrinhoComQuantidade[idProduto]++;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

function decrementarQuantidadeProduto(idProduto){
  if(idsProdutoCarrinhoComQuantidade[idProduto] === 1){
    removerDoCarrinho(idProduto);
    return;
  }

  idsProdutoCarrinhoComQuantidade[idProduto]--;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  atualizarPrecoCarrinho();
  atualizarInformacaoQuantidade(idProduto);
}

function atualizarInformacaoQuantidade(idProduto){
  document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

function desenharProdutiNoCarrinho(idProduto){
  const produto = catalogo.find((p) => p.id === idProduto);
  const containerProdutosCarrinho =
    document.getElementById("produto-carrinho");

  const elementoArticle = document.createElement("article");
  const cartaoProdutoCarrinho = 
  ` <button class="excluir-item" id="remover-item-${produto.id}">
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
    <div class="quantidade">
      <button id="incrementar-produto-${produto.id}">+</button>
      <p id="quantidade-${produto.id}">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
      <button id="decrementar-produto-${produto.id}">-</button>
    </div>`;
  elementoArticle.innerHTML = cartaoProdutoCarrinho;
  containerProdutosCarrinho.appendChild(elementoArticle);

  document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click', () => decrementarQuantidadeProduto(produto.id));

  document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click', () => incrementarQuantidadeProduto(produto.id));

  document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removerDoCarrinho(produto.id));
}

export function renderizarProdutoCarrinho(){
  const containerProdutosCarrinho = document.getElementById("produto-carrinho");
  containerProdutosCarrinho.innerHTML = "";
  
  for(const idProduto in idsProdutoCarrinhoComQuantidade){
    desenharProdutiNoCarrinho(idProduto);
  }
}

export function adicionarAoCarrinho(idProduto) {
  if(idProduto in idsProdutoCarrinhoComQuantidade){
    incrementarQuantidadeProduto(idProduto);
    return;
  }
  idsProdutoCarrinhoComQuantidade[idProduto] = 1;
  salvarLocalStorage("carrinho", idsProdutoCarrinhoComQuantidade);
  desenharProdutiNoCarrinho(idProduto);
  atualizarPrecoCarrinho();  
}

export function atualizarPrecoCarrinho(){
  const precoCarrinho = document.getElementById("preco-total");
  let precoTotalCarrinho = 0;
  for(const idProdutoNoCarrinho in idsProdutoCarrinhoComQuantidade){
    precoTotalCarrinho += catalogo.find((p) => p.id === idProdutoNoCarrinho).preco * idsProdutoCarrinhoComQuantidade[idProdutoNoCarrinho];
  }
  precoCarrinho.innerText = `Total: $${precoTotalCarrinho}`;
}