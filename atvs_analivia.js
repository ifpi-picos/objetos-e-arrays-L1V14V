const prompt = require('prompt-sync')(); 
/*5) Crie um array com os elementos [10, 20, 30]. Use o método push() para
adicionar os elementos 40 e 50 ao final do array. Exiba o array
resultante.*/

/*const numeros = [10, 20, 30]

numeros.push(40,50)

console.log(numeros)

6) Crie um array com os elementos [5, 10, 15, 20]. Use o método pop() para
remover o último elemento do array. Exiba o array resultante e o
elemento removido.

const num = [5, 10, 15 , 20]
let ultimoNumero = num[3]

num.pop(3)


console.log(num)
console.log("o elemento removido é: " + ultimoNumero ).

7) Dado o array let numeros = [1, 2, 3, 4, 5], use o método shift() para
remover o primeiro elemento do array. Exiba o array resultante e o
elemento removido

const numeros = [1,2,3,4,5]

let remove_elemento = numeros.shift()
console.log(numeros , " o elemento retirado é:", remove_elemento)

8) Crie um array com os elementos ['vermelho', 'verde']. Use o método
unshift() para adicionar os elementos 'azul' e 'amarelo' no início do array.
Exiba o array resultante

const cores = ['vermelho', 'verde']

let adiciona = cores.unshift('azul', 'amarelo')

console.log(cores)


9) Dado o array let frutas = ['maçã', 'banana'] e o array let maisFrutas =
['laranja', 'pera'], use o método concat() para combinar os dois arrays em
um novo array e exiba o resultado

let frutas = ['maça', 'banana']
let maisFrutas = ['laranja', 'pera']

let juntando = frutas.concat(maisFrutas)

console.log(juntando)

10) Dado o array let animais = ['cachorro', 'gato', 'pássaro', 'peixe'], use o
método slice() para criar um novo array contendo os elementos do índice
1 ao índice 3 (não inclusivo). Exiba o novo array.)



let animais = ['cachorro', ' gato', ' pássaro','peixe']

let maisAnimais = animais.slice(1,3)
console.log(maisAnimais)..

11) Dado o array let cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte',
'Salvador', 'Fortaleza'], use o método splice() para remover as cidades
Belo Horizonte e Salvador do array.

let cidade = ['São Paulo','Rio de Janeiro','Belo Horizonte','Salvador','Fortaleza']

let remova_cidades = cidade.splice(2,2)

console.log(cidade)

12) Dado o array let numeros = [50, 10, 1, 30, 20, 2], use o método sort()
para ordenar os elementos em ordem crescente. Exiba o array
resultante.


let numeros = [50,10,1,30,20,2]

numeros.sort((a, b) => a - b)
console.log(numeros)


13) Escreva um programa que solicita ao usuário o nome de 5 filmes e
armazene em um array. Em seguida, exiba no console os filmes
informados*/




for (let i = 0; i>5; i++) {
  let citeFilmes = prompt("digite um filme: ")

  console.log(citeFilmes)
}