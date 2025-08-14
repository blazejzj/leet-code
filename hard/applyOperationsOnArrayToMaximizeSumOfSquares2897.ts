function maxSum(nums: number[], k: number): number {
    const MOD = 1000000007n;

    let maxBit = 0;
    for (const num of nums) {
        if (num > 0) {
            const bitsNeeded = Math.floor(Math.log2(num)) + 1;
            if (bitsNeeded > maxBit) {
                maxBit = bitsNeeded;
            }
        }
    }

    if (maxBit === 0) return 0;

    const bitCount: number[] = new Array(maxBit).fill(0);
    for (const num of nums) {
        let value = num;
        let bitIndex = 0;

        while (value > 0) {
            if ((value & 1) === 1) {
                bitCount[bitIndex] += 1;
            }
            value >>>= 1;
            bitIndex += 1;
        }
    }

    const builtNumbers: bigint[] = [];

    for (let round = 0; round < nums.length; round++) {
        let currentValue = 0n;

        for (let bitIndex = 0; bitIndex < maxBit; bitIndex++) {
            if (bitCount[bitIndex] > 0) {
                currentValue |= 1n << BigInt(bitIndex);
                bitCount[bitIndex] -= 1;
            }
        }

        if (currentValue === 0n) break;
        builtNumbers.push(currentValue);
    }

    builtNumbers.sort((a, b) => (a > b ? -1 : a < b ? 1 : 0));

    const takeCount = Math.min(k, builtNumbers.length);
    let result = 0n;

    for (let i = 0; i < takeCount; i++) {
        const square = builtNumbers[i] * builtNumbers[i];
        result = (result + (square % MOD)) % MOD;
    }

    return Number(result);
}

console.log(maxSum([2, 6, 5, 8], 2));
console.log(maxSum([4, 5, 4, 7], 3));
