function main(input) {
    let upper = input.toUpperCase();
    let regex = /\S*[A-Z]+/gm;
    let words = upper.match(regex);
    
    if (words) {
        console.log(words.join(", "));
    }
    // console.log(upper);
    // let arrString = upper.split("/[!?,\s]+/g").filter(char => char !== '' || char !== "?");
    // console.log(arrString.join(', '));
}
main("100th");
main('hello');
main('Hi, how are you?');