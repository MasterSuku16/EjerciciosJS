//Ejercicio 1
// function calcularEdad(){
//     const edad = parseInt(document.getElementById('edad').value);

//     if (edad >= 18) {
//         document.getElementById('edadFinal').textContent = `${edad} años`
//         document.getElementById('estado').textContent = `aceptado`
//     }else{
//         document.getElementById('edadFinal').textContent = `${edad} años`
//         document.getElementById('estado').textContent = `rechazado`
//     }
// }

//Ejercicio 2
// function nota() {
//         let nota = parseInt(document.getElementById('calif').value);
//         if (nota == 0 && nota <=3) {
//             document.getElementById('notaFinal').textContent = `${nota}`
//             document.getElementById('estado').textContent = `muy insuficiente paps`
//         } else if( nota >= 3 && nota <= 5){
//             document.getElementById('notaFinal').textContent = `${nota}`
//             document.getElementById('estado').textContent = `insuficiente`
//         } else if(nota >=5 && nota <=6){
//             document.getElementById('notaFinal').textContent = `${nota}`
//             document.getElementById('estado').textContent = `suficiente`
//         }else if( nota >= 6 && nota <=7){
//             document.getElementById('notaFinal').textContent = `${nota}`
//             document.getElementById('estado').textContent = `bien xd`
//         }else if(nota >= 7 && nota <= 9){
//             document.getElementById('notaFinal').textContent = `${nota}`
//             document.getElementById('estado').textContent = `notable papu`
//         }else if(nota >= 9 && nota <= 10){
//             document.getElementById('notaFinal').textContent = `${nota}`
//             document.getElementById('estado').textContent = `ah perrin sobresaliente`
//         }
// }

//Ejercicio 3
// let cadenaTexto = [];

//   function agregarTexto() {
//     let cadena = document.getElementById("cad").value;

//     if (cadena !== "") {
//       cadenaTexto.push(cadena);
//       document.getElementById("cad").value = "";
//     }
//   }

//   function mostrarTexto() {
//     let resultado = cadenaTexto.join(" ");
//     document.getElementById("text").textContent = resultado;
//   }

//====Ejercicio 4
// let sumaNumeros = 0;
// function agregarNumero(){
//     let num = parseInt(document.getElementById('numero').value);

//     if (!isNaN(num)) {
//         sumaNumeros += num;
//         document.getElementById('numero').value = '';
//     } else {
//         alert('Por favor, ingrese un número válido.');
//     }
// }
// function mostrarNumero() {
//     document.getElementById('totalNum').textContent = sumaNumeros;
// }

//=======Ejercicio 5
// function agregarNumero() {
//   let numero = parseFloat(document.getElementById("num1").value);
//   if (numero % 2 === 0) {
//     document.getElementById("numeroIdk").textContent = `${numero} es par`;
//   } else {
//     document.getElementById("numeroIdk").textContent = `${numero} es impar`;
//   }
// }

//=======ejercicio 6
// function agregarNombre() {
//   let nom1 = document.getElementById("nom1").value;
//   let age1 = parseInt(document.getElementById("age1").value);

//   let nom2 = document.getElementById("nom2").value;
//   let age2 = parseInt(document.getElementById("age2").value);

//   let nom3 = document.getElementById("nom3").value;
//   let age3 = parseInt(document.getElementById("age3").value);

//   if (age1 > age2 && age1 > 3) {
//     document.getElementById("nomMayor").textContent = `${nom1}`;
//   } else if (age2 > age1 && age2 > age3) {
//     document.getElementById("nomMayor").textContent = `${nom2}`;
//   } else if (age3 > age1 && age3 > age2) {
//     document.getElementById("nomMayor").textContent = `${nom3}`;
//   } else{
//       document.getElementById('nomMayor').textContent = `no se sabe xd`
//   }
// }

//=======ejercicio 7
// function agregarNumero(){
//     var num = Math.floor((Math.random() * 99) + 1);
//     document.getElementById('numRandom').textContent = `${num}`;

// }

//======== ejercicio 8
// var num1 = 0;
// var num2 = 0;
// var num3 = 0;

// function generarNumeroAleatorio() {
//     return Math.floor((Math.random() * 99) + 1);
// }

// function agregarNumero() {
//     num1 = generarNumeroAleatorio();
//     num2 = generarNumeroAleatorio();
//     num3 = generarNumeroAleatorio();

