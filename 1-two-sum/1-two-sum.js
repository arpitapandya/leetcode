/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let comp = {};
    
    for(let i = 0; i < nums.length; i++) {
            if(nums[i] in comp) {
                return [comp[nums[i]], i];
            }
            comp[target - nums[i]] = i;
        }
    return [];
};