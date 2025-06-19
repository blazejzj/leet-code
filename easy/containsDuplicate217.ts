function containsDuplicate(nums: number[]): boolean {
    if (nums.length <= 1) return false;

    const s = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (s.has(nums[i])) return true;
        s.add(nums[i]);
    }

    return false;
}
