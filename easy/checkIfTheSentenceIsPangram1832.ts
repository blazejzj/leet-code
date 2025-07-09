function checkIfPangram(sentence: string): boolean {
    const set = new Set<string>();
    let totalChars = 0;

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence.charAt(i);
        if (!set.has(char)) {
            set.add(char);
            totalChars++;
        }
    }

    return totalChars === 26;
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
