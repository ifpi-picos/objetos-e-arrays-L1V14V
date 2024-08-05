const prompt = require ('prompt-sync')();

let listasCompras = []

function AdicionarCompras(compras){
    listasCompras.push(compras)
    console.log(`${compras} foi adicionado a lista`)
    
}

function Pesquisar(compras){
    const pesq = listaCompras.indexOf(item);
    if (pesq > -1) {
        console.log(`${item} está na lista.`);
    } else {
        console.log(`${item} não está na lista.`);
    }
}

function remocaoCompras(compras){
    const index = listaCompras.indexOf(item);
    if (index > -1) {
        listaCompras.splice(index, 1);
        console.log(`${compras} foi removido da lista.`);
    } else {
        console.log(`${compras} não encontrado na lista.`);
    }
}

function exibir(){
    console.log("Itens da lista de compras",listasCompras)
}

function ordenar(){
    listasCompras.sort()
    console.log("lista ordenada", listasCompras)

}

function limpar(){
    listasCompras = [];
    console.log("Limpada")
}

while (true){
    let escolherNumero =  prompt("|O que deseja fazer?|\n 1-Adicionar compras? \n 2-Remover compras? \n 3-O que procura? \n 4- Colocar em ordem \n 5-Exibir itens \n 6-Limpar  \n 7- Sair ")
    escolherNumero = Number(escolherNumero)

    switch (escolherNumero){
        case 1:
            const adc = prompt("Digite um novo item:")
            AdicionarCompras(adc)
            break;
        case 2:
            const apaga = prompt("Remover qual item?")
            remocaoCompras(apaga)
            break;
        case 3:
            const procura = prompt("O que procura?")
            Pesquisar(procura)
            break;
        case 4:
            exibir()
        case 5:
            ordenar()
        case 6:
            limpar()
        case 7:
            console.log('Saindo do programa.');
            process.exit();
        default:
            console.log('Escolha inválida. Tente novamente.');
    
    }
}

