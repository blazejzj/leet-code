function validateStackSequences(pushed: number[], popped: number[]): boolean {
    const stack: number[] = [];
    let popIndex = 0;

    for (const val of pushed) {
        stack.push(val);

        while (stack.length && stack[stack.length - 1] === popped[popIndex]) {
            stack.pop();
            popIndex++;
        }
    }

    return popIndex === popped.length;
}

console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 5, 3, 2, 1]));
console.log(validateStackSequences([1, 2, 3, 4, 5], [4, 3, 5, 1, 2]));
