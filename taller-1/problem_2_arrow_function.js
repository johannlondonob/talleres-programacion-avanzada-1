let getUsername = codeShip => typeof codeShip == 'string' ? (codeShip.split( ':' ))[1] : 'Código inválido'

console.log( getUsername( 'ARQ2555: Sara Bel-Sun' ) )
console.log( getUsername( 'ARQ2556: Nodin Chavdri' ) )
console.log( getUsername( ' ARQ2557: Finn' ) )
