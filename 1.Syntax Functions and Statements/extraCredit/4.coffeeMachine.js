/* 4.coffeeMachine.js
by sidney juachon
Type                Price 
coffee caffeine     0.80 
coffee decaf        0.90 
tea                 0.80

*/
function main(input){
    let income = 0;
    input.forEach(elem =>{
        let price = 0.8;
        let elemArr = elem.split(', ');
        let money = +elemArr.shift();
        let drink = elemArr.shift();
        let strength = elemArr.shift();
        let sugarLevel = +elemArr.pop();
        if(drink === 'coffee'){
            strength === 'decaf'? price = +price + 0.1:price;
            elemArr.includes('milk')? price = (price*11/10).toFixed(1):price;
            sugarLevel > 0? price = (+price + 0.10):price;
        }
        if(drink === 'tea'){
            elemArr.includes('milk')? price = (price*11/10).toFixed(1):price;
            sugarLevel > 0? price = (+price + 0.10):price;
        }
        let change = +money - +price
        let moneyNeeded = +price - +money
        change>=0?console.log(`You ordered ${drink}. Price: $${Number(price).toFixed(2)} Change: $${change.toFixed(2)}`):
        console.log(`Not enough money for ${drink}. Need $${moneyNeeded.toFixed(2)} more`);;
        change >= 0?income += price: income;
        
    });
    console.log(`Income Report: $${(income).toFixed(2)}`)
}
main(['1.00, coffee, caffeine, milk, 4',
'0.40, tea, milk, 2', 
'1.00, coffee, decaf, 0'
])
