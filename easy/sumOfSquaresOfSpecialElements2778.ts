function sumOfSquares(nums: number[]): number {
    const length = nums.length;
    let ans = 0;
    for (let i = 0; i < length; i++) {
        if (length % (i + 1) === 0) {
            ans += nums[i] * nums[i];
        }
    }

    return ans;
}

console.log(sumOfSquares([1, 2, 3, 4]));
console.log(sumOfSquares([2, 7, 1, 19, 18, 3]));
