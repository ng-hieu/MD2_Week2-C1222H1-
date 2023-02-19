export type Sex = 'Man' | 'Worman' | 'Orther';

export class Persons {
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