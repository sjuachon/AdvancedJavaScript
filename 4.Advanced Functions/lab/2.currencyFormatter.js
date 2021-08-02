function currencyFormatter(separator, symbol, symbolFirst, value) {
    let result = Math.trunc(value) + separator;    
    result += value.toFixed(2).substr(-2,2);    
    if(symbolFirst) return symbol + ' ' + result;    
    else return result + ' ' + symbol;
}

function main(currencyFormatter){
    let separator = ",";
    let symbol = "$";
    let symbolFirst = true;
    let dollarFormatter = (value) => {
        return     currencyFormatter(separator, symbol, symbolFirst, value);
    } 
    return dollarFormatter;
}    



let dollarFormatter = main(currencyFormatter);
console.log(dollarFormatter(5345));
console.log(dollarFormatter(3.1429));
console.log(dollarFormatter(2.709));
