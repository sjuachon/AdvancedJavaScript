function main(input){
    let dash = [[false, false, false],
                [false, false, false],
                [false, false, false]];
    let player = "X";

    // convert the input array into numbers

    input.forEach(element > {
        
    })
    for (let turns = 0; turns < input.length; turns++){
        let play = input[turns].split(" ");
        // console.log(play)
        // check who has the turn.  remember that player X always goes first.
        turns % 2 === 0 ? player = "X" : player = "O";



        
        
    }
    console.log(dash);
}
main(["0 1",  "0 0",  "0 2",   "2 0",  "1 0",  "1 1",  "1 2",  "2 2",  "2 1",  "0 0"] );

