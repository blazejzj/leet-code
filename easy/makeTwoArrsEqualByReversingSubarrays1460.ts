function canBeEqual(target: number[], arr: number[]): boolean {
    if (target.length !== arr.length) return false;
    if (target.length === 1) {
        if (target[0] === arr[0]) {
            return true;
        } else {
            return false;
        }
    }
    target.sort((a, b) => a - b);
    arr.sort((a, b) => a - b);

    for (let i = 0; i < target.length; i++) {
        if (target[i] !== arr[i]) {
            return false;
        }
    }
    return true;
}
