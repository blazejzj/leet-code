function countPrefixSuffixPairs(words: string[]): number {
    function isPrefixAndSuffix(str1: string, str2: string) {
        if (str1.length > str2.length) return false;
        return str2.startsWith(str1) && str2.endsWith(str1);
    }

    let ans = 0;
    for (let i = 0; i < words.length; i++) {
        for (let j = i + 1; j < words.length; j++) {
            if (isPrefixAndSuffix(words[i], words[j])) ans++;
        }
    }
    if (words.length < 2) return ans;

    return ans;
}

console.log(countPrefixSuffixPairs(["a", "aba", "ababa", "aa"]));
console.log(countPrefixSuffixPairs(["pa", "papa", "ma", "mama"]));
