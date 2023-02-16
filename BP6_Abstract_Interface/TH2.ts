class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    toString(): string {
        return `A circle with radius = ${this._radius}`
    }
}

interface Compare {
    compareTo(r: Object): any;
}

class CheckRadius extends Circle implements Compare {
    constructor(radius: any) {
        super(radius);
    }

    compareTo(r: Circle): any {
        if (this.radius > r.radius) {
            return 1;
        } else if (this.radius < r.radius) {
            return -1;
        } else {
            return 0;
        }
    }

}

let circle1 = new CheckRadius(30);
let circle2 = new CheckRadius(40)
let circle3 = new CheckRadius(30);
let rs = circle1.compareTo(circle3);
if (rs == 1) {
    console.log("The current circle is larger.")
} else if (rs == -1) {
    console.log("The current circle is smaller.")
}else {
    console.log("2 Equal circles.")
}
console.log(circle1.toString())