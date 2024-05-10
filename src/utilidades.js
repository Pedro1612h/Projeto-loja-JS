export const catalogo = [
    {
        id: "1",
        nome: "Console PlayStation 5",
        marca: "Sony",
        preco: 4000.00,
        nomeArquivoImagem: "produto1.jpg",
        jogos: false,
    },
    {
        id: "2",
        nome: "Controle PlayStation 5",
        marca: "Sony",
        preco: 400.00,
        nomeArquivoImagem: "produto2.jpg",
        jogos: false,
    },
    {
        id: "3",
        nome: "The Last Of Us Part I - PlayStation 5",
        marca: "Sony Studios",
        preco: 200.00,
        nomeArquivoImagem: "produto3.jpg",
        jogos: true,
    },
    {
        id: "4",
        nome: "Marvel's Spider-Man: Miles Morales Edição Padrão - PlayStation 5",
        marca: "Sony Studios",
        preco: 250.00,
        nomeArquivoImagem: "produto4.jpg",
        jogos: true,
    },
    {
        id: "5",
        nome: "GTA V - PlayStation 5",
        marca: " Rockstar Games",
        preco: 200.00,
        nomeArquivoImagem: "produto5.jpg",
        jogos: true,
    },
    {
        id: "6",
        nome: "Horizon Forbidden West Edição Padrão - PlayStation 5",
        marca: "Sony Studios",
        preco: 250.00,
        nomeArquivoImagem: "produto6.jpg",
        jogos: true,
    },
    {
        id: "7",
        nome: "God of War Ragnarök - Edição Standard - PlayStation 5",
        marca: "Sony Studios",
        preco: 250.00,
        nomeArquivoImagem: "produto7.jpg",
        jogos: true,
    },
    {
        id: "8",
        nome: "Gran Turismo 7 Edição Padrão - PlayStation 5",
        marca: "Sony Studios",
        preco: 200.00,
        nomeArquivoImagem: "produto8.jpg",
        jogos: true,
    }
]

export function salvarLocalStorage(chave, informacao){
    localStorage.setItem(chave, JSON.stringify(informacao));
}

export function lerLocalStorage(chave){
    return JSON.parse(localStorage.getItem(chave));
}