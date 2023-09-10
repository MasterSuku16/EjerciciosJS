//Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “Hello World”.
// alert('hola');

// Escribe un programa de una sola línea que escriba en la pantalla un texto que diga “Hello World” (document.write).
// document.write('hola perrin');

// Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
// let suma = 5 + 2;
// document.write('el resultado de 5+3 es igual a:', suma);
// document.write(3+5);

// Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga “Hola nombreUsuario”
// const obtenerNombre = prompt('cual es tu nombre');
// document.write('hola pinche ', obtenerNombre);

// Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
// function sumar() {
//     const num1 = parseInt(document.getElementById('num1').value);
//     const num2 = parseInt(document.getElementById('num2').value);
//     let suma = num1 + num2
//     document.getElementById('resultado').textContent = suma;
// }

// var n1 = prompt("Escribe un número");
// var n2 = prompt("Escribe otro número");
// document.write("La suma es: "+ ( parseInt(n1)+ parseInt(n2) ) );

//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
let num1 = prompt('ingrese el primer numero');
let num2 = prompt('ingrese el segundo numero')

if (num1 > num2) {
    alert(`el numero ${num1} es mayor que el numero ${num2}`)
} else {
    alert(`el numero ${num2} es mayor que el numero ${num1}`)   
}