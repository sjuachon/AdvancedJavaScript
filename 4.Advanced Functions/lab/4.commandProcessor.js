function main(){
    let string = ''; // string is declared but its value is never read.

    return {
        append: (inputStr) => {
            string += inputStr;
        },
        removeStart: (inputNum) => {
            //console.log(string.substring(inputNum));
            string = string.substring(inputNum);
        },
        removeEnd: (inputNum) => {
            // console.log(string.substring(inputNum-1));
            string = string.substr(0, string.length - inputNum);
        },
        print: () => {
            console.log(string);
        }
    };
}
let firstZeroTest = main();   
    firstZeroTest.append('hello');   
    firstZeroTest.append('again');  
    firstZeroTest.removeStart(3);   
    firstZeroTest.removeEnd(4);  
    firstZeroTest.print()

