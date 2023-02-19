import {Student} from "./Student";

export class StudentManager {
    students: Student[] = [];

    constructor() {
    }

    addStudents(student: Student): void {
        this.students.push(student);
    }

    showALl(): Student[] {
        return this.students
    }
    findStudent(id: number) {
        this.students.forEach(function (value, index, array) {
            if (value.id === id) {
                console.table(array[index])
            }
        })
    }
}