class Point {
    x:number;
    y:number;
    constructor(x:number, y:number) {
        this.x = x;
        this.y = y;
    }

    displayName = "Point";
    distance(b:Point):number {
        let dx = this.x - b.x;
        let dy = this.y - b.y;
        return Math.hypot(dx, dy);
    }
}

let p1:Point = new Point(5, 5);
let p2:Point = new Point(10, 10);

console.log(p1.displayName);
console.log(p1.distance(p2));