function findWords(words: string[]): string[] {
    const ans: string[] = [];
    const rows = new Map();

    rows.set(1, "qwertyuiop");
    rows.set(2, "asdfghjkl");
    rows.set(3, "zxcvbnm");

    let rowSelected: number | null = null;
    for (const word of words) {
        if (rows.get(1).includes(word.charAt(0).toLowerCase())) {
            rowSelected = 1;
        } else if (rows.get(2).includes(word.charAt(0).toLowerCase())) {
            rowSelected = 2;
        } else rowSelected = 3;

        for (let i = 1; i <= word.length; i++) {
            if (!rows.get(rowSelected).includes(word.charAt(i).toLowerCase())) {
                break;
            }

            if (i === word.length) {
                rowSelected = 0;
            }
        }

        if (rowSelected === 0) {
            ans.push(word);
        }
    }
    return ans;
}

console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
