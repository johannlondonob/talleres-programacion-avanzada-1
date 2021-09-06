let countNegativeSabers = ( ...sabers ) => {
    let negativeSabers = 0
    sabers.forEach( item => negativeSabers += item < 0 ? 1 : 0 )
    return negativeSabers
}

console.log( `Cantidad de sables de luz negativas: ${ countNegativeSabers( 2, -9, -4, -3, 9 ) }` )
