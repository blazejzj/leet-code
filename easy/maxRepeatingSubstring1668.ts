function maxRepeating(sequence: string, word: string): number {
    let ans = 0;
    for (let i = 0; i <= sequence.length - word.length; i++) {
        let count: number = 0;
        let j: number = i;
        while (sequence.slice(j, j + word.length) === word) {
            count++;
            j += word.length;
        }
        ans = Math.max(count, ans);
    }
    return ans;
}

console.log(maxRepeating("ababc", "ab"));
console.log(maxRepeating("ababc", "ba"));
console.log(maxRepeating("ababc", "ac"));
