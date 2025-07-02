function trap(height: number[]): number {
    let ans = 0;
    let left_max: number[] = [];
    left_max[0] = height[0];
    for (let i = 1; i < height.length; i++) {
        left_max[i] = Math.max(height[i], left_max[i - 1]);
    }

    console.log(left_max);

    let right_max: number[] = [];
    right_max[height.length - 1] = height[height.length - 1];
    for (let i = height.length - 2; i >= 0; i--) {
        right_max[i] = Math.max(height[i], right_max[i + 1]);
    }

    console.log(right_max);
    for (let i = 0; i < height.length; i++) {
        const val = Math.min(left_max[i], right_max[i]) - height[i];
        if (val > 0) {
            ans += val;
        }
    }
    return ans;
}

trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]);
