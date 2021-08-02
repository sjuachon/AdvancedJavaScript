function main(num1, num2, op){
    switch(op){
        case '+': console.log(num1+num2); break;
        case '-': console.log(num1-num2); break;
        case '*': console.log(num1*num2); break;
        case '/': console.log(num1/num2); break;
        case '%': console.log(num1%num2); break;
        case '**': console.log(num1**num2); break;
    }
}

main(5, 6, '+');
main(3, 5.5, '*');