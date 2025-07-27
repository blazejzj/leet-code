function countAsterisks(s: string): number {
    let insidePair = false;
    let ans = 0;
    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === "|") {
            insidePair = !insidePair;
        } else if (char === "*" && !insidePair) {
            ans++;
        }
    }
    return ans;
}

console.log(countAsterisks("l|*e*et|c**o|*de|"));
console.log(countAsterisks("iamprogrammer"));
console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"));
