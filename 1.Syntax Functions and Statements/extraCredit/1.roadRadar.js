//1.roadRadar.js
// by sidney juachon

function main(input){
    let speed = input.shift();
    let area = input.shift();

    if (area === 'residential'){
        if(speed <= 20){}
        if(20 < speed && speed <= 40){
            console.log('speeding');    
        } else if (40 < speed && speed <= 60){
            console.log('excessive speeding');
        } else if(speed > 60){
            console.log('reckless driving');
        }
    }
    
    if (area === 'city'){
        if(speed <= 50){
            console.log('');
        }
        if(50 < speed && speed <= 70){
            console.log('speeding');    
        } else if (70 < speed && speed <= 90){
            console.log('excessive speeding');
        } else if(speed > 90){
            console.log('reckless driving');
        }
    }
    if (area === 'interstate'){
        if(speed <= 90){
            console.log('');
        }
        if(50 < speed && speed <= 110){
            console.log('speeding');    
        } else if (110 < speed && speed <= 130){
            console.log('excessive speeding');
        } else if (speed > 130){
            console.log('reckless driving');
        }
    }
    if (area === 'motorway'){
        if(speed <= 130){}
        if(1300 < speed && speed <= 150){
            console.log('speeding');    
        } else if (150 < speed && speed <= 170){
            console.log('excessive speeding');
        } else if (speed > 170){
            console.log('reckless driving');
        }
    }
}

main([40, 'city']);
main([21, 'residential']);