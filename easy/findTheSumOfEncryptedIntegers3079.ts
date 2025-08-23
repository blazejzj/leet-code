function sumOfEncryptedInt(nums: number[]): number {
    let ans = 0;
    nums.map((num) => {
        const digits = num.toString().split("").map(Number);
        const highest = Math.max(...digits);
        ans += Number(highest.toString().repeat(digits.length));
    });
    return ans;
}

console.log(sumOfEncryptedInt([1, 2, 3]));
console.log(sumOfEncryptedInt([10, 21, 31]));
