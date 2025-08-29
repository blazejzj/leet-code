function nthUglyNumber(n: number, a: number, b: number, c: number): number {
    const N = BigInt(n);
    const A = BigInt(a),
        B = BigInt(b),
        C = BigInt(c);

    const gcd = (x: bigint, y: bigint): bigint => {
        while (y !== 0n) {
            const t = x % y;
            x = y;
            y = t;
        }
        return x;
    };

    const lcm = (x: bigint, y: bigint): bigint => (x / gcd(x, y)) * y;

    const AB = lcm(A, B);
    const AC = lcm(A, C);
    const BC = lcm(B, C);
    const ABC = lcm(AB, C);

    const count = (x: bigint): bigint =>
        x / A + x / B + x / C - x / AB - x / AC - x / BC + x / ABC;

    let lo = 1n;
    let hi = BigInt(Math.min(a, b, c)) * N;

    while (lo < hi) {
        const mid = (lo + hi) >> 1n;
        if (count(mid) >= N) {
            hi = mid;
        } else {
            lo = mid + 1n;
        }
    }

    return Number(lo);
}

console.log(nthUglyNumber(3, 2, 3, 5));
console.log(nthUglyNumber(4, 2, 3, 4));
