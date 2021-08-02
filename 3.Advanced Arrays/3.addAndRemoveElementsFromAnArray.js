/* by sidney juachon 
7-3. add and remove elements from an array */

function main(arr){
    let output = [];
    let i = 1
    arr.forEach(command => {
        if(command === 'add'){
            output.push(i);
        }
        
        if(command === 'remove'){
            output.pop();
        }
        i++
    });
    if (output.length === 0){
        console.log('Empty');
    } else {
        output.forEach(elem => {
            console.log(elem);
        });
    }
    
}

main(['add','add','remove','add','add']);
main(['remove','remove','remove']);
main(['add','add','add','add']);