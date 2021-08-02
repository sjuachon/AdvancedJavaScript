function main(arr) {   
    let earnings = 0; 
    arr.forEach(item => {
        let price = 0.8;
        item = item.split(', ');
        let coins = item.shift();
        let drink = item.shift();
        let sugar = item.pop();
        item.includes('decaf') > 0 ? price = +price+0.1 : price;
        +sugar > 0 ? price = +price+0.1 : price;
        item.includes('milk') ? price = (price*11/10).toFixed(1) : price;
        let change = coins - price;
        change>=0 ? console.log(`You ordered ${drink}. Price: $${Number(price).toFixed(2)} Change: $${change.toFixed(2)}`)
            : console.log(`Not enough money for ${drink}. Need $${(Math.abs(change)).toFixed(2)} more`);
        change>=0 ? earnings+=+price : earnings;
    });
    console.log(`Income Report: $${earnings.toFixed(2)}`);
}

main(['1.00, coffee, caffeine, milk, 4',
'0.40, tea, milk, 2', 
'1.00, coffee, decaf, 0'
])
