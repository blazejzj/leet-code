function majorityElement(nums: number[]): number {
    let map = new Map();

    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    }

    let ans = 0;

    for (const num of map.keys()) {
        if (map.get(num) > nums.length / 2) {
            ans = num;
        }
    }

    return ans;
}
