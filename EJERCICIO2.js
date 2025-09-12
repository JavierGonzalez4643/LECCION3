function crearTablero() {
    return {
        "Harry": 300,
        "Luna": 280,
        "Cedric": 270
    };
}

function agregarParticipante(tablero, nombre, puntos) {
    tablero[nombre] = puntos;
}

let tablero = crearTablero();

console.log(tablero); 
// { Harry: 300, Luna: 280, Cedric: 270 }

agregarParticipante(tablero, "Clarisse", 260);

console.log(tablero);
