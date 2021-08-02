function main(m, n){
    m = +m;
    n = +n; 
    let sum = 0;
    for (i = m; i <=n; i++){
        sum += i;
    }
    console.log(sum);
}

main('1', '5');
main('-8', '20');