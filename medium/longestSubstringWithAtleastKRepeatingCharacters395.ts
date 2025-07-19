function longestSubstring(s: string, k: number): number {
    function helper(start: number, end: number): number {
        if (end - start < k) return 0;

        const freq: Record<string, number> = {};
        for (let i = start; i < end; i++) {
            const char = s[i];
            freq[char] = (freq[char] || 0) + 1;
        }

        for (let mid = start; mid < end; mid++) {
            if (freq[s[mid]] < k) {
                let midNext = mid + 1;
                while (midNext < end && freq[s[midNext]] < k) {
                    midNext++;
                }
                return Math.max(helper(start, mid), helper(midNext, end));
            }
        }

        return end - start;
    }

    return helper(0, s.length);
}

console.log(longestSubstring("aaabb", 3));
console.log(longestSubstring("abaabc", 2));
