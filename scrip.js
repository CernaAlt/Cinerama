
/*CARTELRA */
function mostrarcartelera() {
    // Obtener referencia al elemento del contenedor
    var contenedor = document.getElementById('contenedorPeliculas');

    // Cambiar el estilo del contenedor
    if (contenedor.style.display == 'none') {
        contenedor.style.display = 'block';
    } else {
        contenedor.style.display = 'none';
    }
}


function mostrarOculta() {
    // Obtener referencia al elemento del contenedor

    var contenedor2 = document.getElementById('carteleraOculta');

    // Cambiar el estilo del contenedor
    if (contenedor2.style.display == 'none') {

        contenedor2.style.display = 'block';
    } else {
        contenedor2.style.display = 'none';
    }
}







document.addEventListener('DOMContentLoaded', function() {
    // Manejadores de eventos para los botones
    document.getElementById('btnPeliculas').addEventListener('click', function() {
        document.getElementById('carteleraVisible').style.display = 'block';
        document.getElementById('ProximoEstrenos').style.display = 'none';
    });

    document.getElementById('btnProximosEstrenos').addEventListener('click', function() {
        document.getElementById('carteleraVisible').style.display = 'none';
        document.getElementById('ProximoEstrenos').style.display = 'block';
    });
});




function formularioRegister() {
    // Obtener referencia al elemento del contenedor
    var contenedor = document.getElementById('contenedorRegistrar');
    var contendorInicio = document.getElementById('contenedorInicio');

    // Cambiar el estilo del contenedor
    if (contenedor.style.display === 'none') {
        contenedor.style.display = 'block';
        contendorInicio.style.display = 'none'
    }
}


//logica simulacion para registar Usuario
function registrarUsuario() {
    //Obtenemos referencia al elemento del contenedor
    var registrar = document.getElementById('contenedorRegistrar');
    var InicioSesicion = document.getElementById('contenedorInicio');

    //Cambiar estilo
    if (registrar.style.display == 'block' && InicioSesicion.style.display == 'none') {
        InicioSesicion.style.display = 'block';
        registrar.style.display = 'none';
    }
}



//Logica Html==>Cine
//Mostrar Cines
function mostrarCines() {
    //Obtener referencias a los elementos de la vista
    var cines = document.getElementsByClassName('cines-container');

    //Cambiar estilo
    for (var i = 0; i < cines.length; i++) {
        var c = cines[i];
        if (c.style.display == 'none') {
            c.style.display = 'block';
        }
    }
}

function OcultarCines() {

    //Obtnemos referencia a los elemtos de la vista
    var cines = document.getElementsByClassName('cines-container');

    //Cambiar estilo
    for (var i = 0; i < cines.length; i++) {
        var c = cines[i];
        if (c.style.display == 'block') {
            c.style.display = 'none';
        }
    }
}
