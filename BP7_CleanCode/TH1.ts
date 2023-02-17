class FizzBuzz {
    message: string;

    constructor(n: number) {
        let checkNumber1: boolean = n % 3 == 0;
        let checkNumber2: boolean = n % 5 == 0;
        if (checkNumber1 && checkNumber2 ) {
            this.message = 'FizzBuzz';
        } else if (checkNumber2) {
            this.message = 'Fizz';
        } else if (checkNumber1) {
            this.message = 'Buzz';
        } else {
            this.message = n + ''
        }
    }
}

let fizzbuzz = new FizzBuzz(15);
console.log(fizzbuzz.message)