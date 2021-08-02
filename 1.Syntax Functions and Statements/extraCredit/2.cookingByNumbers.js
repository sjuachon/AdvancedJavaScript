/* 2.cookingByNumbers.js
 by sidney juachon
 chop - divide the number by two 
 dice - square root of number 
 spice - add 1 to number 
 bake - multiply number by 3 
 fillet - subtract 20% from number 
*/
 function main(input){
    let num = input.shift();

    // iterate through the input array

    input.forEach(elem =>{
        if(elem === 'chop'){num = num / 2; console.log(num);}
        if(elem === 'dice'){num = num**(0.5); console.log(num);}
        if(elem === 'spice'){num++; console.log(num);}
        if(elem === 'bake'){num = num * 3; console.log(num);}
        if(elem === 'fillet'){num = num * 0.8; console.log(num.toFixed(1));}
    });
}

//main(['32', 'chop', 'chop', 'chop', 'chop', 'chop'] );
main(['9', 'dice', 'spice', 'chop', 'bake', 'fillet'] );