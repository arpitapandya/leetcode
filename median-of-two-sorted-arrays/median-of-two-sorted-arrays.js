/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

var findMedianSortedArrays = function(nums1 = [], nums2 = []) {
    let i1 = 0;
    let i2 = 0;
    
    const length1 = nums1.length;
    const length2 = nums2.length;
    
    const totalLength = length1 + length2;
    
    if(totalLength === 0) {
        return null;
    }
    
    const mergedArray = [];
    while(i1 < length1 && i2 < length2) {
        if(nums1[i1] <= nums2[i2]) {
            mergedArray.push(nums1[i1++]);
        } else {
            mergedArray.push(nums2[i2++]);
        }
    }
    while (i1 < length1) {
        mergedArray.push(nums1[i1++]);
    }
    while (i2 < length2) {
        mergedArray.push(nums2[i2++]);
    }
    
    const isOdd = totalLength%2;
    
    if(isOdd) {
        return mergedArray[(totalLength - 1)/2]
    } else {
        return (mergedArray[totalLength / 2] + mergedArray[totalLength/2 - 1])/2
    }
};