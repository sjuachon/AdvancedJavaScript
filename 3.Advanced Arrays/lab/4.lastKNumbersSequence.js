/* 4. lastKNumberSequence.js 
up to the index k-1
k-k = a[0] = 1
k-k-1 = a[1] =  1
k-k-2 = a[2] = a[0] + a[1] = 2
-5 -4 -3 -2 -1 0 1 2 3 4 5

so if k < 0 then whatever term comes before the 1st term, a[0] has to be zero providing
a(k) = 0 where k < 0;
*/

function main(length, k) {
    let result = [1];
    for (let i = 1; i < length; i++) {
        let current = result.slice(k * -1)
            .reduce((a, b) => a + b);
        result[i] = current;
    }
    console.log(result.join(' ')  );
}

main(6,4);
main(8,2);