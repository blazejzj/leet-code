function replaceElements(arr: number[]): number[] {
    let res: number[] = [];
    let highest = -1;
    for (let i = arr.length - 1; i >= 0; i--) {
        res.unshift(highest);
        if (highest < arr[i]) highest = arr[i];
    }
    return res;
}

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
