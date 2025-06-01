function isPalindrome(s: string): boolean {
    let end = s.length - 1;
    for (let i = 0; i <= end; i++) {
        if (s.charAt(i) !== s.charAt(end)) {
            return false;
        }
        end--;
    }
    return true;
}

function partition(s: string): string[][] {
    let result: string[][] = [];

    function traverse(idx: number, arr: string[]) {
        if (idx === s.length) return result.push(arr.slice()); // we've reached the end

        for (let end = idx + 1; end <= s.length; end++) {
            let substring = s.slice(idx, end);
            if (isPalindrome(substring)) {
                arr.push(substring);
                traverse(end, arr);
                arr.pop();
            }
        }
    }

    traverse(0, []);
    return result;
}
