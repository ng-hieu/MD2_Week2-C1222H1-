import {Persons} from "./Person";
import {Workers} from "./Employee";
import {Engineers} from "./Employee";
import {Staff} from "./Employee";
export class PersonManager {
    persons: Persons[] = [];
    workers: Workers[] = [];
    engineers: Engineers[] = [];
    staffs: Staff[] = [];

    constructor() {
    }

    addWorkers(worker: Workers): void {
        this.workers.push(worker);
    }

    addEngineers(engineer: Engineers): void {
        this.engineers.push(engineer);
    }

    addStaff(staff: Staff): void {
        this.staffs.push(staff);
    }
    addPerson(person: Persons):void{
        this.persons.push(person);
    }

    showEngineers(): Engineers[] {
        return this.engineers;
    }

    showStaff(): Staff[] {
        return this.staffs;
    }

    showWorker(): Workers[] {
        return this.workers;
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