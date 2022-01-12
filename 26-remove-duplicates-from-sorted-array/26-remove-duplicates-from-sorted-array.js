/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let numCounter = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != nums[i - 1]) {
            nums[numCounter] = nums[i];
            numCounter++;
        }
    }
    return numCounter;
};