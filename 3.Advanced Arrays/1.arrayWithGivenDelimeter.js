/* 1. Print an Array with a Given Delimiter The input comes as an array of strings. 
The last element of the array is the delimiter. The output is the same 
array, printed on the console, each element separated from the others 
by the given delimiter. 

*/

function main(arr){    
    let delimeter = arr.pop();
    let output = arr.join(delimeter); 
    console.log(output);
}
main(['One', 'Two',  'Three', 'Four', 'Five', '-'])
