function uncommonFromSentences(s1: string, s2: string): string[] {
    const str1 = s1.split(" ");
    const str2 = s2.split(" ");
    let map = new Map();

    let words: string[] = [];

    for (let word of str1) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }

    for (let word of str2) {
        if (map.has(word)) {
            map.set(word, map.get(word) + 1);
        } else {
            map.set(word, 1);
        }
    }

    for (let word of map.keys()) {
        if (map.get(word) === 1) {
            words.push(word);
        }
    }

    return words;
}

console.log(uncommonFromSentences("this apple is sour", "this apple is sweet"));
