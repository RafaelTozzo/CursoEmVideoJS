var vel = 70.5;
var multa = 300.50
console.log(`A velocidade de seu carro é ${vel} km/h`)

if (vel > 60) {
    console.log(`Velocidade acima do permitido. MULTADO! em R$${multa} Velocidade aferida ${vel}km/h`)
} else {
    console.log(`Velocidade dentro do permitido. Velocidade atual: ${vel}km/h`)
}
