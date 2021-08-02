/*
1.Sort Array
Write a function that ​sorts an array​ with ​numeric​ values in ​ascending​ 
or ​descending​ order, depending on anargument​ that is passed to it.

You will receive a ​numeric array​ and a ​string​ as arguments to the first 
function in your code.
●If the second argument is ​asc​, the array should be sorted in ​ascending order​ 
(smallest values first).
●If it is ​desc​, the array should be sorted in ​descending order​ 
(largest first).

Input
You will receive a ​numeric array​ and a ​string​ as input parameters.
Output
The output should be the ​sorted array​.
Examples
Input                       Output
[14, 7, 17, 6, 8], 'asc'    [ 6, 7, 8, 14, 17 ]
[14, 7, 17, 6, 8], 'desc'   [ 17, 14, 8, 7, 6 ]
*/

function main(arr, order){
    let sorted = [];
    if(order==='asc'){
        sorted = arr.sort((a,b) => (a - b))
    }
    if(order==='desc'){
        sorted = arr.sort((a,b) => (b - a));
    }
    console.log(sorted);
}
main([14, 7, 17, 6, 8], 'asc' );
main([14, 7, 17, 6, 8], 'desc');