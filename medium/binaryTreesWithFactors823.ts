function numFactoredBinaryTrees(arr: number[]): number {
    const MOD = 1_000_000_000 + 7;
    let ans = 0;
    let map = new Map();
    arr = arr.sort((a, b) => a - b);

    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (!map.has(val)) {
            map.set(val, 1);
        } else {
            map.set(val, map.get(val) + 1);
        }
    }

    for (let root of arr) {
        for (let left of arr) {
            if (left >= root) break;
            if (root % left === 0) {
                let right = root / left;
                if (map.has(right)) {
                    map.set(
                        root,
                        map.get(root) + map.get(left) * map.get(right)
                    );
                }
            }
        }
    }
    ans = Array.from(map.values()).reduce((acc, v) => acc + v, 0);

    return ans % MOD;
}

console.log(numFactoredBinaryTrees([2, 4]));
console.log("");
console.log(numFactoredBinaryTrees([2, 4, 5, 10]));
