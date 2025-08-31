function longestSubsequence(s: string, k: number): number {
    const n = s.length;

    let zeros = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] === "0") zeros++;
    }

    let value = 0;
    let power = 1;
    let onesTaken = 0;

    for (let i = n - 1; i >= 0; i--) {
        if (s[i] === "1") {
            if (value + power <= k) {
                value += power;
                onesTaken++;
            }
            if (power > k) break;
        }

        power <<= 1;

        if (power > k) {
            break;
        }
    }

    return zeros + onesTaken;
}

console.log(longestSubsequence("1001010", 5));
console.log(longestSubsequence("00101001", 1));
