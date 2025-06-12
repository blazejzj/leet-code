function firstUniqChar(s: string): number {
    let chars: { [key: string]: number } = {};

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        chars[char] = (chars[char] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        const char = s.charAt(i);
        if (chars[char] === 1) return i;
    }

    return -1;
}

console.log(firstUniqChar("aabb"));
