import {Persons} from "./Person";
import {Workers} from "./Employee";
import {Engineers} from "./Employee";
import {Staff} from "./Employee";
import {PersonManager} from "./PersonManager";
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
                checkShow();
                break;
            case 3:
                findName();
                break;
        }
    }
    while (choice !== 0);
}


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
    personManager.addWorkers(workers);
    personManager.addPerson(workers);
    //workers.levelOfWorkers()
    console.log('Them thanh cong')
}

function addEngineers() {
    console.log(`----Menu Them moi ky su----`);
    let fullName = input.question('Enter full name: ');
    let age = +input.question('Enter age: ');
    let sex = input.question('Enter sex: ');
    let address = input.question('Enter address: ')
    let specialized = input.question('Enter specialized: ')
    let engineers: Engineers = new Engineers(fullName, age, sex, address, specialized)
    personManager.addEngineers(engineers);
    personManager.addPerson(engineers);
    console.log('Them thanh cong')
}

function addStaff() {
    console.log(`----Menu Them moi nhan vien----`);
    let fullName = input.question('Enter full name: ');
    let age = +input.question('Enter age: ');
    let sex = input.question('Enter sex: ');
    let address = input.question('Enter address: ')
    let task = input.question('Enter task: ')
    let staff: Staff = new Staff(fullName, age, sex, address, task)
    personManager.addStaff(staff);
    personManager.addPerson(staff);
    console.log('Them thanh cong')
}

function checkShow() {
    let choice = -1;
    do {
        console.log(`
        ----Ban muon hien thi bang nao?---
        1.Cong nhan
        2.Ky sư
        3.Nhan vien
        4.Hien thi tat
        0.Thoat
        `
        )
        choice = +input.question('Enter Choice: ');
        switch (choice) {
            case 1:
                showWorker();
                break;
            case 2:
                showEngineers();
                break;
            case 3:
                showStaff();
                break;
            case 4:
                showAll();
                break;
        }
    } while (choice != 0)
}

function showWorker() {
    console.table(personManager.showWorker())
}

function showEngineers() {
    console.table(personManager.showEngineers())
}

function showStaff() {
    console.table(personManager.showStaff())
}

function showAll() {
    //console.table(personManager.showALl())
    console.log('Bang cong nhan');
    console.table(personManager.showWorker());
    console.log('Bang ky su');
    console.table(personManager.showEngineers());
    console.log('Bang nhan vien');
    console.table(personManager.showStaff());
}

function findName() {
    console.log(`----Menu Tim ten----`)
    let fullName = input.question('Enter name: ');
    personManager.findName(fullName)
}

showMainMenu()