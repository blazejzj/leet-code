function countCollisions(directions: string): number {
    if (directions.length <= 1) return 0;

    let left = -1;
    let right = -1;
    let ans = 0;

    for (let i = 0; i < directions.length; i++) {
        const char = directions.charAt(i);
        if (char !== "L") {
            left = i;
            break;
        }
    }

    if (left === -1) return 0;

    for (let i = directions.length - 1; i >= 0; i--) {
        const char = directions.charAt(i);
        if (char !== "R") {
            right = i;
            break;
        }
    }

    for (let i = left; i <= right; i++) {
        const char = directions.charAt(i);
        if (char === "L" || char === "R") {
            ans++;
        }
    }

    if (right === -1) return 0;

    return ans;
}
