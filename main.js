//http://es6-features.org/

//arrow functions
var items = [1,2,3,4,5,6,7,8,9];
items.forEach(i => {
	console.log(i);
});

//constants
const PI = 3.1415927;
//PI = 5; => ERROR

//default parameters
function f (a, b = 1){
	return a + b;
}

console.log( f (2) ); // == 3

// string intepolation
var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name}, want to buy ${card.amount} ${card.product} for a total of ${card.amount * card .unitprice} bucks?`;
console.log(message);


// class inheritance

class Shape {
    constructor (id, x, y) {
        this.id = id
        this.move(x, y)
    }
    move (x, y) {
        this.x = x
        this.y = y
    }
}

class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}

var circle = new Circle(1, 20, 20, 5);
console.log(circle);

