const pesos = 4052;
const dolar = 0.00025;
document.getElementById("copInput").addEventListener("input", (evento) => {
  let resDolar = parseFloat(copInput.value) * dolar;
  document.getElementById("usdInput").value = resDolar.toFixed(3);
});
document.getElementById("usdInput").addEventListener("input", (evento) => {
  let resPesos = parseFloat(usdInput.value) * pesos;
  document.getElementById("copInput").value = resPesos.toFixed(3);
});
