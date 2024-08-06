let kgInput = document.getElementById("peso");
let cmInput = document.getElementById("altura");

function calculoBmi(a, b) {
  let resultadoOp = a / (b / 100) ** 2;
  return resultadoOp.toFixed(2);
}

document.getElementById("botonBmi").addEventListener("click", (event) => {
  let peso = parseFloat(kgInput.value);
  let altura = parseFloat(cmInput.value);
  let resultadoBmi = calculoBmi(peso, altura);
  document.getElementById("resultBmi").innerHTML = resultadoBmi;
});
