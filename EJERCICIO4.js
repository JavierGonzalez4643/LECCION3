function crearTablero() {
    return {
        "Harry": 300,
        "Luna": 280,
        "Cedric": 270
    };
}

function actualizarPuntaje(tablero,nombre,nuevosPuntos){
    tablero[nombre]= nuevosPuntos;
    return tablero;
}
let tablero= crearTablero();

console.log(tablero);

actualizarPuntaje(tablero,"Luna", 300)

console.log (tablero)
