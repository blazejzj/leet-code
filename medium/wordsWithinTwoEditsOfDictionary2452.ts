function twoEditWords(queries: string[], dictionary: string[]): string[] {
    function possibleToEdit(query: string, dictWord: string): boolean {
        let requiredEdits = 0;

        for (let i = 0; i < query.length; i++) {
            if (query.charAt(i) !== dictWord.charAt(i)) {
                requiredEdits++;
                if (requiredEdits > 2) return false;
            }
        }
        return true;
    }

    let set = new Set();
    let ans: string[] = [];

    // populate with all the strings
    for (let word of dictionary) {
        if (!set.has(word)) {
            set.add(word);
        }
    }

    for (let word of queries) {
        if (set.has(word)) {
            ans.push(word);
        } else {
            for (let dictWord of dictionary) {
                if (possibleToEdit(word, dictWord)) {
                    ans.push(word);
                    break;
                }
            }
        }
    }
    return ans;
}

console.log(
    twoEditWords(["word", "note", "ants", "wood"], ["wood", "note", "wood"])
);

console.log(twoEditWords(["yes"], ["not"]));
