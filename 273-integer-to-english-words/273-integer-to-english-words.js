/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    var lv1 = "Zero One Two Three Four Five Six Seven Eight Nine Ten Eleven Twelve Thirteen Fourteen Fifteen Sixteen Seventeen Eighteen Nineteen".split(" ");
    var lv2 = "Twenty Thirty Forty Fifty Sixty Seventy Eighty Ninety".split(" ");
    var lv3 = "Hundred";
    var lv4 = "Thousand Million Billion".split(" ");
    
    var cur = num;
    var result = [];
    var commas = 0;
    
    while(cur > 0) {
        var n = cur % 1000;
        cur = Math.floor(cur / 1000);
        
        var words = [];
        if(n > 99) {
            words.push(lv1[Math.floor(n/100)]);
            words.push(lv3);
            n %= 100;
        }
        
        if(n > 19) {
            words.push(lv2[Math.floor(n/10)-2]);
            n %= 10;
        }
        
        if(n > 0) {
            words.push(lv1[n]);
        }
        
        if(words.length > 0) {
            if(commas > 0) {
                words.push(lv4[commas-1]);
            }
            result.push(words.join(' '));
        }
        commas++;
    }
    
    if(result.length > 0) {
        result = result.reverse();
        return result.join(' ');
    }
    return "Zero";    
};