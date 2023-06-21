/*try {
    console.log(naoExisto)
} catch (erro){
    console.log('naoExisto não existe.')
}*/

/*function soma(x,y){
    //      diferente        ou
    if(typeof x !== 'number' || typeof y !== 'number'){
        throw new Error('x e y precisam ser numeros')

    }
    return x + y
}

try{
    console.log(soma(1,2))
    console.log(soma('1',2))
}catch(error){
 //console.log(error)
 console.log('Alguma coisa mais amigavel')
}*/

/*try{
    console.log(a) //erro
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('fechei o arquivo')
} catch (e){
    console.log('Tratando o erro')
} finally{
    console.log('Eu sempre sou executado')
}*/

function retornaHora(data){
    if(data && !(data instanceof Date)){
        throw new TypeError('Esperando instancia de Date')
    }
if(!data){
    data = new Date
}
return data.toLocaleTimeString('pt-BR',{
    hour12: false
})
}
try{
    const data = new Date('01-01-1970 12:58:15')
const hora = retornaHora()
console.log(hora)
} catch (e){
console.log(e)
}finally{
    console.log('tenha um bom dia')
}