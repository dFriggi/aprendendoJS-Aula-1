var precoProduto = 80
var vezesPagamento = 3
var formaPagamento = "dinheiro"

switch(true){
    case formaPagamento === "débito" && vezesPagamento === 1:
        var precoFinal = precoProduto - (precoProduto/10)
        break
    case formaPagamento === "dinheiro" && vezesPagamento === 1:
    case formaPagamento === "pix" && vezesPagamento === 1:
        var precoFinal = precoProduto - (precoProduto*15/100)
        break
    case vezesPagamento === 2:
        var precoFinal = precoProduto
        break
    case vezesPagamento >= 3:
        var precoFinal = precoProduto + (precoProduto/10)
        break
}

console.log(`O preço final é R$${precoFinal}`)