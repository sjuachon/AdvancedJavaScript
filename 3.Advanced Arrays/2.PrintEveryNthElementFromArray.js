function main(arr){
    // we print every 2 elements after the 1st element since 2 is the last element.
    let n = arr.pop();
    let output = '';
    let i = 0;
    while(i < arr.length){
        console.log(arr[i]);
        i = i + +n;
    }
}
main(['5','20','31','4','20','2']);
main(['1','2','3','4','5','6'] );