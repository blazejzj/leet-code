function maxAdjacentDistance(nums: number[]): number {
    if (nums.length === 2) return Math.abs(nums[0] - nums[1]);

    let ans = 0;
    let firstElement = nums[0];

    for (let i = 1; i <= nums.length - 1; i++) {
        let potentialMax = Math.abs(nums[i - 1] - nums[i]);
        if (i === nums.length - 1) {
            let lastPotential = Math.abs(nums[i] - firstElement);
            if (lastPotential > potentialMax) potentialMax = lastPotential;
        }

        if (potentialMax > ans) {
            ans = potentialMax;
        }
    }

    return ans;
}

console.log(maxAdjacentDistance([1, 2, 4]));
console.log(maxAdjacentDistance([-5, -10, -5]));
console.log(maxAdjacentDistance([5, 5]));
console.log(maxAdjacentDistance([-2, 1, -5]));
