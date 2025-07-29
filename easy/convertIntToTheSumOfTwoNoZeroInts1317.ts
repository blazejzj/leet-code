function getNoZeroIntegers(n: number): number[] {
    function hasZero(num: number): boolean {
        return num.toString().includes("0");
    }

    for (let a = 1; a < n; a++) {
        const b = n - a;
        if (!hasZero(a) && !hasZero(b)) {
            return [a, b];
        }
    }

    return [1, n - 1];
}

console.log(getNoZeroIntegers(2));
console.log(getNoZeroIntegers(11));
