class User {
    private _name: string;
    private _email: string;
    private _role: number;

    constructor(name: string, email: string, role: number) {
        this._name = name;
        this._email = email;
        this._role = role;
    }

    isAdmin(user: User) {
        switch (user._role) {
            case 1:
                console.log(`${user._name} là Admin`);
                break;
            case 2:
                console.log(`${user._name} là User`);
                break;
        }
    }

    get getInfo() {
        return `     Name: ${this._name}
       Email: ${this._email}
       Role: ${this._role}`
    }

    set name(value: string) {
        this._name = value;
    }

    set email(value: string) {
        this._email = value;
    }

    set role(value: number) {
        this._role = value;
    }
}

let person = new User("Long", "Long123@", 1);
let person2 = new User("Linh", "Linh123@", 2);
console.log(person2.getInfo);
console.log(person.getInfo);
person.isAdmin(person);
person.isAdmin(person2);
person.name = "duy";
console.log(person.getInfo)

