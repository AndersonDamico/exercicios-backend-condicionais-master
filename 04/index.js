const ladoA = 1;
const ladoB = 1;

//seu código aqui

if (ladoA === 0 && ladoB === 0){
    console.log("Bucha de Branco")

} else if (ladoA === 1 && ladoB === 1){
    console.log("Bucha de Ás")

} else if (ladoA === 2 && ladoB === 2){
    console.log("bucha de Duque")

} else if (ladoA === 3 && ladoB === 3){
    console.log("bucha de Terno")

} else if (ladoA === 4 && ladoB === 4){
    console.log("bucha de Quadra")
    
} else if (ladoA === 5 && ladoB === 5){
    console.log("bucha de Quina")

} else if (ladoA === 6 && ladoB === 6){
    console.log("bucha de Sena")
} else if (ladoA !== ladoB ) {
    console.log("NÃO")
}