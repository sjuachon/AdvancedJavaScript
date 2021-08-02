
function main(strings) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    let input = [];
    strings.forEach(element => {
        input.push(element.split(' ').map(Number));
    });

    for (let row = 0; row < input.length; row++) {
        for (let column = 0; column < input.length; column++) {
            if (row === column) {
                firstDiagonal += input[row][column];
            }
            if ((row + column + 1) === input.length) {
                secondDiagonal += input[row][column];
            }
        }
    }
    if (firstDiagonal === secondDiagonal) {
        for (let row = 0; row < input.length; row++) {
            for (let column = 0; column < input.length; column++) {
                if (row !== column && ((row + column + 1) !== input.length)) {
                    input[row][column] = secondDiagonal;
                }
            }
        }
    }
    input.forEach(element => {
        console.log(element.join(' '));

    });
}


    // // initialize variables
    // let outArr = [];
    // let rows = [];
    // // convert the string element into an array
    // arr.forEach(elem => {
    //     let row = elem.split(' ');
    //     let rows = row.map(Number);
    //     outArr.push(rows);
    // });

    // let revOutArr = outArr.reverse();

    // // console.log(outArr);
    // // lets get the sum of the forward diagonal
    // let forDiag = sumOfDiagonal(outArr);
    //     console.log(forDiag);

    // // // lets get the sum of the reverse diagonal
    // let revDiag = sumOfDiagonal(revOutArr);
    //     console.log(revDiag);
    // if (forDiag === revDiag){
    //     for(let row = 0; row < arr.length; row++){
    //         for (let col = 0; col < arr.length; col++){
    //             if(row !== col && arr.length-row!==col ){
    //                 outArr[row][col] = forDiag;
    //             }
    //         }
    //     }
    // }

    // console.log(outArr);




// function sumOfDiagonal(matrix){
//     let sumDiag = 0;
//     for(let rows = 0; rows < matrix.length; rows++){
//         for (let cols = 0; cols < matrix[rows].length; cols++)
//             if(rows === cols){
//                 sumDiag += +matrix[rows][cols];
//             }
//     }
//  return sumDiag;
//}

main([
    '5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1'] )