let filmesNaoVistos = [];
let filmesVistos = [];

function AdicionarFilmes(filme) { 
    filmesNaoVistos.push(filme);
    console.log(`${filme} foi adicionado à lista de filmes não vistos.`);
}

function Ordenar() {
    filmesNaoVistos.sort();
    console.log("Lista ordenada de filmes não vistos:", filmesNaoVistos);
    filmesVistos.sort();
    console.log("Lista ordenada de filmes vistos:", filmesVistos);
}

function Pesquisar(filme) {
    const index = filmesNaoVistos.indexOf(filme);
    if (index > -1) {
        console.log(`${filme} está na lista de filmes não vistos.`);
    } else {
        console.log(`${filme} não está na lista de filmes não vistos.`);
    }
}

function FilmeAssistido(filme) {
    const index = filmesNaoVistos.indexOf(filme);
    if (index > -1) {
        filmesNaoVistos.splice(index, 1);
        filmesVistos.push(filme);
        console.log(`${filme} marcado como assistido e movido para a lista de filmes vistos.`);
    } else {
        console.log(`${filme} não está na lista de filmes não vistos.`);
    }
}

function exibir() {
    console.log("Filmes não vistos:", filmesNaoVistos);
    console.log("Filmes vistos:", filmesVistos);
}

function removerFilme() {
    let filmeParaRemover = prompt("Qual filme você deseja remover?");
    let listaParaRemover = prompt("De qual lista você deseja remover o filme? (Digite 'nao vistos' ou 'vistos')").toLowerCase();

    if (listaParaRemover === 'nao vistos') {
        const index = filmesNaoVistos.indexOf(filmeParaRemover);
        if (index > -1) {
            filmesNaoVistos.splice(index, 1);
            console.log(`${filmeParaRemover} foi removido da lista de filmes não vistos.`);
        } else {
            console.log(`${filmeParaRemover} não está na lista de filmes não vistos.`);
        }
    } else if (listaParaRemover === 'vistos') {
        const index = filmesVistos.indexOf(filmeParaRemover);
        if (index > -1) {
            filmesVistos.splice(index, 1);
            console.log(`${filmeParaRemover} foi removido da lista de filmes vistos.`);
        } else {
            console.log(`${filmeParaRemover} não está na lista de filmes vistos.`);
        }
    } else {
        console.log("Opção inválida. Por favor, digite 'nao vistos' ou 'vistos'.");
    }
}

while (true) {
    let escolha = Number(prompt("1- Adicionar filmes? \n2- Ordenar lista de filmes? \n3- Pesquisar filmes? \n4- Exibir listas \n5- Marcar como assistido \n6- Remover filmes \n7- Sair \nEscolha um:"));

    switch (escolha) {
        case 1:
            let adc = prompt("Adicione um filme:");
            AdicionarFilmes(adc);
            break;
        case 2:
            Ordenar();
            break;
        case 3:
            let procurar = prompt("Qual filme você procura?");
            Pesquisar(procurar);
            break;
        case 4:
            exibir();
            break;
        case 5:
            let assistir = prompt("Qual filme você assistiu?");
            FilmeAssistido(assistir);
            break;
        case 6:
            removerFilme();
            break;
        case 7:
            console.log('Saindo do programa.');
            process.exit();
        default:
            console.log("Escolha inválida. Tente novamente.");
    }
}
