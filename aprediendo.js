// let nombre
// nombre = "Diego"
// console.log (nombre);

// let suma = (2+5);
// console.log (suma);

// alert ("Esta es una alerta de prueba")

// -----------------------------------------------------
// nombre = prompt ("Decime tu nombre")

// alert ("Hola " + nombre)

// let num1 = parseInt(prompt (nombre + " decime un número para sumar"))
// let num2 = parseInt(prompt (nombre + " decime otro número para sumar"))
// let resultado = num1+num2
// alert ("el resultado de la suma es: " + resultado)
// -----------------------------------------------------

// let iva = 21; 
// iva = 10.5; 
// console.log(iva);

// alert("Cómo estás "+nombre+" ?");

// let nombre
// let apellido
// nombre = prompt ("Decime tu nombre");
// apellido = prompt ("Ahora decime tú apellido");
// alert (`Hola ${nombre} ${apellido}. Cómo estás hoy?`);

// let num3 = Number(prompt(`Anotá un número ${nombre}`));
// let num4 = Number(prompt(`Ahora anotá otro número `));
// let resultado3y4 = num3+num4;
// alert(`La suma de esos dos números es ${resultado3y4}`);

// -----------------------------------------------------
/* let bool = true;
console.log(typeof bool);

let numericoTrue = 33;
console.log(typeof numericoTrue);

let numericoFalso = "33";
console.log(typeof numericoFalso); */

// -----------------------------------------------------

/* let num1=32;
let num2=40;
let num3="32";
let num4=32; */

/* console.log(num1==num3);
console.log(num1===num3);
console.log(num1===num4);
console.log(num1!=num3);
console.log(num1!==num3);
console.log(num1>num2);
console.log(num2<num3);
console.log(num1>=num4);
console.log(num1<=num2);
console.log(isNaN(num1));
console.log(isNaN(num3));
console.log(isNaN("123")); */

// OR
/* console.log(num1==num3||num1>num2);
console.log(num1===num3||num1>num2);
console.log(num1===num3||num1<num2); */

// AND
/* console.log(num1==num3&&num1>num2); 
console.log(num1==num3&&num1<num2);  */

// -----------------------------------------------------
// CONDICIONAL (if / else)

/* let sucursal = "Belgrano";
let anios = 100;
 */
/* if (anios>=18){
	console.log(`${sucursal} Tenés 100 años o más`);
} else {
	console.log(`${sucursal} No tenés más de 100 años`);
} */

/* if (anios<=18){
	console.log(`${sucursal} Tenés 100 años o más`);
} else {
	console.log(`${sucursal} No tenés más de 100 años`);
} */

// IF TERNARIO => ? = if / : = else
/* let edad = 5
let nombre = "Camila"

edad>=18 ? console.log(`${nombre} podes entrar`):console.log(`${nombre} No podés entrar`); */

/* let edad2 = 28
let nombre2 = "Lucía"
edad2>=18 ? console.log(`${nombre2} podes entrar`):console.log(`${nombre} No podés entrar`); */

// -----------------------------------------------------
// IF TERNARIO ANIDADO 

/* let nota1 = 6
nota1<5
?console.log("insuficiente")
: nota1<6
?console.log("bien")
: nota1<7
?console.log("muy bien")
: console.log("excelente") */

/* let nota = 8
nota<5
?console.log("Insuficiente") 
: nota<6
?console.log("Suficiente") 
: nota<8
?console.log("Bien") 
: console.log("Sobresaliente"); */

/* -----------------------------------------------------
SWITCH */

/* let semaforo = "verde";

switch (semaforo) {
	case "rojo" :
		console.log("no avanzar");
		break;
	case "amarillo" :
		console.log("precaución");
		break;
	case "verde" :
		console.log("podés avanzar");
		break;
	default:
		console.log("Dato no válido");
	    break;
} */

/* let semaforo = prompt (`Ingresá el color de la luz del semáforo`)
semaforo.toUpperCase
semaforo.toLowerCase
switch (semaforo.toLowerCase()) {
	case "rojo" :
		alert("no avanzar");
		break;
	case "amarillo" :
		alert("precaución");
		break;
	case "verde" :
		alert("podés avanzar");
		break;
	default:
		alert("Dato no válido");
	    break;
} */

// LENGTH

/* let escuela = "Remedios de Escalada de San Martin"
console.log(escuela.length) //No lleva paréntesis xq es propiedad
console.log(escuela.toUpperCase()); //Lleva paréntesis xq es un método */

// -----------------------------------------------------
// WHILE - BUCLES SIMPLES
/* let contador = 1
while (contador<=3){
	console.log(`contador : ${contador}`);
	contador++; //---- el ++ va a hacer que se sume un número al 1
}*/

//EJERCICIO WHILE
/* 1) Escribir un programa que calcula la suma de todos los números pares
   entre 1 y 100 usando un bucle while. */
let numero = 1;
let suma = 0;

while (numero <= 100) {
  if (numero % 2 === 0) {
    suma += numero;
  }
  numero++;
}

console.log(`La suma de los números pares entre 1 y 100 es: ${suma}`);

// DO WHILE
/*let counter = 0
do {
	console.log(`Número actual ${counter}`);
		counter++;
} while (counter<3) */

// -----------------------------------------------------
// let password;

// do{
// 	password = prompt("Ingrese su contraseña (mínimo 6 dígitos)");
// }	while (password.length<6)
// 		alert("Contraseña aceptada");

// -----------------------------------------------------
//BUCLE FOR

for (let i=1;i<=10;i++){
if (i%2===0){
	console.log(`${i} es par`);
} else {
	console.log(`${i} es impar`);
}
}

// -----------------------------------------------------
// FUNCIONES

/* function saludar () {
console.log("Hola soy una función");
}
saludar () */


// saludo2 ("Gabriel" ,39) <== este es un ej de si lo forzara yo. 

//          Lo que sigue es la forma para que lo ingrese el usuario:

/* saludo2(prompt("Decime tu nombre"),parseInt(prompt("Y ahora tú edad")))
function saludo2 (nombre,edad) {
alert(`Hola ${nombre}, tú edad es ${edad}`);
} */

// Función que devuelve el mayor de 2 números:

/* function mayor (num1,num2){
	if (num1>num2){
		return num1
	}
	return num2
}
console.log(mayor(10,20)); */

// -----------------------------------------------------
//ARROW FUNCTION
function sumalo (num5,num6){
	return num5+num6
}
console.log(sumalo(20,25));

//ESTO ES LO MISMO QUE LO DE ARRIBA DE ESTO:

const sumalo2 = (num5,num6)=>num5+num6;console.log(sumalo2(20,25));
//Se anulan las llaves y la necesidad del Return
//Otro ejemplo:
const holis = (nombre)=>`hola ${nombre}`;
console.log(holis("Diego"));

// -----------------------------------------------------