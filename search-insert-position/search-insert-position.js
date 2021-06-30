/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0;
    let j = nums.length;
    
    while(i <= j) {
        const middle = Math.floor((i + j) / 2)
        if(nums[middle] === target) {
            return middle;
        } else if (nums[middle] < target) {
            i += 1;
        } else {
            j -= 1;
        }
    }
    return i;
};