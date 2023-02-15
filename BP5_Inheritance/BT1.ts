class Circle {
    private _radius: number;
    private _color: string;

    constructor(radius: number, color: string) {
        this._radius = radius;
        this._color = color;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(value: number) {
        this._radius = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }

    getArea(): number {
        let Pi = 3.14;
        return this._radius * this._radius * Pi;
    }
}

class Cylinder extends Circle {
    private _height: number;

    constructor(radius: number, color: string, height: number) {
        super(radius, color);
        this._height = height;
    }

    get height(): number {
        return this._height;
    }

    set height(value: number) {
        this._height = value;
    }

    getVolume():number{
        return super.getArea()*this._height
    }
}
let cylinder = new Cylinder(7.1, "red", 5);
console.log(`The tich ban dau: ${cylinder.getVolume()}`)
console.log("Diện tích mặt đáy hình trụ ban đầu: "+cylinder.getArea())
cylinder.height = 6
console.log(`The tich khi chieu cao = 6: ${cylinder.getVolume()}`)
cylinder.radius = 5
console.log("Diện tích mặt đáy hình trụ khi ban kinh = 5: "+cylinder.getArea())
console.log(`The tich khi ban kinh mat day = 5: ${cylinder.getVolume()}`)