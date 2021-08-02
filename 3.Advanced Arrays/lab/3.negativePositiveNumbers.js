function main(elem){
    let output = [];
    elem.forEach(element => {
        element >= 0  ?  output.push(element)  :  output.unshift(element);
    });
    output.forEach(item => console.log(item))
}

main([7, -2, 8, 9]);
//main([3, -2, 0, -1]);