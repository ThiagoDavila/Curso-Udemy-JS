//capturar evento de submit do formulario
const form = document.querySelector('#form')

form.addEventListener('submit', function(event){
    event.preventDefault()
    const inputPeso = event.target.querySelector('#peso')
    const inputAltura = event.target.querySelector('#altura')

    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    console.log(peso, altura)

})

function criaP(){
    const p = document.createElement('p')
    return p
}


    function setResultado (msg){
    const resultado = document.querySelector('#resultado')
    resultado.innerHTML = ''
    const p = criaP()

}

