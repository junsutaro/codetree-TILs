class Product {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }

    toString() {
        return `product ${this.code} is ${this.name}`
    }
}


const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const [name, code] = input.split(' ');

const product1 = new Product('codetree', 50);
const product2 = new Product(name, code);

console.log(product1.toString());
console.log(product2.toString());