function main(x) {
    let sum = x;
    console.log(sum)
    return function resultFn(y) {
        if (arguments.length) { //not relying on falsy value
            sum += y;
            console.log(sum)
            return resultFn;
        }
        return sum;
    }
}

//main(1);//1
main(1)(6)(-3) //1,7,4