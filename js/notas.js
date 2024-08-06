let notas = [
  {
    id: 1,
    titulo: "Sacar la basura",
    texto: "mi mama me va a castigar si no lo hago",
    realizada: false,
  },
  {
    id: 2,
    titulo: "Cocinar",
    texto: "Alistar comida para la hora del almuerzo",
    realizada: false,
  },
];

let idGlobal = 3;
let contenedor = document.getElementById("contenedor");
let tituloAGuargar = document.getElementById("tituloNew");
let textoAGuardar = document.getElementById("textoNew");

function crearTarjetas(a, b) {
  b.innerHTML = "";
  for (let i = 0; i < a.length; i++) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "text-bg-dark", "mb-3", "notasSize");
    tarjeta.innerHTML = `<div class="card-header"></div>
  <div class="card-body">
    <h5 class="card-title text-center">${a[i].titulo}</h5>
    <p class="card-text text-center">${a[i].texto}</p>
  </div><button type="button"  id="borrarNota" onclick="borrarNota(${a.id})" class="btn btn-danger">Borrar Nota</button>`;

    b.appendChild(tarjeta);
  }
}
function crearNotas(a, b) {
  let titulo = a.value;
  let texto = b.value;
  if ((titulo != "") & (texto != "")) {
    let nuevaNota = {
      id: idGlobal++,
      titulo: titulo,
      texto: texto,
    };
    notas.push(nuevaNota);
  }
}

document.getElementById("botonBorrar").addEventListener("click", function () {
  document.getElementById("tituloNew").value = "";
  document.getElementById("textoNew").value = "";
});

crearTarjetas(notas, contenedor);
document.getElementById("botonGuardar").addEventListener("click", function () {
  crearNotas(tituloAGuargar, textoAGuardar, contenedor);
  crearTarjetas(notas, contenedor);
  document.getElementById("tituloNew").value = "";
  document.getElementById("textoNew").value = "";
});

console.log(notas);
