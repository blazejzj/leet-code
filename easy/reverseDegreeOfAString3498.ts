function reverseDegree(s: string): number {
    let ans = 0;

    for (let i = 0; i < s.length; i++) {
        ans += (26 - (s.charAt(i).charCodeAt(0) - 97)) * (i + 1);
    }

    return ans;
}

console.log(reverseDegree("abc"));

function reverseDegree2(s: string): number {
    return s.split("").reduce((sum, char, index) => {
        return sum + (26 - (char.charCodeAt(0) - 97)) * (index + 1);
    }, 0);
}

console.log(reverseDegree2("abc"));
