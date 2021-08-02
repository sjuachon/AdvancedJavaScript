function main(arr){
    let magicArr = [];
    let isMagic = '';
    arr.forEach(row => {
        let sum1 = sumOfRows(row);
        magicArr.push(sum1);
    })
    let sumcols = 0;
    
    for (i = 0; i < arr.length; i++){
        for(j = 0; j < arr.length; j++){
            sumcols += arr[i][j];
        }
        magicArr.push(sumcols);
        sumcols = 0;
    }

    for(let m = 0; m < magicArr.length-1; m++){
        if(magicArr[m] === magicArr[m+1]){
            isMagic = true;
        } else {
            isMagic = false;
            break;
        }
    }

    // print the output
    
    console.log(isMagic);
    
}

function sumOfRows(row){
    let sum = 0;
    row.forEach(elem => {
        sum += Number(elem);
    })
    return sum;
}


main([[4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]] )