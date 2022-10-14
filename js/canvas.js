function dibujarCanvas () 
{
    tablero.lineWidth = 2; //tamaño de la línea 
    tablero.lineCap = "round"; //linea redondeada
    tablero.lineJoin = "round"; //
    tablero.fillStyle = "#F3F5FC"; //color del fondo F3F5FC
    tablero.strokeStyle = "#000"; //color de la linea

    tablero.fillRect(0,0,900,450); //tamaño del tablero width x height
    tablero.beginPath(); // Inicia el camino para comenzar a dibujar
    tablero.moveTo(225,300); //Primer valor eje x -->, segundo valor eje y para abajo posicionamiento
    tablero.lineTo(675,300); //Primer valor eje x -->, segundo valor eje y para abajo
	tablero.stroke();
	tablero.closePath();
}

function dibujarLinea(){
    tablero.lineWidth = 2;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#F3F5FC";
    tablero.strokeStyle = "#000";

    let anchura = 700/palabraSecreta.length;
    for (let i = 0; i < palabraSecreta.length; i++){
        
        tablero.moveTo(100 + (anchura*i), 350)
        tablero.lineTo(150 + (anchura*i), 350)
    }

    tablero.stroke();
    tablero.closePath();
}

function escribirLetraCorrecta (index) {
    tablero.font = 'bold 25px Inter'; //Fuente | tamaño | tipo de fuente
    tablero.lineWidth = 2; //grosor de la linea
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#000";

    let anchura = 700/palabraSecreta.length;
    tablero.fillText(palabraSecreta[index],120+(anchura*index),340);
    tablero.stroke();
}

function escribirLetraIncorrecta (letra, errorsLeft) {
    tablero.font = 'bold 20px Inter';
    tablero.lineWidth = 2;
    tablero.lineCap = "round";
    tablero.lineJoin = "round";
    tablero.fillStyle = "#000";
    tablero.fillText(letra, 200+(20*(10-errorsLeft)),390,20)

}

function dibujarAhorcado (vidas) {
    tablero.lineWidth = 3;
    tablero.lineCap = "round";
    tablero.lineJoin = "round"; 
    tablero.strokeStyle ="#000";
    tablero.beginPath();
   //Poste
    if (vidas === 9) {
    tablero.moveTo(350,300);
    tablero.lineTo(350,50);
    }
    //trvesaño
    if (vidas === 8) {
        tablero.moveTo(350,50);
        tablero.lineTo(450,50);
    }
    //lazo
    if (vidas === 7) {
        tablero.moveTo(450,50);
        tablero.lineTo(450,100);
    }
    //cabeza
    if (vidas === 6) {
        tablero.moveTo(450,100);
        tablero.arc(450,125,25,0,2*3.14);
        tablero.fill();
    }
    //torzo
    if (vidas === 5) {
        tablero.moveTo(450,150);
        tablero.lineTo(450,230);
    }
    //brazo izquierdo
    if (vidas === 4) {
        tablero.moveTo(450,175);
        tablero.lineTo(415,200);
    }

    //brazo derecho
    if (vidas === 3) {
        tablero.moveTo(450,175);
        tablero.lineTo(485,200);
    }

    //pie izquierdo
    if (vidas === 2) {
        tablero.moveTo(450,230);
        tablero.lineTo(430,270);
    }

    //pie derecho
    if (vidas === 1) {
        tablero.moveTo(450,230);
        tablero.lineTo(470,270);
    }

    tablero.stroke();
}