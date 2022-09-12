//Função para retornar par ou impar

function parOuImpar(n){
    if (n%2 == 0){
        return console.log(`O numero ${n} é par`)
    } else{
        return console.log(`O nume ${n} é impar`)
    }
}

let res = parOuImpar(4)
console.log(res)