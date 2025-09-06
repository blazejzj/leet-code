export function maximumLengthSubstring(s: string): number {
    const map = new Map<string, number>();
    let left = 0;
    let ans = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        map.set(char, (map.get(char) ?? 0) + 1);

        while ((map.get(char) ?? 0) > 2) {
            const leftCh = s[left];
            map.set(leftCh, (map.get(leftCh) ?? 0) - 1);
            left++;
        }

        ans = Math.max(ans, right - left + 1);
    }

    return ans;
}

console.log(maximumLengthSubstring("bcbbbcba"));
console.log(maximumLengthSubstring("aaaa"));
