const cop = document.getElementById("cop");
const usd = document.getElementById("usd");
const trm = 4000;

cop.addEventListener("input", () => {
  const inputCop = parseFloat(cop.value);

  usd.value = inputCop / trm;
});

usd.addEventListener("input", () => {
  const inputUsd = parseFloat(usd.value);

  cop.value = inputUsd * trm;
});
