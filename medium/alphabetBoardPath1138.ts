function getCharPosition(char: string): [number, number] {
    const index = char.charCodeAt(0) - "a".charCodeAt(0);
    const row = Math.floor(index / 5);
    const col = index % 5;
    return [row, col];
}

function alphabetBoardPath(target: string): string {
    let result: string = "";

    let currRow: number = 0;
    let currCol: number = 0;

    for (const char of target) {
        const [targetRow, targetCol] = getCharPosition(char);

        if (char === "z") {
            while (currCol > targetCol) {
                result += "L";
                currCol--;
            }
            while (currRow < targetRow) {
                result += "D";
                currRow++;
            }
        } else {
            while (currRow > targetRow) {
                result += "U";
                currRow--;
            }
            while (currRow < targetRow) {
                result += "D";
                currRow++;
            }
            while (currCol > targetCol) {
                result += "L";
                currCol--;
            }
            while (currCol < targetCol) {
                result += "R";
                currCol++;
            }
        }
        result += "!";
    }

    return result;
}
