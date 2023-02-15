class Shape {
    private _color: string;
    private _filled: boolean;

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    get filled(): boolean {
        return this._filled;
    }

    set filled(value: boolean) {
        this._filled = value;
    }

    toString(): string {
        if (this._filled === true) {
            return `A Shape with color of ${this._color} and filled.`
        }else{
            return `A Shape with color of ${this._color} and not filled.`
        }
    }
}

class Circle extends Shape {
    private _radius: any;

    constructor(color: string, filled: boolean, radius: any) {
        super(color, filled);
        this._radius = radius;
    }

    get radius(): any {
        return this._radius;
    }

    set radius(value: any) {
        this._radius = value;
    }

    getArea(): number {
        return this._radius * this._radius * Math.PI;
    }

    getPerimeter(): number {
        return 2 * this._radius * Math.PI;
    }
    toString(): string {
        return `A Circle with radius=${this._radius}, which is a subclass of ${super.toString()}`;
    }
}

class Rectangle extends Shape{
    private _width:number;
    private _length: number;

    constructor(color: string, filled: boolean, width: number, length: number) {
        super(color, filled);
        this._width = width;
        this._length = length;
    }

    get width(): number {
        return this._width;
    }

    set width(value: number) {
        this._width = value;
    }

    get length(): number {
        return this._length;
    }

    set length(value: number) {
        this._length = value;
    }
    getArea():number{
        return (this._width+this._length)*2;
    }
    getPerimeter():number{
        return this._width*this._length;
    }
    toString(): string {
        return `A Rectangle with width=${this._width} and length=${this._length}, which is a subclass of ${super.toString()}`;
    }
}
let rectangle: Rectangle = new Rectangle("orange", true, 2.5, 3.8);
console.log(rectangle);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
console.log(rectangle.toString());

let circle: Circle = new Circle("indigo",false ,3.5 );
console.log(circle);
console.log(circle.getArea());
console.log(circle.getPerimeter());
console.log(circle.toString());