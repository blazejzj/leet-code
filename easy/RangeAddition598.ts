function maxCount(m: number, n: number, ops: number[][]): number {
    if (ops.length < 1) return m * n;

    let smallestA = m;
    let smallestB = n;

    for (let op of ops) {
        if (op[0] < smallestA) {
            smallestA = op[0];
        }
        if (op[1] < smallestB) {
            smallestB = op[1];
        }
        console.log(op);
    }

    return smallestA * smallestB;
}

console.log(
    maxCount(2, 2, [
        [1, 1],
        [2, 2],
    ])
);
