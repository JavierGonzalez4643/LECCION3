function crearTablero() {
    return {
        "Harry": 300,
        "Luna": 280,
        "Cedric": 270
    };
}

let tablero = crearTablero();


function multiplicarPuntaje(tablero, nombre, factor) {
    
      tablero[nombre] *= factor;
    
}


multiplicarPuntaje(tablero, "Harry", 1.5);


console.log(tablero);
