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
/* Incluyo una versión 2 utilizando Números Random y mejorando la salida*/
const PREMIO_3_NROS_IGUALES = "$1.000.000.-";
const PREMIO_2_NROS_IGUALES = "$100.000.-";
const PREMIO_CONSUELO = "Vale por un Helado";
const min = 1;
const max = 5; /* cuanto más chico, aumenta la probabilidad de ganar */

let apuestaSioNo  = parseInt (prompt("Quieres Jugar? Ingresa un número cualquiera, si No ingresa 0"));
if(!apuestaSioNo){
    document.write ("<h2>No hay problema! Te esperamos cuando gustes...</h2");  
}
else{
    let primerNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    let segundoNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    let tercerNumero = Math.floor(Math.random() * (max - min + 1)) + min;
    document.write ("<h2>Número Aleatorio = "+ primerNumero + segundoNumero + tercerNumero +"</h2"); 
    document.write("<h2></h2>");
    if((primerNumero == segundoNumero) && (primerNumero == tercerNumero)){
        document.write ("<h1>***     ¡¡¡BINGO!!!     ***</h1>");  
        document.write ("<h1> Ganaste " +PREMIO_3_NROS_IGUALES+"</h1>");
    }
    else if(((primerNumero == segundoNumero) ||(primerNumero == tercerNumero)) || (segundoNumero == tercerNumero)) {
        document.write ("<h2>¡¡Felicitaciones!! Ganaste  " +PREMIO_2_NROS_IGUALES+"</h2>");  
    }
    else {
        document.write ("<h3>Ganaste un " +PREMIO_CONSUELO+", sigue participando...</h3"); 
    };  
};


