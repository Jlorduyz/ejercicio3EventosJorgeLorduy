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

function borrarNota(a) {
  let index = notas.findIndex((objeto) => objeto.id == a);

  if (index !== -1) {
    notas.splice(index, 1);
    crearTarjetas(notas, contenedor);
  }
}
document.getElementById("botonBorrar").addEventListener("click", function () {
  document.getElementById("tituloNew").value = "";
  document.getElementById("textoNew").value = "";
});

function crearTarjetas(a, b) {
  b.innerHTML = "";
  if (a.length == 0) {
    b.innerHTML = `<p class="fs-2">NO HAY NOTAS PARA MOSTRAR </p>`;
  }
  for (let i = 0; i < a.length; i++) {
    let tarjeta = document.createElement("div");
    tarjeta.classList.add("card", "text-bg-dark", "mb-3", "notasSize");
    tarjeta.innerHTML = `<div class="card-header">
    <input onClick="marcarRealizada(${a[i].id})" type="checkbox" ${
      a[i].realizada ? "checked" : ""
    }>
    <h5 class="card-title text-center">${a[i].titulo}</h5></div>
  <div class="card-body">
<p class="card-text text-center">${a[i].texto}</p>
  </div><button type="button"  id="borrarNota" onclick="borrarNota(${
    a[i].id
  })" class="btn btn-danger">Borrar Nota</button>`;

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
      realizada: false,
    };
    notas.push(nuevaNota);
  }
}
document
  .getElementById("barraBusqueda")
  .addEventListener("keydown", (evento) => {
    console.log(evento);
  });

let checkSwitch = document.getElementById("checkRealizadas");
function checkRealizadas() {
  let notasFiltradas = checkSwitch.checked
    ? notas.filter((nota) => nota.realizada)
    : notas;
  crearTarjetas(notasFiltradas, contenedor);
}

function marcarRealizada(a) {
  let nota = notas.find((objeto) => objeto.id == a);
  nota.realizada = !nota.realizada;
  crearTarjetas(notas, contenedor);
}
crearTarjetas(notas, contenedor);
document.getElementById("botonGuardar").addEventListener("click", function () {
  crearNotas(tituloAGuargar, textoAGuardar);
  crearTarjetas(notas, contenedor);
  document.getElementById("tituloNew").value = "";
  document.getElementById("textoNew").value = "";
});

console.log(notas);
