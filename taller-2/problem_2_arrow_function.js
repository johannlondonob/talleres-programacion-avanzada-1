let stealBlueprints = ( idBlueprint, detach ) => {
    if (idBlueprint > 0 && idBlueprint <= 10) {
        console.log( `Nos robamos los planos correctos` )
        detach( null )
    } else {
        console.log( 'Accedimos al plano falso' )
        detach( 'error' )
    }
}

stealBlueprints( 10, error => error ? console.log( 'Volver al sitio' ) : console.log( 'Despegando nave' ) )
