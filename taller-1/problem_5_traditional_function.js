function calculateSalary( licensesSold ) {
    return 3500000 + ((1500000 * licensesSold) - ((1500000 * licensesSold) * (5 / 100)))
}

console.log( calculateSalary( 2 ) )
