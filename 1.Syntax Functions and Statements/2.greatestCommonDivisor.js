// sidney juachon
function main(num1, num2){
    
    "use strict";
    let output = gcd(num1, num2); 
    console.log(output);
}

function gcd(a,b){ return(!b)?a:gcd(b, a % b);}

main(15, 5);
main(2154,458);