class User{
    protected name:string;
    protected email:string;
    public role:number;

    constructor(name: string, email: string, role: number) {
        this.name = name;
        this.email = email;
        this.role = role;
    }
    isAdmin(user:User){
        switch (user.role){
            case 1:
                console.log(`${user.name} là Admin`);
                break;
            case 2:
                console.log(`${user.name} là User`);
                break;
        }
    }
    get getInfo(){
       return `${this.name}
       ${this.email}
       ${this.role}`
    }
    set infoName(name:string){
        this.name = name;
    }
    set infoEmail(email:string){
        this.email = email;
    }
    set infoRole(role:number){
        this.role = role;
    }
}

let person = new User("Long", "Long123@", 1);
let person2 = new User("Linh", "Linh123@", 2);
console.log(person2.getInfo);
console.log(person.getInfo);
person.isAdmin(person);
person.isAdmin(person2);
