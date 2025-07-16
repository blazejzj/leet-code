function oddCells(m: number, n: number, indices: number[][]): number {
    let cols: number[] = Array(n).fill(0);
    let rows: number[] = Array(m).fill(0);

    for (let [ri, ci] of indices) {
        rows[ri] += 1;
        cols[ci] += 1;
    }

    let odd: number = 0;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if ((rows[i] + cols[j]) % 2 === 1) {
                odd++;
            }
        }
    }
    return odd;
}

console.log(
    oddCells(2, 3, [
        [0, 1],
        [1, 1],
    ])
);
