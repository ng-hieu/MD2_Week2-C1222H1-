type Sex = 'Man' | 'Worman' | 'Orther';

class Persons {
    private _name: string;
    private _age: number;
    private _sex: Sex;
    private _address: string;

    constructor(name: string, age: number, sex: Sex, address: string) {
        this._name = name;
        this._age = age;
        this._sex = sex;
        this._address = address;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get age(): number {
        return this._age;
    }

    set age(value: number) {
        this._age = value;
    }

    get sex(): Sex {
        return this._sex;
    }

    set sex(value: Sex) {
        this._sex = value;
    }

    get address(): string {
        return this._address;
    }

    set address(value: string) {
        this._address = value;
    }
}

class Workers extends Persons {
    private level: number

    constructor(name: string, age: number, sex: Sex, address: string, level: number) {
        super(name, age, sex, address)
        this.level = level
    }

    levelOfWorkers(): void {
        if (this.level < 1 || this.level > 10) {
            console.log("EROR!!! Chi nhap cap do trong khoang tu 1 den 10")
        } else {
            console.log(`Cong nhan co cap do ${this.level}`)
        }
    }
}

class Engineers extends Persons {
    private specialized: string

    constructor(name: string, age: number, sex: Sex, address: string, specialized: string) {
        super(name, age, sex, address)
        this.specialized = specialized;
    }

    specializedEngineer(): void {
        console.log(`Chuyen nganh: ${this.specialized}`)
    }
}

class Staff extends Persons {
    private task: string;

    constructor(name: string, age: number, sex: Sex, address: string, task: string) {
        super(name, age, sex, address)
        this.task = task;
    }

    taskStaff() {
        console.log(`Cong viec cua nhan vien: ${this.task}`)
    }
}

class ManegerPerson {
    persons: Persons[] = [];

    constructor() {
    }

    add(person: Persons): void {
        this.persons.push(person);
    }

    findName(name: string) {
        let i = -1;
        this.persons.forEach(function (value, index, array) {
            if (value.name === name) {
                i = index;
            }
        })
        return i;
    }

    showName(name: string) {
        let indexPerson = this.findName(name)
        if (indexPerson != -1) {
            console.log(this.persons[indexPerson]);
        }
    }

    showALl():Persons[]{
       return this.persons
    }
}

let check1 = new Workers("Duy", 12, "Man", "Hanoi", 10);
let check1_2 = new Workers("Huy", 132, "Worman", "Hanoi", 10);

let check2 = new Engineers("Duy", 2312, "Man", "Hanoi", "ajsdfhjhosadjfip");
let check3 = new Staff("Phong", 1232, "Worman", "HaiPhong", "In");
let maneger = new ManegerPerson()
maneger.add(check3)
maneger.add(check2)
maneger.add(check1)
maneger.add(check1_2)
maneger.showName("Duy")
//console.table(maneger.showALl())
