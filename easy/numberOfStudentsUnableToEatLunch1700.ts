function countStudents(students: number[], sandwiches: number[]): number {
    let queue = [... students]

    while (queue.length > 0) {
        if (queue[0] === sandwiches[0]) {
            queue.shift()
            sandwiches.shift()
        }
        else {
            queue.push(queue.shift()!)
        }

        if (queue.every(student => student !== sandwiches[0])) {
            break
        }
    }
    return queue.length;
}
