function main(str1, str2, str3){
    let sum = 0; 
    arr1 = str1.split('');
    arr2 = str2.split('');
    arr3 = str3.split('');
    sum = arr1.length + arr2.length + arr3.length;
    average = Math.floor(sum/3);

    console.log(sum);
    console.log(average);
}

main('chocolate', 'ice cream', 'cake');
main('pasta', '5', '22.3');