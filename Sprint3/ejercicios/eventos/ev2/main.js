const input = document.getElementById("inp");
const square = document.getElementById("sqr");
const btn = document.getElementById("btn");

input.addEventListener("input", () => {
  const inputValue = input.value;
  square.textContent = inputValue;
});

btn.addEventListener("click", () => {
  square.textContent = "";
});
