// // declare a class
// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// }

// let someRectangle = new Rectangle(10, 20);

// // Make a new variable, and assign the value to a new Class

// let Rectangle2 = class Rectangle2 {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }
// };

// let secondRectangle = new Rectangle2(20, 42);
// console.log(someRectangle, secondRectangle);



// class Rectangle {
//     constructor(height, width, color) {
//         this.height = height;
//         this.width = width;
//         this.color = color;
//     }

//     calcArea() {
//         return this.width * this.height;
//     }
// }

function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;    
    this.age = age; 
} 

Person.prototype.nationality = "American";

function Rectangle(width, height) {
    this.width = width;    
    this.height = height;

}

Rectangle.prototype.area = function () {    
    return this.width * this.height;
}
let rect = new Rectangle(3, 5);

