//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 150000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 100000;


if (rendaMensalEmCentavos <= 200000) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.")
}else if (mesesDecorridos >= 60){
    console.log("Após 60 meses,o valor da parcela é zero.")
}else if (totalJaPagoPeloAluno >= 1800000) {
    console.log("Você ja quitou o valor do curso!"); 
}else if (valorAPagar = (rendaMensalEmCentavos / 100) * (1+18/100) - (rendaMensalEmCentavos / 100).toFixed(2)){
    console.log(`O valor da parcela desse mês é R$${valorAPagar} reais`)
}