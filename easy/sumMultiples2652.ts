function sumOfMultiples(n: number): number {
    if (n === 1) return 0;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
            sum += i;
        }
    }
    return sum;
}
