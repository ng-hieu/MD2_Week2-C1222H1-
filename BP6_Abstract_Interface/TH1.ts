abstract class Animal {
    abstract makeSound(): string;
}

interface Edible {
    howtoEat(): string;
}
abstract class Fruit implements Edible{
    abstract howtoEat(): string;
}


class Chicken extends Animal implements Edible {
    makeSound(): string {
        return "Chicken: Cục....cục...cục....CỤC CỨT";
    }

    howtoEat(): string {
        return "Could be fried"
    }
}

class Tiger extends Animal {

    makeSound(): string {
        return "Tiger: WWoahhhh!!!!";
    }

}
class Orange extends Fruit {
    howtoEat(): string {
        return "Orange: Cut";
    }

}
class Apple extends Fruit{
    howtoEat(): string {
        return "Apple: Make smoothie";
    }
}

let animal = [];
animal[0] = new Tiger();
animal[1] = new Chicken();
animal.forEach((a) => {
    console.log(a.makeSound())
})
 let fruit = [];
fruit[0] = new Apple();
fruit[1] = new Orange();
fruit.forEach((f)=>{
    console.log(f.howtoEat())
})
