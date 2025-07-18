function numEquivDominoPairs(dominoes: number[][]): number {
    const pairCounts = new Map<string, number>();
    let totalPairs = 0;

    for (const [a, b] of dominoes) {
        const key = a < b ? `${a},${b}` : `${b},${a}`; // lets always store domino as min max string for equivalence
        const prevCount = pairCounts.get(key) ?? 0;

        totalPairs += prevCount;

        pairCounts.set(key, prevCount + 1);
    }

    return totalPairs;
}
