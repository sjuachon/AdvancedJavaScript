/* 4.rotateArray.js by sidney juachon using the reverse method */
function main(arrInput){
    ////// separate the last element from the rest of each array////
    let i = 0;
    let tempArray = [];
    let outArray = [];
    let rotations = arrInput[arrInput.length-1];
    for (i = 0; i < arrInput.length-1; i++) {
        // the arrInput.lentth - 1 is used since the last element of the array
        // is for the number of rotations.

        tempArray.push(arrInput[i]);
    }
    // console.log(tempArray);
    let k = rotations;

    // reverse the array tempArray
    tempArray.reverse();
    //console.log(tempArray);

    // make sure that k is recalculated, if k > tempArray.length

    k = k % tempArray.length

    // new reverse the 1st k elements of the tempArray with the last element
    // starting at k-1. Push them to the outArray
    
    for (i = k - 1; i >= 0; i--){
        outArray.push(tempArray[i]);
    }

    // now reverse the rest of the elements of the array starting at index k to
    // tempArray.length

    for (i = tempArray.length - 1; i >= k ; i--) {
        outArray.push(tempArray[i]);
    }
    console.log(outArray.join(' '));

}
main(['1', '2', '3', '4', '2']);
main(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
main(['remove', 'add', 'remove', '5']);