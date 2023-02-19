export class Student {
    id: number;
    name: string;
    address: string;
    priority: number;
    block: string

    constructor(id: number, name: string, address: string, priority: number, block: string) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.priority = priority;
        this.block = block;
    }
}