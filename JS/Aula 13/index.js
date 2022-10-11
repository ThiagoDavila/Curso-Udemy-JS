/*function criaPessoa(nome,sobrenome,idade){
    return{
        nome : nome,
        sobrenome : sobrenome,
        idade : idade

    };
}
const pessoa1 = criaPessoa('Thiago' , 'Davila' , 20)
const pessoa2 = criaPessoa('Jean' , 'Santos' , 19)
const pessoa3 = criaPessoa('Scheila' , 'Iris' , 47)
const pessoa4 = criaPessoa('Alexandre' , 'Vaeljo' , 50)
const pessoa5 = criaPessoa('Victoria' , 'Penai' , 21)

console.log(pessoa1.nome)*/

const pessoa1 = {
    nome : 'Thiago' ,
    sobrenome : 'Davila' ,
    idade : 25,
    
    fala(){
        console.log(`A minha idade atual é ${this.idade}`)
    },

    incrementaIdade(){
        this.idade++;
    }
}

pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()
pessoa1.fala()
pessoa1.incrementaIdade()