function numberOfEmployeesWhoMetTarget(
    hours: number[],
    target: number
): number {
    let ans = 0;
    for (let i = 0; i < hours.length; i++) {
        if (hours[i] >= target) ans++;
    }
    return ans;
}

console.log(numberOfEmployeesWhoMetTarget([0, 1, 2, 3, 4], 2));
console.log(numberOfEmployeesWhoMetTarget([5, 1, 4, 2, 2], 6));
