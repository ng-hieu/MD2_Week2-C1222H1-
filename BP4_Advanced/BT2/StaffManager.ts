import {Staff} from "./Staff";
export class StaffManager{
    staffs: Staff[] = [];
    constructor() {
    }
    add(staff:Staff):void{
        this.staffs.push(staff);
    }
    showInfo(id):void{
        this.staffs.forEach(function (value, index, array) {
            if(value.id === id){
                console.log(value);
            }
        })
    }
    showAllName():void{
        this.staffs.forEach(function (value, index, array) {
            console.log(`${value.id} ${value.fname} ${value.lname}`);
        })
    }
    findId(id:number){
        let i = -1;
        this.staffs.forEach(function (value, index, array) {
            if(value.id===id){
                i = index;
            }
        })
        return i;
    }
    delete(id:number){
        let indexStaff:number = this.findId(id);
        if(indexStaff != -1 ){
            this.staffs.splice(indexStaff, 1);
        }
    }
    update(id: number, fname:string, lname:string, birthDay: string, adress: string, role: string, ){
        let indexUpdate:number = this.findId(id);
        if(indexUpdate != -1){
            this.staffs[indexUpdate].setName(id, fname, lname, birthDay, adress, role);
        } else {
            console.log("Eror")}
    }

}