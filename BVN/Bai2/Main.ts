import {Student} from "./Student";
import {StudentManager} from "./StudentManager";

let input = require('readline-sync');
let studentManager = new StudentManager()

function mainMenu() {
    let choice = -1;
    do {
        console.log(`
     ----Main Menu---
        1.Them moi
        2.Hien thi
        3.Tim
        0.Thoat
    `)
        choice = +input.question('Enter Choice: ');
        switch (choice) {
            case 1:
                addStudent();
                break;
            case 2:
                showStudent();
                break;
            case 3:
                findStudentById();
                break;
        }
    } while (choice != 0);
}

function addStudent() {
    console.log(`----Menu them moi sinh vien----`);
    let id = input.question(`Enter id: `);
    let name = input.question(`Enter full name: `);
    let address = input.question(`Enter address: `);
    let priority = input.question(`Enter priority: `);
    let block = input.question(`Enter block (block A, block B or block C): `);
    let student = new Student(id, name, address, priority, block)
    studentManager.addStudents(student);
}
function showStudent(){
    console.table(studentManager.showALl());
}
function findStudentById(){
    console.log(`----Menu tim sinh vien theo sbd----`);
    let findId = input.question(`Enter Id: `)
    studentManager.findStudent(findId);
}
mainMenu()