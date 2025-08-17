function uniquePathsWithObstacles(grid: number[][]): number {
    function isObstacle(g: number[][], r: number, c: number): boolean {
        return g[r][c] === 1;
    }
    const rows = grid.length;
    const cols = rows ? grid[0].length : 0;

    if (!rows || !cols) return 0;
    if (isObstacle(grid, 0, 0) || isObstacle(grid, rows - 1, cols - 1))
        return 0;

    const dp: number[][] = Array.from({ length: rows }, () =>
        Array<number>(cols).fill(0)
    );

    dp[0][0] = 1;

    for (let c = 1; c < cols; c++) {
        dp[0][c] = isObstacle(grid, 0, c) ? 0 : dp[0][c - 1];
    }

    for (let r = 1; r < rows; r++) {
        dp[r][0] = isObstacle(grid, r, 0) ? 0 : dp[r - 1][0];
    }

    for (let r = 1; r < rows; r++) {
        for (let c = 1; c < cols; c++) {
            dp[r][c] = isObstacle(grid, r, c) ? 0 : dp[r - 1][c] + dp[r][c - 1];
        }
    }

    return dp[rows - 1][cols - 1];
}

console.log(
    uniquePathsWithObstacles([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
    ])
);

console.log(
    uniquePathsWithObstacles([
        [0, 1],
        [0, 0],
    ])
);
