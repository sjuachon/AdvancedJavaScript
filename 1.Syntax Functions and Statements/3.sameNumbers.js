// sidney juachon
function main(input){
    let arr = input.toString().split('');
    let sum = 0;
    let boolIsEqual = false;
    // console.log(arr);

    // iterate through arr
    arr.forEach(el => {
        sum = +el + sum
    });

    for (i = 0; i < arr.length-1; i++){
        if(arr[i] !== arr[i+1]){
            boolIsEqual = false;
            break;
        } else {
            boolIsEqual = true;
        }
    }
    console.log(boolIsEqual);
    console.log(sum);
}

main(2222222);
main(1234);