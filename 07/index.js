const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000000000; //emCentavos

//seu código aqui
if (aposentada === false && portadoraDeDoenca === false) {
    if ((totalDeRendimentos /100) >=28599.70) {
        console.log("PEGA LEAO");
    } else {
        (totalDeRendimentos /100) <= 28599.70
        console.log ("VAZA LEAO! JA TA DIFICIL SEM VOCE");
    }
} else {
    aposentada === true && portadoraDeDoenca === true
    console.log("ISENTA");
}