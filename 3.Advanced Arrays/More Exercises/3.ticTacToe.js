function main(input){
    let dash = [[false, false, false],
               [false, false, false],
               [false, false, false]];
    let output = '';
    let turn='X';

    //convert the input array's elements into numbers

    for (let i = 0; i < input.length; i++){
        for (j = 0; j < 2; j++){
            +input[i][j];
        }
    }
    //console.log(input);
    for(i = 0; i < moves.length; i++) {
        let [row,column] = moves[i].split(' ');
        if(i % 2 === 0){
            turn='X';
            if (dash[row][column] === false){
                dash[row][column] = turn;
            } else {
                console.log('This space is already taken. Please choose another!');
                i--;
           }
        }
        if(i % 2 === 1){
            turn='O';
            if (dash[row][column] === false){
                dash[row][column] = turn;
            } else {
                console.log('This space is already taken. Please choose another!');
                i--;
            }
        }

    //     if((dash[0][0] === dash[0][1] && dash[0][1] === dash[0][2] && dash[0][2] !== false)
    //     ||(dash[1][0] === dash[1][1] && dash[1][1] === dash[1][2] && dash[1][2] !== false)
    //     ||(dash[2][0] === dash[2][1] && dash[2][1] === dash[2][2] && dash[2][2] !== false)
    //     ||(dash[0][0] === dash[1][0] && dash[1][0] === dash[2][0] && dash[2][0] !== false)
    //     ||(dash[0][1] === dash[1][1] && dash[1][1] === dash[2][1] && dash[2][1] !== false)
    //     ||(dash[0][2] === dash[1][2] && dash[1][2] === dash[2][2] && dash[2][2] !== false)
    //     ||(dash[0][0] === dash[1][1] && dash[1][1] === dash[2][2] && dash[2][2] !== false)
    //     ||(dash[2][0] === dash[1][1] && dash[1][1] === dash[0][2] && dash[0][2] !== false))
    //     {
    //         output = `Player ${turn} wins!`;
    //         break;
    //     }
    //     // dash.forEach(item => {console.log(item.join(' '))});
    // }
    // console.log(output);
    // dash.forEach(item => {console.log(item.join('\t'))});
}

//main(["0 1",  "0 0",  "0 2",  "2 0",  "1 0",  "1 1",  "1 2",  "2 2",  "2 1",  "0 0"] );
main(["0 0",  "0 0",  "1 1",  "0 1",  "1 2",  "0 2",  "2 2",  "1 2",  "2 2",  "2 1"]);