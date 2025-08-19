function lengthOfLongestSubstring(s: string): number {
    let ans = 0;
    let left = 0;
    let seenChars = new Map();

    for (let right = 0; right < s.length; right++) {
        let currChar = s.charAt(right);
        if (seenChars.has(currChar) && seenChars.get(currChar) >= left) {
            left = seenChars.get(currChar) + 1;
        } else {
            ans = Math.max(ans, right - left + 1);
        }
        seenChars.set(currChar, right);
    }

    return ans;
}

console.log(lengthOfLongestSubstring("abcabcbb"));
console.log(lengthOfLongestSubstring("bbbbb"));
console.log(lengthOfLongestSubstring("pwwkew"));
