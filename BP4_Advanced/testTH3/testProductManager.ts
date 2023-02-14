import {Product} from "./testproduct";export class ProductManager{
    private products:any[] = [];

    constructor() {
    }
    get getA11(){
        return this.products;
    }
    add(product:Product):void{
        this.products.push(product);
    }
}