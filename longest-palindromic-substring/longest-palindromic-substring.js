/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let res = "";
    
    if(!s) return res;
    
    for(let i = 0; i < s.length; i++) {
        for(let j = 0; j < 2; j++) {
            
            let left = i;
            let right = i + j;
            
            while(left >= 0 && right <= s.length && s[left] == s[right]) {
                left--;
                right++;
            }
            let start = left + 1;
            let end = right;
            
            let subString = s.slice(start, end);
            if(res.length < subString.length) {
                res = subString
            }
        }
    }
    return res;
};