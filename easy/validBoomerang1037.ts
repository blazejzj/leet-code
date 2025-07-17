function isBoomerang(points: number[][]): boolean {
    const [x1, y1] = points[0];
    const [x2, y2] = points[1];
    const [x3, y3] = points[2];

    if (
        (x1 === x2 && y1 === y2) ||
        (x1 === x3 && y1 === y3) ||
        (x2 === x3 && y2 === y3)
    ) {
        return false;
    }

    const cross = (x2 - x1) * (y3 - y1) - (y2 - y1) * (x3 - x1);

    return cross !== 0;
}
