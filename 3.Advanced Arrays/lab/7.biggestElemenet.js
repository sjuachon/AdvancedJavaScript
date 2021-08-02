function main(input){
    let outArr = [];
    input.forEach(elem => {
        elem.forEach(elem2 => {
            outArr.push(elem2);
        });
    });
    //console.log(outArr);
    // sort the array in descending order by numbers then
    // the 1st element of sorted is the highest number.
    let sorted = outArr.sort((x, y) => y - x);
    //console.log(sorted);
    console.log(sorted[0]);
    
}

main([[20, 50, 10], [8, 33, 145]] )