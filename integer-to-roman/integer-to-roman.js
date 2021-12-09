/**
 * @param {number} num
 * @return {string}
 */
    // let map2= {'I': 1,'V': 5,'X':10,'L':50,'C':100,'D':500,'M':1000};
let map2= {'I': 1, 'IV': 4,'V': 5,'IX': 9,'X':10,'XL': 40,'L':50,'XC': 90,'C':100,'CD': 400,'D':500,'CM':900,'M':1000};
    let findRange = (num) => {
       if(num >= 1000) {
            return 'M';
        } else if (num >= 900) {
            return 'CM';
        } else if (num >= 500) {
            return 'D';
        } else if (num >= 400) {
            return 'CD';
        } else if (num >= 100) {
            return 'C';
        } else if(num >= 90) {
            return 'XC';
        } else if (num >= 50) {
            return 'L';
        } else if (num >= 40) {
            return 'XL';
        } else if (num >= 10) {
            return 'X';
        } else if (num === 9) {
            return 'IX';
        } else if (num >= 5) {
            return 'V';
        } else if(num === 4) {
            return 'IV';
        } else {
            return 'I';
        }
    }
    
    var intToRoman = function(num) {
        let res = '';
        while (num > 0) {
            let letter = findRange(num);
            res += letter;
            num = num -map2[letter];
        }
        return res;
    };