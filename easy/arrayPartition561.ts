function arrayPairSum(nums: number[]): number {
    let ans = 0;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            ans += nums[i];
        }
    }
    return ans;
}

console.log(arrayPairSum([1, 3, 4, 2]));
console.log(arrayPairSum([6, 2, 6, 5, 1, 2]));
