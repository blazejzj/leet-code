function maximumSum(arr: number[]): number {
    let noDelete = arr[0];
    let oneDelete = -Infinity;
    let result = arr[0];

    for (let i = 1; i < arr.length; i++) {
        oneDelete = Math.max(oneDelete + arr[i], noDelete);
        noDelete = Math.max(arr[i], noDelete + arr[i]);
        result = Math.max(result, noDelete, oneDelete);
    }

    return maxSoFar;
}
