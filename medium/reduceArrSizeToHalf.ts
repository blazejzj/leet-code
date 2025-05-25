function minSetSize(arr: number[]): number {
    let map = new Map();
    let arrLength = arr.length;
    const goal = arr.length / 2;

    for (let i = 0; i < arrLength; i++) {
        if (!map.has(arr[i])) {
            map.set(arr[i], 1);
        } else {
            map.set(arr[i], map.get(arr[i]) + 1);
        }
    }

    let removed = 1;
    let values = Array.from(map.values()).sort((a, b) => b - a);

    for (let i = 0; i < arr.length - 1; i++) {
        arrLength -= values[i];
        if (arrLength <= goal) {
            return removed;
        }
        removed++;
    }

    return removed;
}

console.log(minSetSize([3, 3, 3, 3, 5, 5, 5, 2, 2, 7]));
console.log();
console.log(minSetSize([7, 7, 7, 7, 7, 7]));
