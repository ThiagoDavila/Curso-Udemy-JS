//Escreva uma função chamada ePaisagem  que recebe dois argumentos, largura e altura de uma imagem (number).
//Retorne true se a imagem estiver no modo paisagem

/*function ePaisagem(largura, altura){
    return largura > altura ? true : false

} */  //isso é uma operção ternaria

/*function ePaisagem(largura, altura){
    return largura > altura
}*/

const ePaisagem =(largura, altura)=> largura > altura // isso é uma arrow function
console.log(ePaisagem(1920, 1080))