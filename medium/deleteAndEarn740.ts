function deleteAndEarn(nums: number[]): number {
    if (nums.length < 1) return 0;
    if (nums.length === 1) return nums[0];

    let map = new Map();
    const keys: number[] = [];

    for (const num of nums) {
        if (map.has(num)) {
            map.set(num, map.get(num) + num);
        } else {
            map.set(num, num);
        }
    }

    for (const key of map.keys()) {
        keys.push(key);
    }

    keys.sort((a, b) => a - b);

    let prev1 = 0;
    let prev2 = 0;

    for (let i = 0; i < keys.length; i++) {
        let currentPoints = map.get(keys[i]);
        let current = 0;

        if (i > 0 && keys[i] === keys[i - 1] + 1) {
            current = Math.max(prev1, prev2 + currentPoints);
        } else {
            current = prev1 + currentPoints;
        }
        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}
