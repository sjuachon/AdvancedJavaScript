function main(input){
    // let outArr = []
    // let e = 0;
    // for (let i = 0; i < input.length; i++){
    //     e = 2 * input[i];
    //     if (i % 2 === 1){
    //         outArr.unshift(e);
    //     }
    // }
    let outArr = input
        .filter((element, index) => index % 2 === 1)
        .reverse()
        .map(element => element * 2);
    console.log(outArr.join(' '));


}

main([10, 15, 20, 25])

    // let reversedOddNums = numsArr
    //     .filter((num, index) => index % 2 !== 0)
    //     .map((num) => num * 2)
    //     .reverse()
    //     .join(' ');

    // console.log(reversedOddNums);

  
