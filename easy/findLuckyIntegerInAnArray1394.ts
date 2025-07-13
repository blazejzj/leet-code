function findLucky(arr: number[]): number {
    let map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
    }

    let luckyNum = -1;

    for (let key of map.keys()) {
        if (key === map.get(key) && key > luckyNum) {
            luckyNum = key;
        }
    }

    return luckyNum;
}

console.log(findLucky([1, 2, 2, 3, 3, 3]));
console.log(findLucky([1, 1, 3, 3, 3, 3, 5, 5, 5, 5, 5]));
