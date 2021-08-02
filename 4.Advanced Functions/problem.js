function main() {
    let str = '';
    return{
        append: (s) => str += s,
        removeStart: (n) => str = str.substring(n),
        removeEnd: (n) => str = str.substring(0, str.length-n),
        print: () => console.log(str)
    }
}
let lib = main();
lib.append('Hello world');
lib.print();
lib.removeEnd(2);
lib.removeStart(2);
lib.print();