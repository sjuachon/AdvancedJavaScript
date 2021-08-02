function main(arr){
    // let output = '';
    // let i = 0;
    // while(i < arr.length){
    //     output += ` ${arr[i]}`;
    //     i = i + 2;
    // }

    let output = arr.filter((value, index)=> index % 2 === 0 ).join(' ')
    console.log(output);
}

main(['20', '30', '40']);
main(['5', '10']);