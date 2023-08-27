// Ejercicio 1
function saludar(nombre, apellido) {
  console.log(`Hola mi nombre es ${nombre}, y mi apellido es ${apellido}.`);
}
saludar("Carlos", "Zarate");

// Ejercicio 2
function multiplicar(num1, num2) {
  console.log(
    `El resultado de la multiplicacion de ${num1} x ${num2} es: ${num1 * num2}`
  );
}
multiplicar(10, 50);
multiplicar(20, 45);

// Ejercicio 3
function areaTriangulo(base, altura) {
  console.log(
    `Base x altura / 2 = ${base} x ${altura} / 2 el area del triangulo es ${
      (base * altura) / 2
    } `
  );
}
areaTriangulo(5, 3);
function perimetroTriangulo(lad1, lad2, lad3) {
  console.log(
    `La suma de todos sus lados = ${
      lad1 + lad2 + lad3
    } es el perimetro del triangulo`
  );
}
perimetroTriangulo(4, 5, 6);

//Ejercicio 4
function calcularPrecio(precio, cantidad) {
  let valorTotal = precio;
  let descuentoDiez = valorTotal * 0.1;
  let descuentoVeinte = valorTotal * 0.2;
  if (cantidad >= 10) {
    valorTotal -= descuentoDiez;
    return console.log(
      `El valor de su compra es de $${precio} y el valor total a pagar con descuento es de $${(valorTotal =
        valorTotal - descuentoDiez)}`
    );
  } else if (cantidad >= 20) {
    valorTotal -= descuentoVeinte;
    return console.log(
      `El valor de su compra es de $${precio} y el valor total a pagar con descuento es de $${(valorTotal =
        valorTotal - descuentoVeinte)}`
    );
  }
}
calcularPrecio(10000, 10);
calcularPrecio(20000, 20);
calcularPrecio(50000, 40);

// Ejercicio 5
function esMayorDeEdad(edad) {
  if (edad >= 18) return console.log(`Eres mayor de edad, tu edad es ${edad}`);
  else {
    return console.log(`Eres menor de edad, tu edad es ${edad}`);
  }
}
esMayorDeEdad(18);
esMayorDeEdad(17);

// Ejercicio 6
function calcularImpuesto(ingresoAnual) {
  if (ingresoAnual <= 10000) {
    return console.log(
      `El impuesto a pagar por un ingreso anual de $${ingresoAnual} es de $${
        ingresoAnual * 0.1
      }`
    );
  } else if (ingresoAnual > 10000 && ingresoAnual <= 20000) {
    return console.log(
      `El impuesto a pagar por un ingreso anual de $${ingresoAnual} es de $${
        ingresoAnual * 0.15
      }`
    );
  } else {
    return console.log(
      `El impuesto a pagar por un ingreso anual de $${ingresoAnual} es de $${
        ingresoAnual * 0.2
      }`
    );
  }
}

calcularImpuesto(10000);
calcularImpuesto(20000);
calcularImpuesto(30000);

// Ejercicio 7
function verificarDia(diaSemana) {
  switch (diaSemana) {
    case 1:
      console.log(`El dia de la semana ${diaSemana} es un dia laboral`);
      break;
    case 2:
      console.log(`El dia de la semana ${diaSemana} es un dia laboral`);
      break;
    case 3:
      console.log(`El dia de la semana ${diaSemana} es un dia laboral`);
      break;
    case 4:
      console.log(`El dia de la semana ${diaSemana} es un dia laboral`);
      break;
    case 5:
      console.log(`El dia de la semana ${diaSemana} es un dia laboral`);
      break;
    case 6:
      console.log(`El dia de la semana ${diaSemana} es fin de semana!`);
      break;
    case 7:
      console.log(`El dia de la semana ${diaSemana} es fin de semana!`);
      break;
  }
}
verificarDia(1);
verificarDia(2);
verificarDia(3);
verificarDia(4);
verificarDia(5);
verificarDia(6);
verificarDia(7);
