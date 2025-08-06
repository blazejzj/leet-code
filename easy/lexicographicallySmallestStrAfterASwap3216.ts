function getSmallestString(s: string): string {
    let n = s.length;
    let ans = s;

    for (let i = 0; i < n - 1; ++i) {
        if (parseInt(s[i]) % 2 === parseInt(s[i + 1]) % 2) {
            const arr = s.split("");
            [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
            const candidate = arr.join("");
            if (candidate < ans) {
                ans = candidate;
            }
        }
    }
    return ans;
}

console.log(getSmallestString("4321"));
console.log(getSmallestString("1234"));
console.log(getSmallestString("1324"));
