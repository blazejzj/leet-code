function truncateSentence(s: string, k: number): string {
    let ans = s.split(" ").splice(0, k).join(" ");
    return ans;
}

console.log(truncateSentence("Hello how are you Contestant", 4));
console.log(truncateSentence("What is the solution to this problem", 4));
