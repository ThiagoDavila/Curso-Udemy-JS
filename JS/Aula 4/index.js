/*
Luiz otávio miranda tem 30 anos, pesa 84 kg tem 1.80 de  altura e seu IMC é de ...
Luiz otavio nasceu em...
*/ 


const nome = 'Luiz Otávio'
const sobrenome = 'Miranda'
const idade = 42
const peso = 84
const altura = 1.80
let imc  //peso / (altura*altura)


imc = peso/(altura*altura)
let anoNascimento = 2022 - idade

//template strings
/*console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg, seu IMC é de ${imc} e nasceu em ${anoNascimento}`)
*/

console.log(nome, sobrenome, 'tem' ,idade, 'anos, pesa' ,peso, 'kg seu IMC é de' ,imc, 'e nasceu em',anoNascimento,)