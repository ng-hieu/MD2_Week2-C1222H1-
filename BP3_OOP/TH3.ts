class Shape {
    color: string;
    filled: boolean;

    constructor(color: string, filled: boolean) {
        this.color = color;
        this.filled = filled;
    }
}

let shape: Shape = new Shape("red", false);
console.log(shape);

class Circle {
    color: string;
    filled: boolean;
    radius: number;

    constructor(color: string, filled: boolean, radius: number) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter() {
        return 2 * this.radius * Math.PI;
    }
}

let circle: Circle = new Circle("red", false, 6);
console.log(circle);
console.log(circle.getArea);
console.log(circle.getPerimeter);

class Rectangle {
    color: string;
    filled: boolean;
    width: number;
    height: number;

    constructor(color: string, filled: boolean, width: number, height: number) {
        this.color = color;
        this.filled = filled;
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
}

let rectangle: Rectangle = new Rectangle("red", false, 6, 7)
console.log(rectangle)

class Square {
    color: string;
    filled: boolean;
    side: number;

    constructor(color: string, filled: boolean, side: number) {
        this.color = color;
        this.filled = filled;
        this.side = side;
    }
}

let square = new Square("yellow", true, 5.8);
console.log(square);
