function main(input){
    if(!isNaN(input)){
        area = Math.PI * input**2;
        console.log(area.toFixed(2));
    } else {
        console.log('We cannot calculate the circle area, because we receive a string.');
    }
}

main(5);
main('name');