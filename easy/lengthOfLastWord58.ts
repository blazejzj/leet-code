function lengthOfLastWord(s: string): number {
    let arr: string[] = s.split(" ").filter((s) => s !== "");
    return arr[arr.length - 1].length;
}

lengthOfLastWord("   fly me   to   the moon  ");
