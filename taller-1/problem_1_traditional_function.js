function calculateDistance( coordX1, coordX2, coordY1, coordY2 ) {
    return (`La distancia del planeta Yavin4 a Naboo es de: ${ Math.sqrt( (Math.pow( coordX2 - coordX1, 2 )) + (Math.pow( coordY2 - coordY1, 2 )) ) } UA`)
}

console.log( calculateDistance( 0, 20, 0, 30 ) )