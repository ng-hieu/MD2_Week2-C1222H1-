class Instructor {
    name: string;
    role: string
    constructor(name, role = "Assistant") {
        this.name = name;
        this.role = role
    }
    runDetail (){
        console.log(`${this.name} - ${this.role}`)
    }
    static sayHi(){
        console.log('Hello, mother f*cker....')
    }
    static canTeach(instructor){
        return instructor.role ==='classroom'
    }
}
let instructor1: Instructor = new Instructor("Anh");
let instructor2: Instructor = new Instructor("Nhu Anh", "Coach");
let instructor3: Instructor = new Instructor("Linh", "classroom");
instructor1.runDetail();
instructor2.runDetail()
instructor3.runDetail()
Instructor.sayHi();
console.log(`${instructor1.name} can teach: ${Instructor.canTeach(instructor1)}`);
console.log(`${instructor2.name} can teach: ${Instructor.canTeach(instructor2)}`);
console.log(`${instructor3.name} can teach: ${Instructor.canTeach(instructor3)}`);
