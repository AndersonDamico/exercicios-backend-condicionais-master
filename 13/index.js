//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "dinheiro";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if (tipoDePagamento === "credito") {
    const desconto = (valorDoProduto) *5/100;
    const valorFinal = (valorDoProduto - desconto) /100;
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)
}else if (tipoDePagamento === "cheque") {
    const desconto = (valorDoProduto) *3/100;
    const valorFinal = (valorDoProduto - desconto) /100;
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)
}else if (tipoDePagamento === "debito") {
    const desconto = (valorDoProduto) *10/100;
    const valorFinal = (valorDoProduto - desconto) /100;
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)
}else if (tipoDePagamento === "dinheiro") {
    const desconto = (valorDoProduto) *10/100;
    const valorFinal = (valorDoProduto - desconto) /100;
    console.log(`Valor a ser pago: R$${valorFinal.toFixed(2)}`)
}