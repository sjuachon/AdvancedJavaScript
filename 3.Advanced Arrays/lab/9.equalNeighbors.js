function main(arr) {
    let count = 0;
    for (let rows = 0; rows < arr.length - 1; rows++) {
        for (let cols = 0; cols < arr[rows].length; cols++) {
            if (arr[rows][cols] === arr[rows + 1][cols]) {
                count++;
            }
        }
    }
    console.log(count);
}

main([
    ['2', '3', '4', '7', '0'], 
    ['4', '0', '5', '3', '4'],  
    ['2', '3', '5', '4', '2'],  
    ['9', '8', '7', '5', '4']]);

main([
    ['test', 'yes', 'yo', 'ho'], 
    ['well', 'done', 'yo', '6'],  
    ['not', 'done', 'yet', '5']
]);