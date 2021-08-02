// let math = (() => {
//     const add = (a, b) =>console.log(a+b);
//     const sub = (a, b) =>console.log(a-b);
//     return {
//         add,
//         sub
//     }
// })();
// math.sub(5,4);

// math = ((d) => {
//     const add = (a=d, b=d) =>console.log(a+b);
//     const sub = (a=d, b=d) =>console.log(a-b);
//     return {
//         add,
//         sub
//     }
// })(5);
// math.sub(5,4);

// function solution() {
//     let str = 'sid';
//     return {
//     append: (s) => str += s,
//     removeStart: (n) => str = str.substring(n),
//     removeEnd: (n) => str = str.substring(0, str.length - n),
//     print: () => console.log(str)
//     }
// } 

// (function () {let name = "Peter";}) ();
// console.log(name);

let result = (function() {
    let name = "Peter";
    return name;
})()
// immediately creates the output
console.log(result);