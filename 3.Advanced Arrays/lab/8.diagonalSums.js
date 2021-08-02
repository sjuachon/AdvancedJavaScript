function main(input){
    // compute the diagonal of the input matrix (array) before reversing
    // the input array since it the effects become permanently reversed.
    let sumForwardDiag = sumOfDiagonal(input);

    // to get the reverse diagonal, we reverse the array
    let reverse = input.reverse();
    
    // then we compute the sum of the reverse diagonal except it will be
    // the sum of the reversed-input matrix
    let sumReversedDiag = sumOfDiagonal(reverse);
    // we print the output.
    console.log(sumForwardDiag, sumReversedDiag);
}

function sumOfDiagonal(matrix){
    let sumDiag = 0;
    for(let rows = 0; rows < matrix.length; rows++){
        for (let cols = 0; cols < matrix[rows].length; cols++)
            if(rows === cols){
                sumDiag += matrix[rows][cols];
            }
    }
    return sumDiag;
}

main([
    [20, 40], 
    [10, 60]
]);
main([
    [3, 5, 17], 
    [-1, 7, 14],  
    [1, -8, 89]
]);