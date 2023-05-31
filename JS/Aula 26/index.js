const nome = ['Thiago', 'Davila', 'Valejo']

for (let valor of nome){
    console.log(valor)
}
nome.forEach(function(valor, indice){
    console.log(valor, indice);
});