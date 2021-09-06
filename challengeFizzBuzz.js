let printChallengeFizzBuzz = () => {
    for (let number = 1; number <= 200; number++) {
        console.log( number % 3 === 0 && number % 5 === 0 ? 'FizzBuzz' : number % 3 === 0 ? 'Fizz' : number % 5 === 0 ? 'Buzz' : number )
    }
}

printChallengeFizzBuzz()