//     document.getElementById('numRandom1').textContent = `${num1}`;
//     document.getElementById('numRandom2').textContent = `${num2}`;
//     document.getElementById('numRandom3').textContent = `${num3}`;
// }

//=====EJERCICIO 9======
// function cambiarTexto() {
//     const changeTexto = document.getElementById('textMay').value;
//     document.getElementById('textNor').textContent = `${changeTexto}`
//     document.getElementById('textMayus').textContent = changeTexto.toUpperCase(); //todo el texto en mayusculas
//     document.getElementById('textMayus').textContent = changeTexto[0].toUpperCase() + changeTexto.slice(1); //la primera letra en mayusculas
// }

// ======EJERCICIO 10====

// function remplazarTexto() {
//     const textoOriginal = document.getElementById('textChange').value;
//     let textCambiado = "";

//     for (let i = 0; i < textoOriginal.length; i++) {
//         textCambiado += textoOriginal[i];
//         if (i !== textoOriginal.length - 1) {
//             textCambiado += "-";
//         }
//     }
//     document.getElementById('textNor').textContent = `${textoOriginal}`
//     document.getElementById('textRep').textContent = `${textCambiado}`
// }
// remplazarTexto();

// esto es con el metodo replace
// function remplazarTexto() {
//     const textoOriginal = document.getElementById('textChange').value;
//     const textCambiado = textoOriginal.replace(/./g, (match, offset) => {
//         return offset === textoOriginal.length - 1 ? match : match + "-";
//     });
//     document.getElementById('textNor').textContent = textoOriginal;
//     document.getElementById('textRep').textContent = textCambiado;
// }

// ===== ejercicio 11
// function contTexto() {
//     let cadenaTexto = document.getElementById('contTexto').value;
//     let numCaract = cadenaTexto.length;
//     cadenaTexto = cadenaTexto.toLowerCase();
//     let caract;
//     let count = 0;

//     for (let i = 0; i < numCaract; i++) {
//         caract = cadenaTexto.charAt(i);
//         if ((caract === 'a') || (caract === 'e') || (caract === 'i') || (caract === 'o') || (caract === 'u')) {
//             count++;
//         }
//     }
//     document.getElementById('totalVocales').textContent = count;
// }

// === ejercicio 12
// function revTextoComp() {
//     let cadenaNormal = document.getElementById('revTexto').value;
//     let numCaracteres = cadenaNormal.length;
//     let car;
//     let texto = "";
//     for ( let i = 0;  i< numCaracteres; i++) {
//         car = cadenaNormal.charAt(i);
//         texto = car + texto;
//     }
//     document.getElementById('allRevText').textContent = texto;
// }

//=====ejercicio 13 <- este es para un texto
// function esPalindromo() {
//   const textoOriginal = document
//     .getElementById("palindromo")
//     .value.toLowerCase();
//   let textoSinEspacios = "";

//   for (let i = 0; i < textoOriginal.length; i++) {
//     if (textoOriginal[i] !== " ") {
//       textoSinEspacios += textoOriginal[i];
//     }
//   }

//   const textoReverso = textoSinEspacios.split("").reverse().join("");

//   if (textoSinEspacios === textoReverso) {
//     document.getElementById("final").textContent = "Es un palíndromo.";
//   } else {
//     document.getElementById("final").textContent = "No es un palíndromo.";
//   }
// }

//para solo una palabra
// function esPalindromo(palabra) {
//     const textoOriginal = palabra.toUpperCase();
//     let textoSinEspacios = "";

//     for (let i = 0; i < textoOriginal.length; i++) {
//         if (textoOriginal[i] !== " ") {
//             textoSinEspacios += textoOriginal[i];
//         }
//     }

//     const textoReverso = textoSinEspacios.split("").reverse().join("");
//     return textoSinEspacios === textoReverso;
// }

// function verificarPalindromo() {
//     const palabra = document.getElementById('palindromo').value;
//     if (esPalindromo(palabra)) {
//         document.getElementById("final").textContent = "Es un palíndromo.";
//     } else {
//         document.getElementById("final").textContent = "No es un palíndromo.";
//     }
// }

//=====EJERCICIO 14
// function comienzaVocal() {
//     const primerVocal = document.getElementById('findVocal').value;

//     let cadenaMinuscula = primerVocal.toLowerCase();
//     let primerCaracter = cadenaMinuscula.charAt(0);

//     const vocales = ['a','e','i','o','u'];

