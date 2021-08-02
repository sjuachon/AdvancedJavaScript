function main(n1, n2, n3){
    let numbers = [n1, n2, n3];
    numbers.sort((a, b) => b - a);
    console.log(`The largest number is ${numbers[0]}.`);
}

main(5, -3, 16);
main(-3, -5, -22.5);