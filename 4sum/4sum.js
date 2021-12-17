/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
//     sort array in ascending order
    nums.sort((a,b) => a - b);

    let len = nums.length;
    let left = 0;
    let right = 0;
    let sum = 0;
    let result = [];
    
    for(let i = 0; i < len - 3; i++) {
        for(let j = i + 1; j < len - 2; j++) {
            left = j+1;
            right = len - 1;
            while(left < right) {
                sum = nums[i] + nums[j] + nums[left] + nums[right];
                if(sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
//                     avoid duplicates
                    while(nums[left] === nums[left + 1]) left++;
                    while(nums[right] === nums[right - 1]) right--;
                    left++;
                    right--;
                } else if(sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
            while(nums[j] === nums[j+1]) j++;
        }
        while(nums[i] === nums[i+1]) i++;
    }
    return result;
};