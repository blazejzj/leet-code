function reverseStr(s: string, k: number): string {
    let stringArr: string[] = s.split("");

    for (let i = 0; i < stringArr.length; i += 2 * k) {
        let left = i;
        let right = Math.min(i + k - 1, stringArr.length - 1);

        while (left < right) {
            [stringArr[left], stringArr[right]] = [
                stringArr[right],
                stringArr[left],
            ];
            left++;
            right--;
        }
    }

    return stringArr.join("");
}

console.log(reverseStr("abcdefg", 2));
