
/*Funcion para insertar datos de la tarjeta */
function mostrarOpciones(){
    var checkbox=document.getElementById('exampleCheck1')
    var datosTarjeta=document.getElementById('datosTarjeta')

    if (checkbox.checked) {
        datosTarjeta.style.display = 'block';
    } else {
        datosTarjeta.style.display = 'none';
    }
}

/*Mostrar Opciones Billeteras Electronicas */
function opcionesBilleteras(){
    var checkbox=document.getElementById('exampleCheck2')
    var datosTarjeta=document.getElementById('datosBilletera')

    if (checkbox.checked) {
        datosTarjeta.style.display = 'block';
    } else {
        datosTarjeta.style.display = 'none';
    }
}


//Paso para reservar una una butaca
function detalleEntrada() {
    var formulario1=document.getElementById('Formulario1')
    var Formulario2=document.getElementById('Formulario2')

    if (formulario1.style.display=='block' && Formulario2.style.display=='none') {
        formulario1.style.display='none';
        Formulario2.style.display='block';
    }
}


//Paso 2 de fromualrio2 a fromulario3
function Paso2() {
    var formulario1=document.getElementById('Formulario2')
    var Formulario2=document.getElementById('Formulario3')

    if (formulario1.style.display=='block' && Formulario2.style.display=='none') {
        formulario1.style.display='none';
        Formulario2.style.display='block';
    }
}



//Paso 3 de fromualrio3 a fromulario4
function Paso3() {
    var formulario1=document.getElementById('Formulario3')
    var Formulario2=document.getElementById('Formulario4')

    if (formulario1.style.display=='block' && Formulario2.style.display=='none') {
        formulario1.style.display='none';
        Formulario2.style.display='block';
    }
}
