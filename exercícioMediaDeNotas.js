var nota1 = 6
var nota2 = 8
var nota3 = 0

//media = nota1 + nota2 + nota3 / 3

var media = (nota1+nota2+nota3)/3

if(media < 5){
    var situacaoFinal = "foi reprovado"
} else if (media >= 5 && media <= 7){
    var situacaoFinal = "ficou de recuperação"
} else {
    var situacaoFinal = "passou de semestre"
}

console.log(`A média semestral do aluno foi ${media}, e por isso, ${situacaoFinal}`)