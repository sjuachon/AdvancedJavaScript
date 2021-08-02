let main = (() => {
    let sum = 0;
    return function addNum(num) {
        sum += num;
        console.log(sum);
        return addNum;
    };
})();

main(1)(6)(-3) //1,7,4
//main(5)(5)(5)(5)(5)(5)(5)(5)(5)(5);