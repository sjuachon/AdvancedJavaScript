// sidney juachon

function main(steps, meters, speed) {
    let distance = steps * meters;
    // console.log(distance.toFixed(2));

    // after 500 m, he takes a rest for 1 minute then walks another 500 m.  4000 / 500 = 8
    // he walks 500 m segments with 7-1-minute rests in between. 1 minute = 60 secs
    // during the walk, he walks at the rate of 5 km/hour * 1hoour/3600 sec * 1000 m/1km
    // so we let metersPerSec = speed * 1000/3600

// |---------|----------|----------|----------|----------|
// 0        500       1000       1500        2000       2500
//           1          2          3          4           5?
// speed = 7m/s
// time(500m) = 500/7 = 71s*4=284s


    metersPerSec = speed * 1000/3600; // in meters per second
    let walkingTime = distance / metersPerSec;
    let rests = Math.floor(distance / 500) // 1-minute rest time between 500m
    totalTime = walkingTime + rests * 60;
    //console.log(totalTime.toFixed(2));  // totalTime must = 1968 sec.345

    // but time needs to be converted to hh:mm:ss format
    // console.log(totalTime); //1968 seconds
    let hh = Math.floor(totalTime / 3600); //1 hour = 60 min
    if (hh < 10){
        hh = '0' + hh.toString();
    } else {
        hh = hh.toString();
    }
    let mm = Math.floor(totalTime / 60); // 1 min = 60 secs 
    if (mm < 10){
        mm = '0' + mm.toString();
    } else {
        mm = mm.toString();
    }
    let seconds = totalTime / 60 - mm;
    // console.log(seconds);
    ss = Math.ceil(seconds * 60);
    
    if(ss < 10){
        ss = '0' + ss.toString();
    } else {
        ss = ss.toString();
    }
    
    console.log(`${hh}:${mm}:${ss}`);
}

main(4000, 0.60, 5);
main(2564, 0.70, 5.5);