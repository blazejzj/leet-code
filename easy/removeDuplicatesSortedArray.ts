function removeDuplicates(nums: number[]): number {
    let k = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k]) {
            k++;
            nums[k] = nums[i];
        }
    }
    return k + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
