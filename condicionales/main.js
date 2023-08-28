// Ejercicio 1
function mayor(num1, num2) {
  if (num1 > num2) {
    console.log(`${num1} es mayor a ${num2}`);
  } else {
    console.log(`El ${num2} es mayor a ${num1}`);
  }
}
mayor(10, 20);
mayor(20, 10);

// Ejercicio 2
function iguales(num1, num2) {
  if (num1 === num2) {
    console.log(`${num1} es igual a ${num2}`);
  } else {
    console.log(`${num1} es diferente a ${num2}`);
  }
}
iguales(10, 10);
iguales(10, 20);

// Ejercicio 3
function mayorIgual(num1, num2) {
  if (num1 > num2) {
    console.log(`El numero mayor es ${num1}`);
  } else if (num2 > num1) {
    console.log(`El numero mayor es ${num2} `);
  } else {
    console.log(`Los numeros ${num1} y ${num2} son iguales`);
  }
}
mayorIgual(10, 20);
mayorIgual(5, 10);
mayorIgual(10, 10);

// Ejercicio 4
function menor(num1, num2, num3) {
  if (num1 <= num2 && num1 <= num3) {
    console.log(
      `El numero menor entre (${num1}, ${num2}, ${num3}) es = ${num1}`
    );
  } else if (num2 <= num1 && num2 <= num3) {
    console.log(
      `El numero menor entre (${num1}, ${num2}, ${num3}) es = ${num2}`
    );
  } else {
    console.log(
      `El numero menor entre (${num1}, ${num2}, ${num3}) es = ${num3}`
    );
  }
}
menor(26, 55, 5);
menor(100, 54, 15);

// Ejercicio 5
function personaAltura(per1, per2) {
  if (per1.altura > per2.altura) {
    console.log(`${per1.nombre} es mas alt@ que ${per2.nombre}`);
  } else {
    console.log(`${per2.nombre} es mas alt@ que ${per1.nombre}`);
  }
}

function personaEdad(per1, per2) {
  if (per1.edad > per2.edad) {
    console.log(`${per1.nombre} es mas mayor que ${per2.nombre}`);
  } else {
    console.log(`${per2.nombre} es mas mayor que ${per1.nombre}`);
  }
}

let persona1 = {
  nombre: "Carlos",
  edad: 33,
  altura: 178,
};
let persona2 = {
  nombre: "Stephanie",
  edad: 32,
  altura: 179,
};

personaAltura(persona1, persona2);
personaEdad(persona1, persona2);

//Ejercicio 6
let ingresoNombre = prompt("Ingresa tu nombre:");

let ingresoEdad = Number(prompt("Ingresa tu edad:"));

let ingresoAltura = Number(prompt("Ingresa tu altura:"));

let ingresoVision = Number(prompt("Ingresa tu vision:"));

function puedeConducir() {
  if (ingresoEdad >= 18 && ingresoAltura > 150 && ingresoVision >= 8) {
    console.log(`${ingresoNombre} puede conducir`);
  } else {
    console.log(`${ingresoNombre} no puede conducir`);
  }
}
puedeConducir(ingresoNombre, ingresoEdad, ingresoAltura, ingresoVision);

// Ejercicio 7

let nombreCliente = prompt("Ingrese su nombre:");

let paseVip = prompt("Tipo de pase Vip o Normal:");

let entrada = prompt("Posees una entrada si/no?");

function accesoEvento() {
  if (nombreCliente === "Carlos" || paseVip === "si") {
    return console.log(`${nombreCliente}, bienvenid@ a nuestro evento`);
  } else if (entrada === "si") {
    let utilizarEntrada = prompt("Desea utilizarla si/no?");
    if (utilizarEntrada === "si") {
      return console.log(`${nombreCliente}, bienvenid@ a nuestro evento `);
    } else {
      return console.log(`${nombreCliente}, acceso NO otorgado`);
    }
  } else {
    let deseaComprar = prompt("Desea comprar una entrada, si/no?");
    if (deseaComprar === "si") {
      let dineroDisponible = Number(
        prompt("Escribe la cantidad de dinero disponile")
      );
      if (dineroDisponible >= 1000) {
        return console.log(`Venta exitosa, bienvenid@`);
      } else {
        return console.log(
          `Tu saldo es ${dineroDisponible}, venta no exitosa.`
        );
      }
    } else {
      return console.log(`${nombreCliente}, NO tienes acceso!`);
    }
  }
}

accesoEvento();

// Ejercicio 8

let numeroIncognita = Math.floor(Math.random() * 10) + 1;

