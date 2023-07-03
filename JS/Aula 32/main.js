function mostraHora(){
    let data = new Date()
    
    return data.toLocaleTimeString('pt-BR', {hour12: false})
}

/*function funcaoDoInterval(){
    console.log(mostraHora)
}*/ 
//não precisa criar essa função basta fazer essa aqui de baixo

const timer = setInterval(function(){
    console.log(mostraHora())
}, 1000)


//serve para parar o código o numero 10000(dez mil é a quantidade de milisegundos) ou seja daqui a 10s vai parar
setTimeout(function(){
    clearInterval(timer)
}, 3000)

setTimeout(function(){
    console.log('olá mundo!')
}, 3000)