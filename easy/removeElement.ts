function removeElement(nums: number[], val: number): number {
    nums.splice(0, nums.length, ...nums.filter((num) => num !== val));
    return nums.length;
}

console.log(removeElement([2, 3, 2, 3], 3));
