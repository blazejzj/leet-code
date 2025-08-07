function countCharacters(words: string[], chars: string): number {
    let ans = 0;
    let map = new Map();

    // populate map
    for (let i = 0; i < chars.length; i++) {
        if (!map.has(chars.charAt(i))) {
            map.set(chars.charAt(i), 1);
        } else {
            map.set(chars.charAt(i), map.get(chars.charAt(i)) + 1);
        }
    }

    for (let word of words) {
        let charMap = new Map();
        for (let char of word) {
            charMap.set(char, (charMap.get(char) || 0) + 1);
        }
        let good = true;
        for (let [char, count] of charMap) {
            if ((map.get(char) || 0) < count) {
                good = false;
                break;
            }
        }
        if (good) {
            ans += word.length;
        }
    }

    return ans;
}

console.log(countCharacters(["cat", "bt", "hat", "tree"], "atach"));
console.log(countCharacters(["hello", "world", "leetcode"], "welldonehoneyr"));
