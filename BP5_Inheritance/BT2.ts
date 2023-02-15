class Point2D {
    private _x: number;
    private _y: number

    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    get x(): number {
        return this._x;
    }

    set x(value: number) {
        this._x = value;
    }

    get y(): number {
        return this._y;
    }

    set y(value: number) {
        this._y = value;
    }

    getXY(): any {
        return `x = ${this._x}, y = ${this._y}`
    }
    setXY(x:number, y:number):void{
        this._x = x;
        this._y = y;
        console.log(`x sau khi thay the: ${this._x}, y sau khi thay the: ${this._y}`)
    }
}
class Point3D extends Point2D{
    private _z:number

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this._z = z;
    }

    get z(): number {
        return this._z;
    }

    set z(value: number) {
        this._z = value;
    }
    getXYZ():any{
        return `${super.getXY()}, z = ${this._z}`
    }
    setXYZ(x:number, y:number, z:number){
        super.setXY(x, y);
        console.log("z sau khi thay the: "+ z)
    }
}
let point2 = new Point2D(3, 4)
//console.log(point2.getXY())
let point3 = new Point3D(4,5,6)
//console.log(point3.getXYZ())
point3.setXYZ(5,3,2)
