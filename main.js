let herramientas = [
  {
    nombre: "BMI",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxlI06YIGwX2MG8igLkLx2elZ8QPTZAZ_76KEFY7uRhc_FYpSo",
    descripcion: "Calculadora de indice de masa corporal.",
    pagina: "./componentes/bmi.html",
  },
  {
    nombre: "Conversor",
    img: "https://play-lh.googleusercontent.com/mGMPj24uTsKFJz5jzUTi1-kf3PL71bMy9oJtdwF7RXbHJdWqwD-DXHboKNpMObcynQ=w240-h480-rw",
    descripcion: "Herramienta para calcular de COP a USD.",
    pagina: "./componentes/conversor.html",
  },
  {
    nombre: "Notas",
    img: "https://icon-library.com/images/take-notes-icon/take-notes-icon-22.jpg",
    descripcion: "Herramienta para Crear,Guardar,borrar notas.",
    pagina: "./componentes/notas.html",
  },
];

let contenedor = document.getElementById("contenedor");

for (let i = 0; i < herramientas.length; i++) {
  let evento = document.createElement("div");
  evento.classList.add("card", "p-3", "tarjetaAncho");
  evento.innerHTML = `<img src="${herramientas[i].img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${herramientas[i].nombre}</h5>
    <p class="card-text">${herramientas[i].descripcion}</p>
    <a href="${herramientas[i].pagina}" class="btn btn-primary">Abrir Herramienta</a>
  </div>
</div>`;

  contenedor.appendChild(evento);
}
