const catalogoProdutos = document.getElementById("container-produto");

function esconderConsole(){
    const produtosConsole = Array.from(catalogoProdutos.getElementsByClassName("console"));

    for(const produto of produtosConsole){
        produto.classList.add("hidden");
    }
}

export function inicializarFiltros(){
    document.getElementById("exibir-jogos").addEventListener("click", esconderConsole)
}