// Carrusel
function scrollCarousel(dir) {
  let c = document.getElementById("carousel");
  let carta = c.querySelector(".card");
  let ancho = carta.offsetWidth + 16; // margen o gap

  let max = c.scrollWidth - c.clientWidth;
  let actual = c.scrollLeft;

  if (dir === 1 && actual >= max) {
    c.scrollTo({ left: 0, behavior: 'smooth' }); // volver al inicio
  } else if (dir === -1 && actual <= 0) {
    c.scrollTo({ left: max, behavior: 'smooth' }); // ir al final
  } else {
    c.scrollBy({ left: dir * ancho, behavior: 'smooth' });
  }
}

// VIDEO 
const vid = document.getElementById('myVideo');
const btnPlay = document.getElementById('playBtn');
const miniatura = document.querySelector('.video-thumbnail');

btnPlay.addEventListener('click', function () {
  if (miniatura) miniatura.style.display = 'none';
  btnPlay.style.display = 'none';
  vid.setAttribute('controls', true);
  vid.play(); // sin esperar, vamos allá
});


// MAPA COMPETITIONS (por logos, medio rudimentario)
let botones = document.querySelectorAll('.logo-btn');
let zonas = document.querySelectorAll('.comp-container');

botones.forEach(b => {
  b.addEventListener('click', () => {
    let id = b.dataset.target;

    zonas.forEach(z => {
      z.style.display = (z.dataset.id === id) ? 'block' : 'none';
    });
  });
});

// Mostrar uno al principio, el resto no
zonas.forEach((z, i) => z.style.display = i === 0 ? 'block' : 'none');


// EVENTOS PARA CALENDARIO
var eventos = {
  "2025-06-20": { nombre: "X Games Osaka 2025", tipo: "XG" },
  "2025-06-21": { nombre: "X Games Osaka 2025", tipo: "XG" },
  "2025-06-22": { nombre: "X Games Osaka 2025", tipo: "XG" },
  "2025-06-27": { nombre: "X Games Salt Lake City 2025", tipo: "XG" },
  "2025-06-28": { nombre: "X Games Salt Lake City 2025", tipo: "XG" },
  "2025-06-29": { nombre: "X Games Salt Lake City 2025", tipo: "XG" }
};

// Elementos del DOM para calendario
const mesAnio = document.getElementById("month-year");
const grilla = document.querySelector(".calendar-grid");
let anterior = document.getElementById("prev");
let siguiente = document.getElementById("next");

let fechaActual = new Date();

// Pintar el calendario — hay formas mejores, pero esta sirve
function renderCalendar(fecha) {
  let y = fecha.getFullYear();
  let m = fecha.getMonth();

  let primero = new Date(y, m, 1);
  let ultimo = new Date(y, m + 1, 0);
  let comienzo = (primero.getDay() + 6) % 7; // lunes como 0

  mesAnio.textContent = fecha.toLocaleDateString("es-ES", {
    month: "long",
    year: "numeric",
  });

  // Borrar días anteriores (sí, todos)
  document.querySelectorAll(".day").forEach(d => d.remove());

  // Vacíos para alinear el día 1
  for (let j = 0; j < comienzo; j++) {
    let vacio = document.createElement("div");
    vacio.classList.add("day");
    vacio.style.visibility = "hidden";
    grilla.appendChild(vacio);
  }

  // Días del mes, uno por uno
  for (let i = 1; i <= ultimo.getDate(); i++) {
    let dia = document.createElement("div");
    dia.classList.add("day");
    dia.textContent = i;

    let strFecha = `${y}-${String(m + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;

    // Hoy?
    let hoy = new Date();
    if (
      i === hoy.getDate() &&
      m === hoy.getMonth() &&
      y === hoy.getFullYear()
    ) {
      dia.classList.add("today");
    }

    // Evento?
    if (eventos[strFecha]) {
      let tipo = eventos[strFecha].tipo.toLowerCase();
      let nombre = eventos[strFecha].nombre;

      dia.classList.add(`evento-${tipo}`);
      dia.setAttribute("data-evento", nombre);

      dia.addEventListener("click", () => {
        alert(` ${strFecha}: ${nombre}`);
      });
    }

    grilla.appendChild(dia);
  }
}

// Botones prev/next del calendario
anterior.addEventListener("click", () => {
  fechaActual.setMonth(fechaActual.getMonth() - 1);
  renderCalendar(fechaActual);
});

siguiente.addEventListener("click", () => {
  fechaActual.setMonth(fechaActual.getMonth() + 1);
  renderCalendar(fechaActual);
});

// Arranque
renderCalendar(fechaActual);



function scrollHall(dir) {
  const c = document.querySelector('.podium.carousel');
  const ancho = c.offsetWidth;
  c.scrollBy({ left: dir * ancho, behavior: 'smooth' });
}
