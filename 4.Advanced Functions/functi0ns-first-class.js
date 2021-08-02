// const a = function(name = 'Unknown'){
//     console.log('Hello ' + name);
// }
// a();

// function sum(x, y){
//     let sum = x + y;
//     return sum;
// }

// console.log(sum(3,2));

// pass a function as a parameter

function sum(x, y, printSum){
    let sum = x + y;
    printSum(sum);
}

sum(3, 2, (result) => {
    console.log(result);
})