// Escreva uma função que recebe um numero e retorne o seguinte: 
//numero é divisivel por 3 = Fizz
//numero é divisivel por 5 = Buzz
// numero é divisivel por 3 e 5 = FizzBuzz
//numero não é divisivel por 3 e 5 = retorna o numero
// Checar se o numero é realmente um numero
// usa a função com numeros de 0 a 100

function numero(n){
    if(typeof n !== 'number' ) return n
    if(n % 3 === 0 && n % 5 ===0) return 'FizzBuzz'
    if(n % 3 === 0) return 'Fizz'
    if(n % 5 === 0) return 'Buzz'
    return n
}

for(let i = 0; i <= 100; i++){
    console.log(i, numero(i))
}