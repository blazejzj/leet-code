function minDeletionSize(strs: string[]): number {
    let ans = 0;

    if (strs.length === 0) return ans;
    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j - 1][i] > strs[j][i]) {
                ans++;
                break;
            }
        }
    }

    return ans;
}

console.log(minDeletionSize(["cba", "daf", "ghi"]));
console.log(minDeletionSize(["a", "b"]));
console.log(minDeletionSize(["zyx", "wvu", "tsr"]));
