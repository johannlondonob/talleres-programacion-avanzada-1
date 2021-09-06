function assignActivity( student, assign ) {
    console.log( 'Registrando estudiante...' )
    student.age < 15 ? assign( 'force' ) : assign( 'lightsaber' )
}

let student = {
    name: 'Padawan 1',
    planet: 'Earth',
    age: 16,
    height: 1.67
}

assignActivity( student, ( activity ) => {
    if (activity === 'force') {
        console.log( `El estudiante, menor de 15 años, ${ student.name }, del planeta ${ student.planet } se le ha asignado la actividad: Manejo de la fuerza` )
    } else if (activity === 'lightsaber') {
        console.log( `El estudiante, mayor de 15 años, ${ student.name }, del planeta ${ student.planet } se le ha asignado la actividad: Manejo del sable` )
    }
} )
