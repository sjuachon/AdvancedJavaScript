function main(input){
    input.sort((x, y) => x - y);
    console.log(input[0], input[1]);
}

main([30, 15, 50, 5]);
main([3, 0, 10, 4, 7, 3, 0])