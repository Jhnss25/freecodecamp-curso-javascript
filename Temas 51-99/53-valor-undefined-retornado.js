/*
Curso de freeCodeCamp: "Aprende JavaScript - Curso Completo desde Cero".
Curso Creado por: Estefania Cassingena Navone (@EstefaniaCassN).
Tema: Valor "undefined" retornado por una función.
*/

// Una función retorna undefined por defecto en unafunción
function sumar(a, b) {
  console.log(a + b);
} 

let a = 5;
let b = 6;

// let num = sumar(5, 2)
// console.log(num)

// undefined porque no hay una sentencia return
console.log(sumar(a, b));
