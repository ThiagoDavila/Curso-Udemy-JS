function mostraHora(){
    let data = new Date()
    
    return data.toLocaleTimeString('pt-BR', {hour12: false})
}

/*function funcaoDoInterval(){
    console.log(mostraHora)
}*/ 
//não precisa criar essa função basta fazer essa aqui de baixo

setInterval(function(){
    console.log(mostraHora())
}, 1000)