//     if (vocales.indexOf(primerCaracter) == -1) {
//         document.getElementById('finalResult').textContent = `ninguna`;

//     } else {
//         document.getElementById('finalResult').textContent = primerCaracter;
//     }
// }
//<------METODO INCLUDES
// function comienzaVocal() {
//     const primerVocal = document.getElementById('findVocal').value;

//     let cadenaMinuscula = primerVocal.toLowerCase();
//     let primerCaracter = cadenaMinuscula.charAt(0);

//     const vocales = ['a', 'e', 'i', 'o', 'u'];

//     if (!vocales.includes(primerCaracter)) {
//         document.getElementById('finalResult').textContent = 'NO';

//     } else {
//         document.getElementById('finalResult').textContent = primerCaracter;
//     }
// }

//======EJERCICIO 15
// function operacionFibo() {
//     const numero = parseInt(document.getElementById('serieFibo').value);

//     if (numero >= 1 && numero <= 100) {
//         let fibonacci = [0,1];
//         while (fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2] <= numero) {
//             fibonacci.push(fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2]);
//         }
//         document.getElementById('finalResult').textContent = fibonacci.join(', ');
//     }else{
//         document.getElementById('finalResult').textContent = 'papi debe de estar entre 1 y 100';
//     }
// }

//ejercicio 16 <- pero sin un marcador
// function jugar(eleccionUsuario) {
//     const opciones = ['piedra', 'papel', 'tijera'];
//     const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

//     let resultado = '';

//     if (eleccionUsuario === eleccionComputadora) {
//         resultado = '¡Es un empate!';
//     } else if (
//         (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijera') ||
//         (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
//         (eleccionUsuario === 'tijera' && eleccionComputadora === 'papel')
//     ) {
//         resultado = '¡Ganaste! La computadora eligió ' + eleccionComputadora + '.';
//     } else {
//         resultado = 'Perdiste. La computadora eligió ' + eleccionComputadora + '.';
//     }
//     document.getElementById('resultado').textContent = resultado;
// }

//<--------CON MARCADOR XD
// let contadorGanadas = 0;
// let contadorGanadasComputadora = 0;

//         function empezarJuego() {
//             document.getElementById('piedra').disabled = false;
//             document.getElementById('papel').disabled = false;
//             document.getElementById('tijera').disabled = false;
//         }

//         function jugar(eleccionUsuario) {
//             const opciones = ['piedra', 'papel', 'tijera'];
//             const eleccionComputadora = opciones[Math.floor(Math.random() * opciones.length)];

//             let resultado = '';

//             if (eleccionUsuario === eleccionComputadora) {
//                 resultado = '¡Es un empate!';
//             } else if (
//                 (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijera') ||
//                 (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra') ||
//                 (eleccionUsuario === 'tijera' && eleccionComputadora === 'papel')
//             ) {
//                 resultado = '¡Ganaste! La computadora eligió ' + eleccionComputadora + '.';
//                 contadorGanadas++;
//             } else {
//                 resultado = 'Perdiste. La computadora eligió ' + eleccionComputadora + '.';
//                 contadorGanadasComputadora++;
//             }

//             document.getElementById('resultado').textContent = resultado;
//             document.getElementById('contadorGanadas').textContent = contadorGanadas;
//             document.getElementById('contadorGanadasComputadora').textContent = contadorGanadasComputadora;
//         }

//         function reiniciarContador() {
//             contadorGanadas = 0;
//             contadorGanadasComputadora = 0;

//             document.getElementById('contadorGanadas').textContent = contadorGanadas;
//             document.getElementById('contadorGanadasComputadora').textContent = contadorGanadasComputadora;
//         }

//===EJERCICIO 17 
// function devolverPi() {
//     // const valorPi = parseFloat(document.getElementById('obtenerPI').value);
//     valorPi = (Math.PI).toFixed(6);

//     document.getElementById('finalResult').textContent = `Este es el valor: ${valorPi}` 
// }

//==EJERCICIO 18
// function calcular() {
//     const precio2 = parseInt(document.getElementById('precio').value);
//     let iva = parseInt(document.getElementById('iva').value);

//     // If iva is not provided, default to 21
//     iva = iva || 21;
//     const ivaIncluida = precio2 + (precio2 * iva / 100);

//     if (ivaIncluida > 0) {
//         document.getElementById('total').textContent = ivaIncluida;
//     } else {
//         document.getElementById('subtotal').textContent = precio2;
//     }
// }



    
