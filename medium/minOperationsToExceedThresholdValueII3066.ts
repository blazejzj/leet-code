class MinHeap {
    private heap: number[];

    constructor(nums: number[] = []) {
        this.heap = [];
        nums.forEach(num => this.insert(num));
    }

    private swap(i: number, j: number) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    private bubbleUp(index: number) {
        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);
            if (this.heap[parent] > this.heap[index]) {
                this.swap(parent, index);
                index = parent;
            } else {
                break;
            }
        }
    }

    private bubbleDown(index: number) {
        const length = this.heap.length;
        while (true) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = index;

            if (left < length && this.heap[left] < this.heap[smallest]) {
                smallest = left;
            }
            if (right < length && this.heap[right] < this.heap[smallest]) {
                smallest = right;
            }
            if (smallest !== index) {
                this.swap(index, smallest);
                index = smallest;
            } else {
                break;
            }
        }
    }

    insert(val: number) {
        this.heap.push(val);
        this.bubbleUp(this.heap.length - 1);
    }

    extractMin(): number | undefined {
        if (this.heap.length === 0) return undefined;
        const min = this.heap[0];
        const end = this.heap.pop();
        if (this.heap.length > 0 && end !== undefined) {
            this.heap[0] = end;
            this.bubbleDown(0);
        }
        return min;
    }

    peek(): number | undefined {
        return this.heap[0];
    }

    size(): number {
        return this.heap.length;
    }
}

function minOperations(nums: number[], k: number): number {
    const heap = new MinHeap(nums);
    let operations = 0;

    while (heap.size() > 1 && heap.peek()! < k) {
        const x = heap.extractMin()!;
        const y = heap.extractMin()!;
        const newVal = Math.min(x, y) * 2 + Math.max(x, y);
        heap.insert(newVal);
        operations++;
    }

    // so after we finish the loop, check if smallest (maybe ojnly) elem is >= k
    if (heap.peek() !== undefined && heap.peek() >= k) {
        return operations;
    }
    
    return -1;
}