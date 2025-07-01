function countCompleteDayPairs(hours: number[]): number {
    const count: Record<number, number> = {};
    let pairs = 0;

    for (let hour of hours) {
        const rem = hour % 24;
        const complement = (24 - rem) % 24;

        if (count[complement]) {
            pairs += count[complement];
        }

        count[rem] = (count[rem] || 0) + 1;
    }

    return pairs;
}
