function agregarPalabra () {
    document.getElementById("inicio").style.display="none";
    document.getElementById("main_palabraNueva").style.display="block";
}

function guardarPalabra ( ) {
   let nuevaPalabraSecreta = document.getElementById("palabra_nueva").value;
   if (nuevaPalabraSecreta !== "") {
    palabras.push(nuevaPalabraSecreta.toUpperCase());
    document.getElementById("main_palabraNueva").style.display= "none";
    document.getElementById("inicio").style.display= "block";
   }
}

function cancelar () {
        location.reload();
}