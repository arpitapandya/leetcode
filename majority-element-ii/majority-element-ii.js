/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
    const seen = new Map();
    const ans = [];
    
    nums.forEach(num => {
        if(!seen.has(num)) {
            seen.set(num, 1);
            
            if(seen.get(num) > (nums.length / 3) && !ans.includes(num)) {
                ans.push(num);
            }
        } else {
            seen.set(num,seen.get(num) + 1);
          if(seen.get(num) > (nums.length / 3) && !ans.includes(num)) {
              ans.push(num);
          }
        }
    });
    return ans;
};