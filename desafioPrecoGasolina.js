const precoCombustivel = 6
const distanciaCidades = 100
const litrosPorKm = 15
const precoEtanol = 4
const tipoCarro = "etanol"

var kmPorLitro = distanciaCidades/litrosPorKm
var precoFinal 

if(tipoCarro === "etanol"){
    var precoFinal = kmPorLitro * precoEtanol
} else{
    var precoFinal = kmPorLitro * precoCombustivel
}

console.log(`o preço pago na gasolina para essa viagem é R$${precoFinal}`)