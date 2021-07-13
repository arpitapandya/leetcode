/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
   // non decreasing = increasing
   // nums1 = [1,2,3,0,0,0]
   // nums2 = [2,5,6]
   // integer m = no. of ele [1,2,3]
   // integer n = no. of ele [2,5,6]
   // // merge nums1 & nums2 [1,2,2,3,5,6] = nums1
   //  num2 = nums.length
    let first = m - 1;
    let second = n - 1;
    
    for (let i = m + n - 1; i >= 0; i--) {
        if (second < 0) {
            break;
        }
        if (nums1[first] > nums2[second]) {
            nums1[i] = nums1[first];
            first--;
        } else {
            nums1[i] = nums2[second];
            second--;
        }
    }
};