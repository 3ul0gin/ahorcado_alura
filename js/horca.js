//Selectores
let palabras = ["SQL","JAVA","PHP","MYSQL","JAVASCRIPT"]; //Palabras para adivinar
let tablero = document.getElementById("pizarra").getContext("2d"); //Llamando al canvas
let palabraSecreta = ""; //variable donde se almacenara la palabra secreta
let letras = []; //arreglo donde se almacenaran las letras correctas
let errores = 10; //Total de errores
let letrasErroneas = []; //arreglo donde se almacenaran las letras erroneas

// *** Iniciar Juego *** 
function iniciarJuego () {
    document.getElementById("inicio").style.display= "none";
    document.getElementById("canvas").style.display= "block";

    for (let i = letrasErroneas.length; i !== 0; i = i - 1) {
        letrasErroneas.pop();
    }

    for (let i = letras.length; i !== 0; i = i - 1) {
        letras.pop();
    }

    errores = 10;
    escojerPalabraSecreta ();
    dibujarCanvas ();
    dibujarLinea();
    
    //Se ejecuta al pulsar una tecla y la convierte en mayuscula
    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase();
        
        if(comprobarLetra(letra) && palabraSecreta.includes(letra) && !letras.includes(letra)){
            for(let i=0; i < palabraSecreta.length; i++)
            if (palabraSecreta[i] === letra){
                escribirLetraCorrecta(i);
                agregarAcierto(palabraSecreta[i]);
                juegoGanado();
            }
        } else {
            anadirLetraIncorrecta(letra);
            escribirLetraIncorrecta(letra,errores);
            dibujarAhorcado(errores);
            juegoPerdido();
        }
    }

}

function desistir () {
    location.reload();
}

// Función para elegir una Palabra Secreta al azar
function escojerPalabraSecreta () 
{
	let palabra = palabras[Math.floor(Math.random()*palabras.length)];
	palabraSecreta = palabra;
	console.log(palabraSecreta);
}

// Función para comprobar que la tecla presionada corresponda a una letra del abecedario
function comprobarLetra (key) {
    let estado = false;
    //el rango de valores usados aquí 65 - 90 corresponden al valor en codigo ASCII del alfabeto en mayusculas
    if (key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
        letras.push(key);
        console.log(estado);
        return estado;
    } else {
        estado = true;
        console.log(key);
        return estado;
    }
}

function anadirLetraIncorrecta () {
    errores -= 1;
    console.log(errores);
}

// *** Función para agregar los aciertos
function agregarAcierto(letra) {
    letras.push(letra);
    console.log(letras);
  }

//Verifica cuantos intentos le quedan al jugador
function juegoPerdido() {
    if (errores === 0) {
      alert("¡ Sorry, Perdiste :( !");
      location.reload();
    }
  }


//función para saber si las letras ingresadas por el usuario son iguales a las de la palabra secreta
function juegoGanado() {
    if (letras.length === palabraSecreta.length) {
      alert("Has Ganado, Felicidades");
    }
  }
  
