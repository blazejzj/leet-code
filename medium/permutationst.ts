function permute(nums: number[]): number[][] {
    let result: number[][] = [];
    // base case to avoid loopin when only 1 element inside the list
    if (nums.length === 1) return [nums];

    function recurse(cNums: number[], uNums: number[]) {
        if (uNums.length === nums.length) {
            result.push(cNums.slice());
        }

        for (let i = 0; i < nums.length; i++) {
            if (!uNums.includes(nums[i])) {
                cNums.push(nums[i]);
                uNums.push(nums[i]);
                recurse(cNums, uNums);
                cNums.pop();
                uNums.pop();
            }
        }
    }

    let usedNums = [];
    let currentNums = [];
    recurse(currentNums, usedNums);

    return result;
}

console.log(permute([1, 2, 3, 4]));
