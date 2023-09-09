// //Ejercicio 1
const btn = document.getElementById("btn");
const sqr = document.getElementById("sqr");
let currentColor = "";

btn.addEventListener("click", () => {
  if (currentColor === "") {
    sqr.style.backgroundColor = "#50EBEC";
    sqr.innerHTML = "<h1>Color CELESTE</h1>";
    currentColor = "#50EBEC";
  } else if (currentColor === "#50EBEC") {
    sqr.style.backgroundColor = "red";
    sqr.innerHTML = "<h1>Color ROJO</h1>";
    currentColor = "red";
  } else {
    sqr.style.backgroundColor = "";
    sqr.innerHTML = "<h1>Color GRIS</h1>";
    currentColor = "";
  }
});
