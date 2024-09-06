/*
 if (<condicion>) {
     <bloque-1>
 } else {
     <bloque-2>
 }

 if (<condicion>) {
     <bloque-1>
 } else if (<condicion-2>) {
     <bloque-1.1>
 } else {
     <bloque-2>
 }

 AND -> &&
 OR -> ||
 NOT -> !

 IGUAL ==
 IGUAL Y DEL MISMO TIPO  ===
 DISTINTO != O !==

 MAYOR, MENOR, MAYOR O IGUAL, MENOR O IGUAL ----> >, <, >=, <=

**/

const valor = true;
if(valor) {
    console.info("Valor es verdadero");
} else {
    console.info("Valor es false");
}


valor? console.log("valor es verdader")  :  console.log("valor es falso"); // operdores ternarios 


const nombre = "Maria";
if(nombre === "Juan") {
    console.info("sos juan");
} else if(nombre === "Maria") {
    console.info("sos maria");
} else {
    console.warn("Ojo... no sos una persona que conozco");
}

let edad = 13;
if (edad < 18) {
    console.warn("Sos menor de edad. No puedo vender alcohol.");
}

edad = 40;
if(edad > 18 && edad < 60) {
    console.info("Podes beber porque sos mayor y estas fuera de la edad de riesgo");
}

/**
 * switch(<variable>) {
 *   case <val-1>:
 *      // bloque-1
 *      break;
 *   case <val-2>:
 *      //bloque-2
 *      break;
 * } 
 */

let color = "rojo";

if (color === "azul") {
    console.info("color es azul");
} else if (color === "verde") {
    console.info("color es verde");
} else if (color === "amarillo") {
    console.info("color es amarillo");
} else if (color === "naranja") {
    console.info("color es naranja");
} else {
    console.warn("color desconocido");
}

color = "azul";

switch(color) {
    case "azul":
        console.info("color es azul");
        break;
    case "amarillo":
        console.info("color es amarillo");
        break;
    case "naranja":
        console.info("color es naranja");
        break;
    default:
        console.warn("color desconocido");
}