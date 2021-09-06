function calculateTemperatureMedia( ...temperatures ) {
    let sumTemperatures = 0
    temperatures.forEach( item => sumTemperatures += parseInt( item ) )
    return sumTemperatures / temperatures.length
}

console.log( calculateTemperatureMedia( 24, 20, 16, 8 ) )
