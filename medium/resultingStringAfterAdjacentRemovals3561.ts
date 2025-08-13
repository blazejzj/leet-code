function resultingString(s: string): string {
    // are two lowercase letters neighbors in the circular alphabet?
    function areNeighbors(x: string, y: string): boolean {
        const a = x.charCodeAt(0);
        const b = y.charCodeAt(0);

        // normal neighbors like a < b or q < r
        const normal = Math.abs(a - b) === 1;

        // circular neighbors a and z in any order
        const circular = (x === "a" && y === "z") || (x === "z" && y === "a");

        return normal || circular;
    }

    const st: string[] = []; // stack alike

    for (let i = 0; i < s.length; i++) {
        const cur = s[i];

        // if the current char forms a consecutive pair with the top of the stack,
        // pop the stack -> remove that leftmost pair, otherwise, push
        if (st.length > 0 && areNeighbors(st[st.length - 1], cur)) {
            st.pop();
        } else {
            st.push(cur);
        }
    }

    return st.join("");
}

console.log(resultingString("abxxzy"));
console.log(resultingString("cazb"));
console.log(resultingString("bazyx"));
console.log(resultingString("hello"));
