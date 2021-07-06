/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let leftPointer = 0;
    let rightPointer = numbers.length - 1;
    
    let result = [];
    
    while (leftPointer < rightPointer) {
        let leftElement = numbers[leftPointer];
        let rightElement = numbers[rightPointer];
        
        if (leftElement + rightElement === target) {
            result.push(leftPointer + 1);
            result.push(rightPointer + 1);
            break;
        } else if (leftElement + rightElement > target) {
            rightPointer--;
        } else {
            leftPointer++;
        }
    }
    return result;
};