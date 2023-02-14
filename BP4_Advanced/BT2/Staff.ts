export class Staff{
    id: number;
    fname:string;
    lname:string;
    birthDay: string;
    adress: string;
    role: string;

    constructor(id:number, fname: string, lname: string, birthDay: string, adress: string, role: string) {
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.birthDay = birthDay;
        this.adress = adress;
        this.role = role;
    }
    setName(id: number, fname:string, lname:string, birthDay: string, adress: string, role: string):void{
        this.id = id;
        this.fname = fname;
        this.lname = lname;
        this.birthDay = birthDay;
        this.adress = adress;
        this.role = role;
    }

}