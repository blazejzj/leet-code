function checkMove(
    board: string[][],
    rMove: number,
    cMove: number,
    color: string
): boolean {
    if (board[rMove][cMove] !== ".") return false;

    const n = 8;
    const opp = color === "W" ? "B" : "W";
    const dirs = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1], // vertical & horizontal
        [-1, -1],
        [-1, 1],
        [1, -1],
        [1, 1], // diaognsl
    ];

    const inBounds = (r: number, c: number) =>
        r >= 0 && r < n && c >= 0 && c < n;

    for (const [dr, dc] of dirs) {
        let r = rMove + dr,
            c = cMove + dc;
        let seenOpp = false;

        while (inBounds(r, c) && board[r][c] === opp) {
            seenOpp = true;
            r += dr;
            c += dc;
        }

        if (seenOpp && inBounds(r, c) && board[r][c] === color) {
            return true;
        }
    }

    return false;
}
