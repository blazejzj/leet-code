function minOperations(boxes: string): number[] {
    const n = boxes.length;
    const out = Array<number>(n).fill(0);

    let carry = 0;
    let count = 0;
    for (let i = 0; i < n; i++) {
        out[i] += carry;
        if (boxes[i] === "1") count++;
        carry += count;
    }

    carry = 0;
    count = 0;
    for (let i = n - 1; i >= 0; i--) {
        out[i] += carry;
        if (boxes[i] === "1") count++;
        carry += count;
    }

    return out;
}

console.log(minOperations("110"));
console.log(minOperations("001011"));
