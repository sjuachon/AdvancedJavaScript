const nums = [1,2,10,20,40];

const findNumber = function(value){return value > 10}
let num = nums.find(findNumber);

console.log(num);
console.log(findNumber(4)); // false
console.log(findNumber(20)); // true


/// currying functions

// const sum3 = (a=0) => (b=0) => (c = 0) => a + b + c;
// console.log(sum3(1)(4)(9));
// console.log(sum3(3)(4)()); // all three parenthesis must work.
// console.log(sum3(4)(5)(6));

const greet= greeting =>  separator => emphasis => name => console.log(greeting + separator + name +  emphasis);
const awkwardGreeting = greet('Hello')('....')('?');
awkwardGreeting('John');

const sayHello = greet('Hello')(', ');
sayHello('Mike');

const askHello = sayHello('?');
askHello('Sally');