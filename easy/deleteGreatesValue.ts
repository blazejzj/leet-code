function deleteGreatestValue(grid: number[][]): number {
    let answer = 0;
    const sortedGrid = grid.map((grid) =>
        grid.sort(function compareFn(a: number, b: number) {
            if (a > b) return -1;
            else if (b > a) return 1;
            return 0;
        })
    );
    for (let i = sortedGrid[0].length; i > 0; i--) {
        let gridMax = 0;
        for (let j = 0; j < sortedGrid.length; j++) {
            let rowMax = sortedGrid[j].shift();
            if (rowMax! > gridMax) {
                gridMax = rowMax;
            }
        }
        answer += gridMax;
    }
    return answer;
}

console.log(
    deleteGreatestValue([
        [9, 81],
        [33, 17],
    ])
);
