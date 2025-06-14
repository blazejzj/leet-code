function longestPalindrome(s: string): number {
    if (s.length === 1) return 1;

    let maxPalindromeLength: number = 0;
    let oddExisted: boolean = false;
    let count: { [key: string]: number } = {};

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        count[char] = (count[char] || 0) + 1;
    }

    for (let c in count) {
        if (count[c] % 2 === 0) {
            maxPalindromeLength += count[c];
        } else {
            maxPalindromeLength += count[c] - 1;
            oddExisted = true;
        }
    }

    if (oddExisted) return maxPalindromeLength + 1;

    return maxPalindromeLength;
}

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
