let valores = [8, 1, 7, 4, 2, 9]

// Mostrar tudo dentro do array
console.log(valores)


// Maneira errada de mostrar os arrays
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])


//Maneira utilizando o for
for (let pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}

//Maneira utilizando o for in
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} usando for in`)
}