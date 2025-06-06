function clearDigits(s: string): string {
    let stack: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (Number.isInteger(Number(s.charAt(i)))) {
            stack.pop();
        } else {
            stack.push(s.charAt(i));
        }
    }

    return stack.join("");
}

console.log(clearDigits("1a2b3c"));
console.log();
console.log(clearDigits("xzuzr2ghilydk"));
