//valor do produto comprado.
const valorDoProduto = 50000000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

if (valorDoProduto){
    const valorParcela= (valorDoProduto /100) / quantidadeDoParcelamento;
    const valorRestante= (valorDoProduto /100) - valorPago;
    const parcelasRestantes = valorRestante / valorParcela;
    console.log(`Restam ${parcelasRestantes.toFixed(0)} parcelas de R$${valorParcela.toFixed(2)}`)
}