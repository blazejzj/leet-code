function thousandSeparator(n: number): string {
    let str = n.toString();
    let ans = "";
    let count = 0;

    for (let i = str.length - 1; i >= 0; i--) {
        ans = str.charAt(i) + ans;
        count++;
        if (count === 3 && i !== 0) {
            ans = "." + ans;
            count = 0;
        }
    }

    return ans;
}

console.log(thousandSeparator(987));
console.log(thousandSeparator(1234));
console.log(thousandSeparator(1234333));
console.log(thousandSeparator(123456789));
