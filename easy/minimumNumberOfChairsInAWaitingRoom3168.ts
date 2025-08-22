function minimumChairs(s: string): number {
    let ans = 0;
    let potentialAnswer = 0;

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) === "E") {
            potentialAnswer++;
        } else {
            potentialAnswer--;
        }
        if (potentialAnswer > ans) ans = potentialAnswer;
    }
    return ans;
}

console.log(minimumChairs("EEEEEEE"));
console.log(minimumChairs("ELELEEL"));
console.log(minimumChairs("ELEELEELLL"));
