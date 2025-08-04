function minDifference(nums: number[]): number {
    // We have 4 options here
    // - change the last 3 (largest 3)
    // - change the last 2 + first 1
    // - change the last 1 + first 2
    // - change first 3 (smallest 3)

    if (nums.length <= 4) {
        return 0;
    }

    // sort first
    nums = nums.sort((a, b) => a - b);
    let length = nums.length;
    let minSoFar = Number.MAX_VALUE;

    for (let i = 0; i <= 3; i++) {
        const curr = nums[length - 4 + i] - nums[i];
        if (curr < minSoFar) {
            minSoFar = curr;
        }
    }

    return minSoFar;
}

console.log(minDifference([5, 3, 2, 4]));
console.log(minDifference([1, 5, 0, 10, 14]));
