const inpEst = document.getElementById("inpEst");
const inpPes = document.getElementById("inpPes");
const btn = document.getElementById("btn");
const inpRes = document.getElementById("inpRes");

btn.addEventListener("click", () => {
  const inputValueEst = parseFloat(inpEst.value);
  const inputValuePes = parseFloat(inpPes.value);

  const result = inputValuePes / inputValueEst;

  inpRes.value = result;
});
