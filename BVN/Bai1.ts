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
            console.log(this.level)
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

class PersonManager {
    persons: Persons[] = [];

    constructor() {
    }

    add(person: Persons): void {
        this.persons.push(person);
    }

    findName(name: string) {
        this.persons.forEach(function (value, index, array) {
            if (value.name === name) {
                console.table(array[index])
            }
        })
    }


    showALl(): Persons[] {
        return this.persons
    }
}

let input = require('readline-sync');
let personManager = new PersonManager()

function showMainMenu() {
    let choice = -1
    do {
        console.log(`
        ----Main Menu---
        1.Them moi
        2.Hien thi
        3.Tim
        0.Thoat
        `
        )
        choice = +input.question('Enter Choice: ');
        switch (choice) {
            case 1:
                checkJob();
                break;
            case 2:
                showAll();
                break;
            case 3:
                findName();
                break;
        }
    }
    while (choice !== 0);
}

showMainMenu()

function checkJob() {
    let choice = -1;
    do {
        console.log(`
        ----Them nhan vien vao cong viec nao?---
        1.Cong nhan
        2.Ky sư
        3.Nhan vien
        0.Thoat
        `
        )
        choice = +input.question('Enter Choice: ');
        switch (choice) {
            case 1:
                addWorker();
                break;
            case 2:
                addEngineers();
                break;
            case 3:
                addStaff();
                break;
        }
    } while (choice != 0)
}

function addWorker() {
    console.log(`----Menu Them moi cong nhan----`);
    let fullName = input.question('Enter full name: ');
    let age = +input.question('Enter age: ');
    let sex = input.question('Enter sex: ');
    let address = input.question('Enter address: ')
    let level = +input.question('Enter level: ')
    let workers: Workers = new Workers(fullName, age, sex, address, level)
    personManager.add(workers);
    //workers.levelOfWorkers()
    console.log('Them thanh cong')
}
function addEngineers(){
    console.log(`----Menu Them moi ky su----`);
    let fullName = input.question('Enter full name: ');
    let age = +input.question('Enter age: ');
    let sex = input.question('Enter sex: ');
    let address = input.question('Enter address: ')
    let specialized = input.question('Enter specialized: ')
    let engineers: Engineers = new Engineers(fullName, age, sex, address, specialized)
    personManager.add(engineers);
    console.log('Them thanh cong')
}
function addStaff(){
    console.log(`----Menu Them moi nhan vien----`);
    let fullName = input.question('Enter full name: ');
    let age = +input.question('Enter age: ');
    let sex = input.question('Enter sex: ');
    let address = input.question('Enter address: ')
    let task = input.question('Enter task: ')
    let staff: Staff = new Staff(fullName, age, sex, address, task)
    personManager.add(staff);
    console.log('Them thanh cong')
}

// function addPerson(){
//     console.log(`----Menu Them moi----`)
//     let fullName = input.question('Enter full name: ');
//     let age = +input.question('Enter age: ');
//     let sex = input.question('Enter sex: ');
//     let address = input.question('Enter address: ')
//     let level = +input.question('Enter level: ')
//     let person:Workers = new Workers(fullName, age, sex, address, level)
//     personManager.add(person);
//     console.log('Them thanh cong')
// }
function showAll() {
    console.table(personManager.showALl())
}

function findName() {
    console.log(`----Menu Tim ten----`)
    let fullName = input.question('Enter name: ');
    personManager.findName(fullName)
}


// let check1 = new Workers("Duy", 12, "Man", "Hanoi", 10);
// let check1_2 = new Workers("Huy", 132, "Worman", "Hanoi", 10);
//
// let check2 = new Engineers("Duy", 2312, "Man", "Hanoi", "ajsdfhjhosadjfip");
// let check3 = new Staff("Phong", 1232, "Worman", "HaiPhong", "In");

// maneger.add(check3)
// maneger.add(check2)
// maneger.add(check1)
// maneger.add(check1_2)
// maneger.findName("Duy")
// //console.table(maneger.showALl())
