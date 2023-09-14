// // Sincrono - Asincrono

// // let nombre = "Carlos";

// // function primera() {
// //   segunda();
// //   console.log("Primera funcion");
// // }
// // function segunda() {
// //   tercera();
// //   console.log("Segunda funcion");
// // }
// // function tercera() {
// //   console.log("Tercera funcion");
// // }

// // primera();
// // console.log("Fin del script");

// // Promesas

// const information = [
//   {
//     name: "Carlos",
//     grade: true,
//   },
//   {
//     name: "Stephanie",
//     grade: true,
//   },
//   {
//     name: "Yolanda",
//     grade: true,
//   },
// ];

// function pedirNotas(students) {
//   const fnPromise = (resolve, reject) => {
//     if (students.every((student) => student.grade)) {
//       resolve(students.map((student) => student.name));
//     } else {
//       reject("No terminamos de corregir");
//     }
//   };
//   return new Promise(fnPromise);
// }

// const emptyArray = [];
// pedirNotas(information)
//   .then((resolve) => console.log(resolve))
//   .catch((reject) => console.log(reject))
//   .finally(() => console.log("Se resolvio la promesa"));

// console.log("Sigo con mis cosas");

// Fetch
// fetch("https://mindhub-xj03.onrender.com/api/amazing")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     let users = data.events;
//     const names = users.map((user) => user.name);
//     console.log(names);
//   })
//   .catch((error) => console.log(error));

// Ecma 6
// Ternarios
// condicion ? "si se cumple" : "no se cumple"
// console.log(2 > 3 ? "la condicion fue true" : " la condicion fue false");

// Destructuring
// const [asigna1elemento, asigna2elemento] = data;
// const lucre = mentores [i]
// const {propiedad} = lucre

// const lucre = mentores [i]
// const {nuevoNombre: propiedad} = lucre

// Spread
// const copiaArray = [...array];

// const copiaObjeto = { ...Objeto };
