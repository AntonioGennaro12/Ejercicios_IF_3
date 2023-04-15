/*
Portal de juego tipo SLOT (BINGO) 
Pedir 3 numeros aleatorios entre 0 y 9 al jugador
Si son 3 iguales = gana 1 Millon de Pesos
Si al menso 2 son igules, gana 100 mil pesos
Si son todos diferentes se le regala un helado
..........
FORMA DE OBTENER UN NUMERO ALEATORIO..
const min = 1;
const max = 10;
const numAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(numAleatorio);
*/

const PREMIO_3_NROS_IGUALES = "$1.000.000.-";
const PREMIO_2_NROS_IGUALES = "$100.000.-";
const PREMIO_CONSUELO = "Vale por un Helado";


let primerNumero  = prompt("1er Paso: Ingrese un Número entre 0 y 9");
let segundoNumero = prompt ("2do Paso: Ingrese un Número entre 0 y 9");
let tercerNumero  = prompt ("3er Paso: Ingrese un Número entre 0 y 9");

if((primerNumero == segundoNumero) && (primerNumero == tercerNumero)){
    document.write ("<h1>***     ¡¡¡BINGO!!!     ***</h1>");  
    document.write ("<h1> Ganaste " +PREMIO_3_NROS_IGUALES+"</h1>");
}
else if(((primerNumero == segundoNumero) ||(primerNumero == tercerNumero)) || (segundoNumero == tercerNumero)) {
    document.write ("<h2>¡¡Felicitaciones!! Ganaste  " +PREMIO_2_NROS_IGUALES+"</h2>");  
}
else {
    document.write ("<h3>Ganaste un: " +PREMIO_CONSUELO+" sigue participando...</h3"); 
};
