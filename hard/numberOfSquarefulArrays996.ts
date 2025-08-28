function numSquarefulPerms(nums: number[]): number {
  function isPerfectSquare(x: number): boolean {
    if (x < 0) return false;
    const r = Math.floor(Math.sqrt(x));
    return r * r === x;
  }

  const countMap = new Map<number, number>();
  for (const v of nums) {
    countMap.set(v, (countMap.get(v) || 0) + 1);
  }

  const values: number[] = Array.from(countMap.keys()).sort((a, b) => a - b);

  const neighbors = new Map<number, number[]>();
  for (const a of values) {
    const list: number[] = [];
    for (const b of values) {
      if (isPerfectSquare(a + b)) {
        list.push(b);
      }
    }
    neighbors.set(a, list);
  }

  function encodeCounts(): string {
    const parts: string[] = [];
    for (const v of values) {
      parts.push(String(countMap.get(v) || 0));
    }
    return parts.join(",");
  }

  const totalLen = nums.length;
  const memo = new Map<string, number>();

  function dfs(last: number | null, remaining: number): number {
    if (remaining === 0) {
      return 1; 
    }

    const key = (last === null ? "start" : String(last)) + "|" + encodeCounts();
    const cached = memo.get(key);
    if (cached !== undefined) return cached;

    let ways = 0;

    if (last === null) {
      for (const v of values) {
        const left = countMap.get(v)!;
        if (left === 0) continue;

        countMap.set(v, left - 1);
        ways += dfs(v, remaining - 1);
        countMap.set(v, left);
      }
    } else {
      const nextList = neighbors.get(last)!;
      for (const v of nextList) {
        const left = countMap.get(v)!;
        if (left === 0) continue;

        countMap.set(v, left - 1);
        ways += dfs(v, remaining - 1);
        countMap.set(v, left);
      }
    }

    memo.set(key, ways);
    return ways;
  }

  return dfs(null, totalLen);
}

console.log(numSquarefulPerms([1, 17, 8])); 
console.log(numSquarefulPerms([2, 2, 2])); 
