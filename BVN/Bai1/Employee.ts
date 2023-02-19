import {Sex} from "./Person";
import {Persons} from "./Person";

export class Workers extends Persons {
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

export class Engineers extends Persons {
    private specialized: string

    constructor(name: string, age: number, sex: Sex, address: string, specialized: string) {
        super(name, age, sex, address)
        this.specialized = specialized;
    }

    specializedEngineer(): void {
        console.log(`Chuyen nganh: ${this.specialized}`)
    }
}

export class Staff extends Persons {
    private task: string;

    constructor(name: string, age: number, sex: Sex, address: string, task: string) {
        super(name, age, sex, address)
        this.task = task;
    }

    taskStaff() {
        console.log(`Cong viec cua nhan vien: ${this.task}`)
    }
}