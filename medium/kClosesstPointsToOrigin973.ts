function compareFn(a: number, b: number) {
    return a[0] - b[0];
}
function kClosest(points: number[][], k: number): number[][] {
    let distancesWithPoints: any = [];
    for (let p of points) {
        let xSquared = p[0] * p[0];
        let ySquared = p[1] * p[1];
        let distance = xSquared + ySquared;
        distancesWithPoints.push([distance, p]);
    }

    distancesWithPoints.sort(compareFn);
    distancesWithPoints = distancesWithPoints.slice(0, k);
    let newDistances: any = [];

    for (let p of distancesWithPoints) {
        newDistances.push(p[1]);
    }

    return newDistances;
}

kClosest(
    [
        [2, 0],
        [1, 2],
        [3, 4],
    ],
    2
);
