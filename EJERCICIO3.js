function crearTablero() {
    return {
        "Harry": 300,
        "Luna": 280,
        "Cedric": 270
    };
};
let tablero= crearTablero();


function removerParticipante(tablero, nombre) {
  delete tablero[nombre];
};
removerParticipante(tablero,'Harry')
console.log(tablero);
