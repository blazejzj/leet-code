function findClosestNumber(nums: number[]): number {
    if (nums.length == 1) return nums[0];

    let closestNum: number = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i]) < Math.abs(closestNum)) closestNum = nums[i];
        else if (
            Math.abs(nums[i]) === Math.abs(closestNum) &&
            nums[i] > closestNum
        )
            closestNum = nums[i];
    }
    return closestNum;
}
