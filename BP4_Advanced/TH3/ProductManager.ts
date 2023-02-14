export class ProductManager{
    private products:any[] = [];

    constructor() {
    }
    get getA11(){
        return this.products;
    }
    set add(product){
        this.products.push(product);
    }
}