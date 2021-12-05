/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if(needle === '') return 0;
    for (let i = 0; i < haystack.length; i++){
        let j = 0;
        while (j < needle.length && needle[j] === haystack[i + j]) {
            j += 1;
        }
        if (j === needle.length) {
            return i;
        }
    }
    return -1;
};