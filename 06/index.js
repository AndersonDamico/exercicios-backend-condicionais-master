const alturaEmCm = 190;

//seu código aqui
if (alturaEmCm <=179){
    console.log("REPROVADO")
}else if (alturaEmCm >= 180 && alturaEmCm <= 185){
    console.log("LÍBERADO")
}else if (alturaEmCm >= 186 && alturaEmCm <= 195){
    console.log("PONTEIRA")
}else if (alturaEmCm >= 196 && alturaEmCm <= 205){
    console.log("OPOSTO")
}else if(alturaEmCm >= 205){
    console.log("CENTRAL")
}