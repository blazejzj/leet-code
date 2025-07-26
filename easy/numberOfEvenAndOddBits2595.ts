function evenOddBit(n: number): number[] {
    let bitArr: number[] = [];
    while (n >= 1) {
        let remainder = n % 2;
        bitArr.push(remainder);
        n = Math.floor(n / 2);
    }

    let even = 0;
    let odd = 0;
    for (let i = 0; i < bitArr.length; i++) {
        if (bitArr[i] === 1) {
            if (i % 2 === 0) {
                even++;
            } else {
                odd++;
            }
        }
    }

    return [even, odd];
}

console.log(evenOddBit(50));
console.log(evenOddBit(2));
