let num = [1, 3, 5, 19]
console.log(`My array is ${num}`)

//Adiciona um novo elemento ao array manualmente
num[4] = 20 
console.log(`My array is ${num}`)

//Adiciona um novo elemento no final do array automaticamente
num.push(8) 
console.log(`My array is ${num}`)

//Mostra o comprimento do array
console.log(`Array length ${num.length}`) 

//Coloca em ordem crescente todos os elementos do array
num.sort()
console.log(`Array sort ${num.sort()}`) 