// interface IStack<T> {
//     push(item: T): void;
//     pop(): T | undefined;
//     peek(): T | undefined;
//     size(): number;
// }

// class Stack<T> implements IStack<T> {
//     private storage: T[] = [];

//     constructor(private capacity: number = Infinity) {}

//     push(item: T): void {
//         if (this.size() === this.capacity) {
//             throw Error(
//                 "Stack has reached max capacity, you cannot add more items"
//             );
//         }
//         this.storage.push(item);
//     }

//     pop(): T | undefined {
//         return this.storage.pop();
//     }

//     peek(): T | undefined {
//         return this.storage[this.size() - 1];
//     }

//     size(): number {
//         return this.storage.length;
//     }

//     isEmpty(): boolean {
//         return this.size() === 0;
//     }
// }

// function isLeft(s: string) {
//     const left: string[] = ["{", "[", "("];
//     if (left.includes(s)) return true;
//     return false;
// }

// function isRight(s: string) {
//     const right: string[] = ["]", ")", "}"];
//     if (right.includes(s)) return true;
//     return false;
// }

// function matches(left: string, right: string) {
//     if (left === "(" && right === ")") return true;
//     else if (left === "[" && right === "]") return true;
//     else if (left === "{" && right === "}") return true;

//     return false;
// }

// function isValid(s: string): boolean {
//     const arr: string[] = s.split("");
//     const stack = new Stack<string>();

//     for (let i = 0; i < arr.length; i++) {
//         if (isLeft(arr[i])) {
//             stack.push(arr[i]);
//         } else if (isRight(arr[i])) {
//             if (stack.isEmpty()) {
//                 return false;
//             }
//             const left = stack.pop();
//             if (matches(left!, arr[i])) {
//                 continue;
//             } else {
//                 return false;
//             }
//         }
//         console.log(stack);
//     }
//     return !stack.isEmpty() ? false : true;
// }

function isValid(s: string): boolean {
    let parts: string[] = [];

    for (const p of s) {
        if (p == "(" || p == "{" || p == "[") parts.push(p);
        else if (p == ")" && parts.at(-1) == "(") parts.pop();
        else if (p == "}" && parts.at(-1) == "{") parts.pop();
        else if (p == "]" && parts.at(-1) == "[") parts.pop();
        else return false;
    }
    return parts.length === 0;
}
