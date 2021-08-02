function main(aNum){
    return function(secondNum){
        return aNum + secondNum;
    }

}

let add5 = main(5);
console.log(add5(2));
console.log(add5(3));
console.log(add5(10));