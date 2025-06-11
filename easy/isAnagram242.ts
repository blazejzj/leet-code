function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    let count: { [key: string]: number } = {};

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        count[char] = (count[char] || 0) + 1;
    }

    for (let i = 0; i < t.length; i++) {
        const char = t.charAt(i);
        if (!count[char]) return false;
        count[char]--;
    }

    return true;
}
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));
