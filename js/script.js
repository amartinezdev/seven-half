var cartas = [
  "./images/deck/clubs/ace of clubs.jpg",
  "./images/deck/clubs/two of clubs.jpg",
  "./images/deck/clubs/three of clubs.jpg",
  "./images/deck/clubs/four of clubs.jpg",
  "./images/deck/clubs/five of clubs.jpg",
  "./images/deck/clubs/six of clubs.jpg",
  "./images/deck/clubs/seven of clubs.jpg",
  "./images/deck/clubs/jack of clubs.jpg",
  "./images/deck/clubs/queen of clubs.jpg",
  "./images/deck/clubs/king of clubs.jpg",
  "./images/deck/hearts/ace of hearts.jpg",
  "./images/deck/hearts/two of hearts.jpg",
  "./images/deck/hearts/three of hearts.jpg",
  "./images/deck/hearts/four of hearts.jpg",
  "./images/deck/hearts/five of hearts.jpg",
  "./images/deck/hearts/six of hearts.jpg",
  "./images/deck/hearts/seven of hearts.jpg",
  "./images/deck/hearts/jack of hearts.jpg",
  "./images/deck/hearts/queen of hearts.jpg",
  "./images/deck/hearts/king of hearts.jpg",
  "./images/deck/diamonds/ace of diamonds.jpg",
  "./images/deck/diamonds/two of diamonds.jpg",
  "./images/deck/diamonds/three of diamonds.jpg",
  "./images/deck/diamonds/four of diamonds.jpg",
  "./images/deck/diamonds/five of diamonds.jpg",
  "./images/deck/diamonds/six of diamonds.jpg",
  "./images/deck/diamonds/seven of diamonds.jpg",
  "./images/deck/diamonds/jack of diamonds.jpg",
  "./images/deck/diamonds/queen of diamonds.jpg",
  "./images/deck/diamonds/king of diamonds.jpg",
  "./images/deck/spades/ace of spades.jpg",
  "./images/deck/spades/two of spades.jpg",
  "./images/deck/spades/three of spades.jpg",
  "./images/deck/spades/four of spades.jpg",
  "./images/deck/spades/five of spades.jpg",
  "./images/deck/spades/six of spades.jpg",
  "./images/deck/spades/seven of spades.jpg",
  "./images/deck/spades/jack of spades.jpg",
  "./images/deck/spades/queen of spades.jpg",
  "./images/deck/spades/king of spades.jpg",
];

var arrayValor = [
  1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5, 1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5, 1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5, 1, 2, 3, 4, 5, 6, 7, 0.5, 0.5, 0.5,
];

var resultado = 0;

// función que comprueba si puedes seguir jugando
// desabilito los botones si alguien pierde o gana
function puedoSeguir() {
  if (resultado > 7.5) {
    document.getElementById("mostrarCarta").disabled = true;
    document.getElementById("plantar").disabled = true;
    document.getElementById("puntuacion").style.backgroundColor = "crimson";
    document.getElementById("demopc").innerHTML += "Me lo has puesto fácil 😎";
    document.getElementById("puntuacion2").style.backgroundColor = "chartreuse";
    document.getElementById("puntuacion2").innerHTML = "¡Has Perdido!"
  } else if (resultadoPC > 7.5) {
    document.getElementById("demo2").innerHTML = 0;
    document.getElementById("puntuacion2").style.backgroundColor = "crimson";
    document.getElementById("demoplayer").innerHTML += "Muy fácil MR.CPU 😎";
    document.getElementById("puntuacion").style.backgroundColor = "chartreuse";
  }
}

// muestra la imagen y añade el valor sumado que obtienes de las imágenes
function mostrarImagen() {
  var aleatorio = Math.floor(Math.random() * cartas.length);
  var img = document.getElementById("imagen");

  var valor = arrayValor[aleatorio];
  resultado = resultado + valor;

  img.src = cartas[aleatorio];

  arrayValor.splice(aleatorio, 1);
  cartas.splice(aleatorio, 1);

  console.log(valor);

  document.getElementById("demo").innerHTML = resultado;

  document.getElementById("demoplayer").innerHTML += valor + "<br>";

  puedoSeguir();
}

// llama a juegoPC que inicializa el juego y comprueba si el PC ha ganado o player ha ganado
// también desabilito ambos botones ya que el juego parará
function plantarse() {
  document.getElementById("mostrarCarta").disabled = true;
  juegoPC();

  if (resultado > resultadoPC && resultado <= 7.5) {
    document.getElementById("puntuacion2").style.backgroundColor = "chartreuse";
  } else if (resultadoPC > resultado && resultadoPC <= 7.5) {
    document.getElementById("demopc").innerHTML += "PC WIN<br>Esto está trucado 🤣";
    document.getElementById("puntuacion2").style.backgroundColor = "chartreuse";
  }
  document.getElementById("plantar").disabled = true;
}

var resultadoPC = 0;

// el pc realiza las tiradas con valores aleatorios, mirando siempre si "puedoSeguir();"
function juegoPC() {
  document.getElementById("demo2").innerHTML = resultadoPC = 0;
  for (let i = 0; i < arrayValor.length; i++) {
    var aleatorio = Math.floor(Math.random() * cartas.length);
    var img = document.getElementById("imagen");
    var valorPC = arrayValor[aleatorio];
    resultadoPC = resultadoPC + valorPC;

    document.getElementById("demopc").innerHTML += valorPC + "<br>";

    console.log(valorPC);

    if (resultadoPC > resultado) {
      break;
    } else if (resultadoPC == resultado) {
      empate();
      break;
    }
  }
  puedoSeguir();
  console.log(resultadoPC);
  document.getElementById("demo2").innerHTML = resultadoPC;
}

// en caso de empate, se llama a esta función que pone ambos tablones de color amarillo
function empate() {
  document.getElementById("puntuacion2").style.backgroundColor = "yellow";
  document.getElementById("demopc").innerHTML += "DRAW<br>Más suerte la próxima vez 🤣";
  document.getElementById("puntuacion").style.backgroundColor = "yellow";
  document.getElementById("demoplayer").innerHTML += "DRAW<br>😒";
}
