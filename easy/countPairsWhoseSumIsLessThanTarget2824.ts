function countPairs(nums: number[], target: number): number {
    let ans = 0;
    let l = 0;
    let r = nums.length - 1;

    nums.sort((a, b) => a - b); // sort for simplicity

    while (l < r) {
        if (nums[l] + nums[r] < target) {
            ans += r - l;
            l++;
        } else {
            r--;
        }
    }

    return ans;
}

console.log(countPairs([-1, 1, 2, 3, 1], 2));
