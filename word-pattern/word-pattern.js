/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    let obj = {};
    let arr = s.split(" ");
    let set1 = new Set(pattern)
    let set2 = new Set(arr)
    if(set1.size !== set2.size || pattern.length !== arr.length) {
        return false;
    }
    
    for(i = 0; i < pattern.length; i++) {
        if(obj[pattern[i]]) {
            if(obj[pattern[i]] !== arr[i]) {
                return false;
            }
        }
        else {
            obj[pattern[i]] = arr[i];
        }
    }
    return true;
};