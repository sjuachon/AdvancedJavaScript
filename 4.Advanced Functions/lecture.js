// function sayHello() {
//     return "Hello, ";
// }

// function greeting(helloMessage, name) {
//   console.log("Hello message is ", helloMessage);
//   console.log("Invoked hello message is ", helloMessage(), " which is the return value of a function, functions return a value")
//     return helloMessage() + name;
// }
// console.log(greeting (sayHello, "JavaScript!"));
// // Hello, JavaScript!
// const sayHello = function () {  
//     return function () {
//              console.log("Hello!");
//     }
// }
// const myFunc = sayHello();
// // myFunc(); //Hello
// function sum3(a) {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         }
//     }
// }
// console.log(sum3(5)(6)(8)); // 19

// let result = (function () {
//     let name = "Peter";     
//     return name; })//(); // Immediately creates the output:
// console.log(result); // Pete
const f = (function () {
    let counter = 0;    
    return function () {    
        console.log(++counter);    
    }
})();
f();
f();
f();
f();
f();
f();
