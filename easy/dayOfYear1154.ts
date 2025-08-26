function dayOfYear(date: string): number {
    const dateObj: Date = new Date(date);
    const startOfYear: Date = new Date(dateObj.getFullYear(), 0, 0);
    const diff: number = dateObj.getTime() - startOfYear.getTime();
    const oneDay: number = 1000 * 60 * 60 * 24;

    return Math.floor(diff / oneDay);
}

console.log(dayOfYear("2019-01-09"));
console.log(dayOfYear("2019-02-10"));
