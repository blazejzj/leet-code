// function reverseString(s: string[]): void {
//     s.reverse();
// }

function reverseString(s: string[]): void {
    for (let i = 0, j = s.length - 1; i < j; i++, j--) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
    }
}
