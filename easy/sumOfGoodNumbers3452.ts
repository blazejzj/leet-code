function sumOfGoodNumbers(nums: number[], k: number): number {
    let ans = 0;
    for (let i = 0; i < nums.length; i++) {
        const before = nums[i - k];
        const after = nums[i + k];

        if (before === undefined && after === undefined) ans += nums[i];
        else if (
            before !== undefined &&
            after === undefined &&
            nums[i] > before
        )
            ans += nums[i];
        else if (before === undefined && after !== undefined && nums[i] > after)
            ans += nums[i];
        else if (
            before !== undefined &&
            after !== undefined &&
            nums[i] > before &&
            nums[i] > after
        )
            ans += nums[i];
    }

    return ans;
}

console.log(sumOfGoodNumbers([1, 3, 2, 1, 5, 4], 2));
console.log(sumOfGoodNumbers([2, 1], 1));
