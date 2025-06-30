// index = day

function maxProfit(prices: number[]): number {
    let minSoFar = Number.MAX_SAFE_INTEGER;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minSoFar) {
            minSoFar = prices[i];
        } else {
            maxProfit = Math.max(maxProfit, prices[i] - minSoFar);
        }
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([2, 4, 1]));
