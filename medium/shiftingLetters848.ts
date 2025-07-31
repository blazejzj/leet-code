function shiftingLetters(s: string, shifts: number[]): string {
    let shiftIndex = shifts.length - 1;
    let shiftChars = shifts[shiftIndex];
    let charArr = s.split("");

    for (let i = s.length - 1; i >= 0; i--) {
        let originalIndex = charArr[i].charCodeAt(0) - 97;
        let newIndex = (originalIndex + shiftChars) % 26;
        charArr[i] = String.fromCharCode(97 + newIndex);

        shiftIndex--;
        shiftChars += shifts[shiftIndex];
        shiftChars %= 26;
    }

    return charArr.join("");
}

console.log(shiftingLetters("abc", [3, 5, 9]));
console.log(shiftingLetters("aaa", [1, 2, 3]));
console.log(shiftingLetters("bad", [10, 20, 30]));
