function canConstruct(ransomNote: string, magazine: string): boolean {
    let letterStorage: { [key: string]: number } = {};

    for (let i = 0; i < magazine.length; i++) {
        const char = magazine.charAt(i);
        letterStorage[char] = (letterStorage[char] || 0) + 1;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        const char = ransomNote.charAt(i);
        if (!letterStorage[char]) return false;
        letterStorage[char]--;
    }

    return true;
}

console.log(canConstruct("a", "a"));
console.log(canConstruct("aa", "ab"));
console.log(canConstruct("aab", "aa"));
