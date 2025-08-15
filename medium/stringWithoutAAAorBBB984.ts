function strWithout3a3b(a: number, b: number): string {
    let ans: string[] = [];
    let aCounter = 0;
    let bCounter = 0;

    const total = a + b;

    for (let i = 0; i < total; i++) {
        if (aCounter === 2) {
            if (b === 0) break;
            ans.push("b");
            b--;
            bCounter++;
            aCounter = 0;
            continue;
        }

        if (bCounter === 2) {
            if (a === 0) break;
            ans.push("a");
            a--;
            aCounter++;
            bCounter = 0;
            continue;
        }

        if (a >= b && a > 0) {
            ans.push("a");
            a--;
            aCounter++;
            bCounter = 0;
        } else {
            if (b === 0) break;
            ans.push("b");
            b--;
            bCounter++;
            aCounter = 0;
        }
    }

    return ans.join("");
}
