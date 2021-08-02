function main(input) {

    let [rows, cols] = input[0].split(' ').map(Number);
    let [starRow, starCol] = input[1].split(' ').map(Number);

    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push([]);
        for (let j = 0; j < cols; j++) {
            matrix[i].push(0);
        }
    }

    let element = 1;
    // Fill star cell
    matrix[starRow][starCol] = element;

    let startRow = starRow - 1;
    let startCol = starCol - 1;
    let endRow = starRow + 1;
    let endCol = starCol + 1;

    while (startRow >= 0 || startCol >= 0 || endRow <= matrix.length - 1 || endCol <= matrix[0].length) {
        element++;
        if (startRow >= 0) {
            matrix[startRow].fill(element);
        }
        if (endRow <= matrix.length - 1) {
            matrix[endRow].fill(element);
        }

        if (startCol >= 0) {
            let sR = Math.max(startRow, 0);
            let eR = Math.min(endRow, matrix.length - 1);
            for (let r = sR; r <= eR; r++) {
                matrix[r][startCol] = element;
            }
        }

        if (endCol <= matrix[0].length - 1) {
            let sR = Math.max(startRow, 0);
            let eR = Math.min(endRow, matrix.length - 1);
            for (let r = sR; r <= eR; r++) {
                matrix[r][endCol] = element;
            }
        }

        startRow--;
        startCol--;
        endRow++;
        endCol++;
    }

    console.log(matrix.map(
        row => row.join(' ')
    ).join('\n'));
}
// main(['3 3', '2 2']);
main(['4 4', '0 0']);
// main(['5 5', '2 2']);

/*
TypeError: input[0].split is not a function
    at main (/mnt/c2t38m97aret5tft0aug/3584311933767526720-1.code:5:33)
    at Object.<anonymous> (/mnt/c2t38m97aret5tft0aug/3584311933767526720-1.code:60:1)
    at Module._compile (internal/modules/cjs/loader.js:1137:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1157:10)
    at Module.load (internal/modules/cjs/loader.js:985:32)
    at Function.Module._load (internal/modules/cjs/loader.js:878:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)
    at internal/main/run_main_module.js:17:47




*/