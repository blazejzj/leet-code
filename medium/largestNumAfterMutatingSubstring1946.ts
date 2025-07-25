function maximumNumber(num: string, change: number[]): string {
    let arr = num.split("");
    let i = 0;

    while (i < arr.length) {
        let digit = parseInt(arr[i]);
        let mapped = change[digit];

        if (mapped > digit) {
            while (i < arr.length) {
                // start mutating
                let currentDigit = parseInt(arr[i]);
                let newDigit = change[currentDigit];

                if (newDigit >= currentDigit) {
                    arr[i] = newDigit.toString();
                    i++;
                } else {
                    break;
                }
            }
            break; // only one mutation is allowed
        } else {
            i++;
        }
    }

    return arr.join("");
}
