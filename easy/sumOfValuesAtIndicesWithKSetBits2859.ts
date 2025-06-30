function sumIndicesWithKSetBits(nums: number[], k: number): number {
    function countSetBits(n: number): number {
        let count = 0;
        while (n > 0) {
            count += n & 1;
            n >>= 1;
        }
        return count;
    }

    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        if (countSetBits(i) === k) {
            sum += nums[i];
        }
    }

    return sum;
}
