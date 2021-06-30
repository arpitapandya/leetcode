/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let numsCounter = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] != nums[i - 1]) {
            nums[numsCounter] = nums[i];
            numsCounter++;
        }
    }
    return numsCounter;
};