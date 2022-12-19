// ... rest, ...spread
//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//const [um,dois,tres, ...resto] = numeros
//console.log(um, dois, tres, resto)

//                   1        2        3
//                0  1  2   0  1  2   0  1  2 
//const numeros = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]

//console.log(numeros[1][2])

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }
}

// Atribuição via desestruração
const {nome, sobrenome, endereco:{rua,numero}} = pessoa
console.log(nome, sobrenome, rua)