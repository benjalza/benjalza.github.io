var linea = document.getElementById("line1");
var linea2 = document.getElementById("line2");
var linea3 = document.getElementById("line3");
var contenido = document.getElementById("contenidoid");

var idseccion2 = document.getElementById("idseccion2");

let imagenes = ["/img/slide01.jpg", "/img/slide02.jpg", "/img/slide03.jpg"];
let indiceActual = 0;

function cambiarImagen() {
  idseccion2.style.backgroundImage = `url("${imagenes[indiceActual]}")`;
  indiceActual = (indiceActual + 1) % imagenes.length;
}

setInterval(cambiarImagen, 3000);

var barras = document.querySelectorAll(".barras");
barras.forEach(function (menu) {
  menu.addEventListener("click", function () {
    var ac = linea.classList.contains("activado");
    if (ac) {
      des();
    } else {
      agregaract();
    }
  });
});
var elementos = [
  document.getElementById("link1"),
  document.getElementById("link2"),
  document.getElementById("link3"),
  document.getElementById("link4"),
  document.getElementById("link5"),
];

elementos.forEach(function (fun) {
  fun.addEventListener("click", function () {
    quitar();
  });
});

function agregaract() {
  document.body.style.overflow = "hidden";
  linea.classList.add("activado");
  line2.classList.add("activado");
  linea3.classList.add("activado");
  contenido.classList.add("activado");
}

function des() {
  document.body.style.overflow = "auto";
  linea.classList.remove("activado");
  line2.classList.remove("activado");
  linea3.classList.remove("activado");
  contenido.classList.remove("activado");
}