// sidney juachon

function main(foods){
    let objFoods = {};
    for (i = 0; i < foods.length; i++){
        if(i % 2 === 0){
            objFoods[foods[i]] = foods[i+1];
        }
    }
    
    console.log(objFoods);
}

main(['Yoghurt', 48, 'Rice', 138, 'Apple', 52] );
// { Yoghurt: 48, Rice: 138, Apple: 52 }
main(['Potato', 93, 'Skyr', 63, 'Cucumber', 18, 'Milk', 42] );