/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let ifNoneMissing = nums.length;
    let actualSum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        ifNoneMissing += i;
        actualSum += nums[i];
    }
    return ifNoneMissing - actualSum;
};

    
    // [3,0,1] = 4
    // 0 1 2
    // 3,0,1,2 = 6