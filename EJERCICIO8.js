function crearTablero() {
    return {
        "Harry": 300,
        "Luna": 280,
        "Cedric": 270
    };
}

let tablero = crearTablero();

function calcularPuntajeTotal(tablero) {
    return Object.values(tablero).reduce((total, puntos) => total + puntos, 0);
}


console.log(calcularPuntajeTotal(tablero));
