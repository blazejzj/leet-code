function wordPattern(pattern: string, s: string): boolean {
    let stringArr: string[] = s.split(" ");
    let patternArr: string[] = pattern.split("");

    if (patternArr.length !== stringArr.length) return false;

    const patternMap = new Map();
    const stringMap = new Map();

    for (let i = 0; i < patternArr.length; i++) {
        const p = patternArr[i];
        const s = stringArr[i];

        if (
            (patternMap.has(p) && patternMap.get(p) !== s) ||
            (stringMap.has(s) && stringMap.get(s) !== p)
        ) {
            return false;
        }
        patternMap.set(p, s);
        stringMap.set(s, p);
    }

    return true;
}

console.log(wordPattern("abba", "dog cat cat dog"));
console.log(wordPattern("abba", "dog dog dog dog"));