function adivinar() {
  for (let intentos = 3; intentos > 0; intentos--) {
    let numeroIngresado = Number(
      prompt(`Ingresa un número de 1 a 10. Intentos restantes: ${intentos}`)
    );

    if (numeroIngresado === numeroIncognita) {
      console.log("¡Felicitaciones, adivinaste el número!");
      break;
    } else if (numeroIngresado > numeroIncognita) {
      console.log("El número es mayor al número incógnita");
    } else {
      console.log("El número es menor al número incógnita");
    }

    if (intentos === 1) {
      console.log(
        `Agotaste tus intentos. El número incógnita era ${numeroIncognita}.`
      );
    }
  }
}

adivinar();

// Ejercicio 9
let edadPersona = Number(prompt("Ingresa tu edad:"));
function ingresarEdad() {
  if (edadPersona >= 0 && edadPersona <= 12) {
    return console.log(`La edad ${edadPersona} es de un infante`);
  } else if (edadPersona > 13 && edadPersona <= 18) {
    return console.log(`La edad ${edadPersona} es de un adolescente`);
  } else if (edadPersona > 19 && edadPersona <= 45) {
    return console.log(`La edad ${edadPersona} es de un mayor-joven`);
  } else if (edadPersona > 45 && edadPersona <= 99) {
    return console.log(`La edad ${edadPersona} es de un anciano`);
  } else {
    return console.log(prompt("En realidad tienes esta edad?."));
  }
}
ingresarEdad();

// Ejercicio 10

let jugadorUno = prompt("Jugador uno: piedra, papel o tijera?");
let jugadorDos = prompt("Jugador dos: piedra, papel o tijera?");

function determinarGanador() {
  if (jugadorUno === jugadorDos) {
    return console.log("Empate");
  } else if (
    (jugadorUno === "piedra" && jugadorDos === "tijera") ||
    (jugadorUno === "tijera" && jugadorDos === "papel") ||
    (jugadorUno === "papel" && jugadorDos === "piedra")
  ) {
    return console.log(`${jugadorUno} GANA!`);
  } else {
    return console.log(`${jugadorDos} GANA!`);
  }
}
determinarGanador();

// Ejercicio 11

let colorUsuario = prompt("Elije un color:");

function definirColor() {
  switch (colorUsuario) {
    case "blanco":
    case "negro":
      console.log("Falta de color");
      break;
    case "verde":
      console.log("El color de la naturaleza");
      break;
    case "azul":
      console.log("Color del agua");
      break;
    case "amarillo":
      console.log("Color del sol");
      break;
    case "rojo":
      console.log("Color del fuego");
      break;
    case "marron":
      console.log("Color de la tierra");
      break;
    default:
      console.log("Excelente eleccion, no lo teniamos pensado!");
      break;
  }
}
definirColor();

// Ejercicio 12

let numeroUno = Number(prompt("Ingresa el primer numero"));

let numeroDos = Number(prompt("Ingresa el segundo numero"));

let operacion = prompt("Suma, resta, multiplicacion y/o division");

function suma(num1, num2, ope) {
  if (ope === "suma") {
    console.log(`La suma de ${num1} y ${num2} es ${num1 + num2}`);
  }
}
function resta(num1, num2, ope) {
  if (ope === "resta") {
    console.log(`La resta de ${num1} y ${num2} es ${num1 - num2}`);
  }
}
function multiplicacion(num1, num2, ope) {
  if (ope === "multiplicacion") {
    console.log(`La multiplicacion de ${num1} y ${num2} es ${num1 * num2}`);
  }
}
function division(num1, num2, ope) {
  if (ope === "division") {
    if (num2 !== 0) {
      console.log(`La division de ${num1} y ${num2} es ${num1 / num2}`);
    } else {
      console.log("Error el divisor ingresado es CERO");
    }
  }
}
suma(numeroUno, numeroDos, operacion);
resta(numeroUno, numeroDos, operacion);
multiplicacion(numeroUno, numeroDos, operacion);
division(numeroUno, numeroDos, operacion);

// Ejercicio 13
let nombreInfo = prompt("Ingresa tu nombre");

let apellido = prompt("Ingresa tu apellido");

let cedula = Number(prompt("Ingresa tu numero de cedula"));

function confirmacionDatos() {
  let datosIngresados = {
    nombre: nombreInfo,
    apellido: apellido,
    cedula: cedula,
  };
  console.log(datosIngresados);
  let confirmando = prompt("Son estos datos, correctos?");
  if (confirmando === "si") {
    console.table(datosIngresados);
    console.log(
      `Hola ${datosIngresados.nombre} ${datosIngresados.apellido}, tu registro fue exitoso `
    );
  } else {
    console.log(`${datosIngresados.nombre} vuelve a intentarlo en un mes`);
  }
}
confirmacionDatos();
