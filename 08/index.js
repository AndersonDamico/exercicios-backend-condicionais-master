const idade = 25;
const possuiPatologia = false;
const altura = 151;
const ehEstudante = false;


if (possuiPatologia === true) {
    console.log("ACESSO NEGADO")
}else if (altura < 150){
    console.log("ACESSO NEGADO")
}else if (idade <12 || idade >65) {
    console.log("ACESSO NEGADO"); 
}else if (ehEstudante === false){
    console.log("20 reais")
}else {
    console.log("10 reais")
}
   
  
    