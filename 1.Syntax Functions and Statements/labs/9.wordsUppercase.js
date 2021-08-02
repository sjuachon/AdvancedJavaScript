function main(input){
    input = input.split(/[!?,\s]+/g).filter(a => a !== '').map(a => a.toUpperCase());
    console.log(input.join(', '));
}

main('hello');
main('Hi, how are you?');