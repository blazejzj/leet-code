function numSquares(n: number): number {
    function isPerfectSquare(num: number) {
        let root = Math.floor(Math.sqrt(num));
        return root * root === num;
    }
    if (isPerfectSquare(n)) return 1;

    while (n % 4 === 0) n /= 4;

    if (n % 8 === 7) return 4;

    for (let i = 0; i * i <= n; i++) {
        if (isPerfectSquare(n - i * i)) return 2;
    }
    return 3;
}
