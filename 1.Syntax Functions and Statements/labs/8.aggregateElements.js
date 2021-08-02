function main(numArray){
    let sumAi = 0;
    let sumInverse = 0;
    let concat = '';

    numArray.forEach(el =>{
        sumAi += +el;
        sumInverse += 1/+el;
        concat += el.toString();
    });

    console.log(sumAi);
    console.log(sumInverse.toFixed(4));
    console.log(concat);
}
main([1, 2, 3]);
main([2, 4, 8, 16]);