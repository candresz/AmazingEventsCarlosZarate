// Ejercicio 1
let numeroIngresado = prompt("Ingresa un numero entre 1 y 100");

if (numeroIngresado > 1 && numeroIngresado < 100) {
  for (let i = numeroIngresado; i >= 0; i--) {
    console.log(i);
  }
} else {
  console.log(`El numero ${numeroIngresado} no esta entre 1 y 100`);
}

// Ejercicio 2

let numeroIngresado1 = prompt("Ingresa un numero entre 1 y 10");

if (numeroIngresado1 >= 1 && numeroIngresado1 <= 10) {
  for (i = 1; i <= 10; i++) {
    console.log(`${numeroIngresado1} x ${i} = ${numeroIngresado1 * i}`);
  }
} else {
  console.log(`El numero ${numeroIngresado1}, no esta entre 1 y 10`);
}

// // Ejercicio 3

let numeroIngresado2 = parseInt(prompt("Ingresa un numero"));

let sumatoria = numeroIngresado2;

while (numeroIngresado2 !== 0) {
  numeroIngresado2 = parseInt(prompt("Ingresa un numero"));
  sumatoria += numeroIngresado2;
}
console.log(`La suma es ${sumatoria}`);

// // Ejercicio 5

let adivinandoNumero = parseInt(prompt("Ingresa tu número para adivinar"));
let intentos = 0;

while (adivinandoNumero !== sumatoria) {
  intentos++;

  if (adivinandoNumero > sumatoria) {
    console.log(`El número ${adivinandoNumero} es mayor que el secreto`);
  } else {
    console.log(`El número ${adivinandoNumero} es menor que el secreto`);
  }

  adivinandoNumero = parseInt(prompt("Ingresa el número para adivinar"));
}

console.log(
  `Acertaste! El número secreto era: ${sumatoria}, realizaste ${intentos} intentos`
);

// Ejercicio 4

let numeroIngresado2 = parseInt(prompt("Ingresa un numero"));

let sumatoria = numeroIngresado2;
do {
  numeroIngresado2 = parseInt(prompt("Ingresa un numero"));
  sumatoria += numeroIngresado2;
} while (numeroIngresado2 !== 0);
console.log(`La suma es ${sumatoria}`);

// Ejercicio 6

let numeroIngresado = parseInt(prompt("Ingresa un numero"));

for (let i = 1; i <= numeroIngresado; i++) {
  let formula = numeroIngresado % i;
  if (formula === 0) {
    console.log(i);
  }
}

// Ejercicio 7

let colores = ["Blanco", "Negro", "Morado", "Rojo", "Amarillo", "Azul"];

for (listado of colores) {
  console.log(listado);
}

// Ejercicio 8
let numeros = [5, 4, 3, 2, 1];
for (elDoble of numeros) {
  console.log(`El numero es ${elDoble} y su doble es ${elDoble * 2}`);
}

// Ejercicio 9
let familia = [
  {
    nombre: "Andres",
    apellido: "Zarate",
    edad: 32,
    integrante: "Papa",
  },
  {
    nombre: "Stephanie",
    apellido: "Durocher",
    edad: 32,
    integrante: "Mama",
  },
  {
    nombre: "Bijoux",
    apellido: "Zarate",
    edad: 15,
    integrante: "Mascota",
  },
  {
    nombre: "Bobo",
    apellido: "Zarate",
    edad: 5,
    integrante: "Mascota",
  },
];

for (let familiares of familia) {
  console.log(
    `Hola soy ${familiares.nombre} (${familiares.integrante}) y tengo ${familiares.edad}`
  );
}

// Ejercicio 10

let personaje = {
  nombre: "Carlos",
  apellido: "Zarate",
  esColombiano: true,
  edad: 32,
  estudios: ["Secundario", "Universidad"],
};

for (let propiedades in personaje) {
  console.log(propiedades);
}

// // Ejercicio 11
for (let propiedades in personaje) {
  console.log(personaje[propiedades]);
}

// Ejercicio 12

let ingresoNumero = parseInt(prompt("Ingresa un numero"));
let numerosPares = 0;
let numerosImpares = 0;

while (ingresoNumero !== 0) {
  if (ingresoNumero % 2 === 0) {
    numerosPares += ingresoNumero;
  } else {
    numerosImpares += ingresoNumero;
  }
  ingresoNumero = parseInt(prompt("Ingresa un numero"));
}

console.log(`La suma de numeros pares es: ${numerosPares}`);
console.log(`La suma de numeros Impares es: ${numerosImpares}`);

// Ejercicio 13

let numeros = [55, 12, 30, 45, 10, 77, 25, 33, 65, 41];
let numeroMayor = 0;
for (let i = 0; i < numeros.length; i++) {
  if (numeroMayor < numeros[i]) {
    numeroMayor = numeros[i];
  }
}
console.log(numeroMayor);
