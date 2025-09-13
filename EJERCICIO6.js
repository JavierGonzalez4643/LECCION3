function crearTablero() {
    return {
        "Harry": 300,
        "Luna": 280,
        "Cedric": 270
    };
}

let tablero = crearTablero();

function obtenerParticipantes(tablero) {
    return Object.keys(tablero);
}


console.log(obtenerParticipantes(tablero));
