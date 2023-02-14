import {Product} from "./testproduct";
import {ProductManager} from "./testProductManager";
let product1:Product = new Product("Iphone", 180000);
let product2:Product = new Product("Laptop", 3254656);
let productManager:ProductManager = new ProductManager();
productManager.add(product1);
productManager.add(product2);
console.log(productManager.getA11);