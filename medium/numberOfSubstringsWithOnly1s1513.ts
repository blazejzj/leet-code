function numSub(s: string): number {
    const MOD = 1_000_000_007;
    let count = 0;
    let result = 0;

    for (let char of s) {
        if (char === "1") {
            count++;
            result = (result + count) % MOD;
        } else {
            count = 0;
        }
    }

    return result;
}

console.log(numSub("001011"));
console.log(numSub("101"));
console.log(numSub("111111"));
