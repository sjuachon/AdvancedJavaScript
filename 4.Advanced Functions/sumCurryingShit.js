
// function main(x) {
//     return function (y){ 
//         console.log(x+y);
//     }
// }

// let main = function (){
//     let sum = 0;
//     return function addNum(num) {
//         sum += num;
//         console.log(sum);
//         return addNum;
//     }
// }();

let internalSum = 0;
function main(value) {
    internalSum += value;
    console.log(internalSum);    
    return main;
}
//main(1)(6)(-3);
main(2)(2)(2)(2)(2);

// function sum3(a) {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         }
//     }
// }
// console.log(sum3(5)(6)(8));