/*
3.validityChecker.js by sidney juachon
*/
function main(points){
    let x1 = points.shift();
    let y1 = points.shift();
    let x2 = points.shift();
    let y2 = points.shift();

    // compute distance between (x1, y1) and (0,0)
    x1y1ToOrigin = ((+x1)**2 + (+y1)**2)**(0.5);
    x2y2ToOrigin = ((+x2)**2 + (+y2)**2)**(0.5);
    x1y1ToX2Y2 = ((+x2- +x1)**2 + (+y2- +y1)**2)**(0.5);

    if(x1y1ToOrigin % 1 === 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }

    if(x2y2ToOrigin % 1 === 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }

    if(x1y1ToX2Y2 % 1 === 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}

main([3, 0, 0, 4]);
main([2, 1, 1, 1]);