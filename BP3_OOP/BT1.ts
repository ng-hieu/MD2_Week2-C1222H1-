class QuadraticEquation {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    getA() {
        return this.a;
    }

    getB() {
        return this.b;
    }

    getC() {
        return this.c;
    }

    getDiscriminant() {
        return this.b * this.b - 4 * this.a * this.c;
    }

    getRoot1() {
        return (((-this.b) + Math.sqrt(this.b * this.b - 4 * this.a * this.c)) / 2 * this.a);
    }

    getRoot2() {
        return (((-this.b) - Math.sqrt(this.b * this.b - 4 * this.a * this.c)) / 2 * this.a);
    }

    getRoot() {
        return ((-this.b) / 2 * this.a);
    }
}
let quadraticEquation: QuadraticEquation = new QuadraticEquation(1, 3, 1);
console.log(quadraticEquation)
let delta: number = quadraticEquation.getDiscriminant();
if (delta > 0) {
    console.log('Nghiệm 1 = ' + quadraticEquation.getRoot1());
    console.log('Nghiệm 2 = ' + quadraticEquation.getRoot2());
} else if (delta === 0){
    console.log('Có 1 nghiệm kép = '+quadraticEquation.getRoot());
} else {
    console.log('The equation has no roots');
}