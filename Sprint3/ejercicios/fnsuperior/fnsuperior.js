// // Ejercicio 1

// const imprimirMensaje = (mensaje) => console.log(mensaje);

// // Ejercicio 2

// const crearMultiplicacion = (numero1, numero2) => {
//   let resultado = numero1 * numero2;
//   return resultado;
// };

// // Ejercicio 3

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const mapeo = array.map((numeros) => {
//   return crearMultiplicacion(numeros, numeros);
// });
// console.log(mapeo);

// Ejercicio 4
// const data = beers;

// const abv = data.slice().sort((a, b) => {
//   return b.abv - a.abv;
// });

// const slicedBeers = abv.slice(0, 10);

// console.log(slicedBeers);

// tosor;
// Ejercicio 5
// const data = beers;
// const ibu = data.slice().sort((a, b) => {
//   return a.ibu - b.ibu;
// });

// const menosAmargas = ibu.slice(0, 10);

// console.log(menosAmargas);

// Ejercicio 6
// const data = beers;

// function cervezaNombre(cervezas, name) {
//   return cervezas.find((cerveza) => cerveza.name === name);
// }

// const print = cervezaNombre(data, "Buzz");
// console.log(print);

// Ejercicio 7
// const data = beers;
// function ibuFilter(data, ibuValor) {
//   let ibuObjeto = "";
//   for (const iterator of data) {
//     if (iterator.ibu === ibuValor) {
//       ibuObjeto = iterator;
//       return ibuObjeto;
//     }
//   }

//   return `No existe cerveza con ibu #${ibuValor}`;
// }

// const print = ibuFilter(data, 90);
// console.log(print);

// Ejercicio 8
// const data = beers;

// function beerName(name) {
//   for (let i = 0; i < data.length; i++) {
//     if (data[i].name === name) {
//       return `La posicion de la cerveza ${name} es ${i}`;
//     }
//   }
//   return `La cerveza ${name} no existe`;
// }
// const print = beerName("Alpha Dog");
// console.log(print);

// Ejercicio 9
// const data = beers;
// function nivelEtilico(data, valor) {
//   const filter = data.filter((numero) => {
//     return numero.abv < valor;
//   });
//   return filter;
// }
// const print = nivelEtilico(data, 5);
// console.log(print);
// map;

// Ejercicio 10
// const data = beers;

// function ordenListado(data, ph, bolean) {
//   if (ph === "ph" && bolean === true) {
//     const ascedente = data.toSorted((a, b) => b.ph - a.ph);
//     const diezArriba = ascedente.slice(0, 10);
//     return diezArriba;
//   } else if (ph === "ph" && bolean === false) {
//     const descendente = data.toSorted((a, b) => a.ph - b.ph);
//     const diezAbajo = descendente.slice(0, 10);
//     return diezAbajo;
//   }
// }
// console.log(ordenListado(data, "ph", false));

// Ejercicio 11

const data = beers;

function templateTable(data) {
  return `<tr>
            <td>${data.name}</td>
            <td>${data.abv}</td>
            <td>${data.ibu}</td>
        </tr>
 `;
}

function renderizar(listado) {
  let template = "";
  for (const iterator of listado) {
    template += templateTable(iterator);
  }
  return template;
}

function print(template, id) {
  let selector = document.getElementById(id);
  selector.innerHTML = template;
}

const creating = renderizar(data);
print(creating, "table");
