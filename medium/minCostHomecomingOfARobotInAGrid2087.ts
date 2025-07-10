function minCost(
    startPos: number[],
    homePos: number[],
    rowCosts: number[],
    colCosts: number[]
): number {
    let totalCost = 0;

    let startRow = startPos[0];
    let startCol = startPos[1];
    let homeRow = homePos[0];
    let homeCol = homePos[1];

    let rowStep = startRow < homeRow ? 1 : startRow > homeRow ? -1 : 0;
    let colStep = startCol < homeCol ? 1 : startCol > homeCol ? -1 : 0;

    while (startRow !== homeRow) {
        startRow += rowStep;
        totalCost += rowCosts[startRow];
    }

    while (startCol !== homeCol) {
        startCol += colStep;
        totalCost += colCosts[startCol];
    }

    return totalCost;
}
