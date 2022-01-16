/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let point = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            let temp = nums[point];
            nums[point] = nums[i];
            nums[i] = temp;
            point++;
        }
    }
};