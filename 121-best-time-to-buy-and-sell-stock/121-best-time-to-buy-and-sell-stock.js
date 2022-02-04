/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minBuy = Infinity;
    let maxProfit = 0;
    
    for(let price of prices) {
        if(price < minBuy) {
            minBuy = price;
        } else if(price - minBuy > maxProfit) {
            maxProfit = price - minBuy
        }
    }
    return maxProfit;
};