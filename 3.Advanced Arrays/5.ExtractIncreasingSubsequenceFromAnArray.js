/* extractIncreasingSubsequence\nnon-decreasing subsequence was also in module 2*/

function main(nums) {
    let outNums = [];
    let output = '';
    let largestNumber = 0;
    let s = nums.length;
    // extract the elements from the nums array to the outNums Array
    // where the number that is less than the current largest number
    // is ignored.
    for (i = 0; i < s; i++) {
        if (nums[i] >= largestNumber) {
            largestNumber = nums[i]
            outNums.push(largestNumber);
        }
    }
    /// print the output using forEach loop
    outNums.forEach(elem => {
        console.log(elem);
    });
}
// main([1,3,8,4,10,12,3,2,24] );
// main([1,2,3,4] );
// main([20,3,2,15,6,1]);
main([0, 5, 100, 99])
