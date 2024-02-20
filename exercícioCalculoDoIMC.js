//IMC = peso / altura * altura
const peso = 130
const altura = 1.75

var imc = peso / (altura * altura)

if(imc < 18.5){
    var situacaoPaciente = "está abaixo do peso"
} else if(imc >= 18.5 &&  imc < 25){
    var situacaoPaciente = "está com o peso normal"
} else if(imc >= 25 &&  imc < 30){
    var situacaoPaciente = "está acima do peso"
} else if(imc >= 30 &&  imc < 40){
    var situacaoPaciente = "está obeso"
} else{
    var situacaoPaciente = "está com obesidade grave"
} 

console.log(`O paciente ${situacaoPaciente}`)