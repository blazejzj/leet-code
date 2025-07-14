class MaxHeap {
    heap: number[];

    constructor() {
        this.heap = [];
    }

    getLeftChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 1;
    }

    getRightChildIndex(parentIndex: number): number {
        return 2 * parentIndex + 2;
    }

    getParentIndex(childIndex: number): number {
        return Math.floor((childIndex - 1) / 2);
    }

    hasLeftChild(index: number): boolean {
        return this.getLeftChildIndex(index) < this.heap.length;
    }

    hasRightChild(index: number): boolean {
        return this.getRightChildIndex(index) < this.heap.length;
    }

    hasParent(index: number): boolean {
        return this.getParentIndex(index) >= 0;
    }

    leftChild(index: number): number {
        return this.heap[this.getLeftChildIndex(index)];
    }

    rightChild(index: number): number {
        return this.heap[this.getRightChildIndex(index)];
    }

    parent(index: number): number {
        return this.heap[this.getParentIndex(index)];
    }

    swap(indexOne: number, indexTwo: number): void {
        const temp = this.heap[indexOne];
        this.heap[indexOne] = this.heap[indexTwo];
        this.heap[indexTwo] = temp;
    }

    peek(): number | null {
        if (this.heap.length === 0) {
            return null;
        }
        return this.heap[0];
    }

    remove(): number | null {
        if (this.heap.length === 0) {
            return null;
        }
        const item = this.heap[0];
        this.heap[0] = this.heap[this.heap.length - 1];
        this.heap.pop();
        this.heapifyDown();
        return item;
    }

    add(item: number): void {
        this.heap.push(item);
        this.heapifyUp();
    }

    heapifyUp(): void {
        let index = this.heap.length - 1;
        while (this.hasParent(index) && this.parent(index) < this.heap[index]) {
            this.swap(this.getParentIndex(index), index);
            index = this.getParentIndex(index);
        }
    }

    heapifyDown(): void {
        let index = 0;
        while (this.hasLeftChild(index)) {
            let largerChildIndex = this.getLeftChildIndex(index);
            if (
                this.hasRightChild(index) &&
                this.rightChild(index) > this.leftChild(index)
            ) {
                largerChildIndex = this.getRightChildIndex(index);
            }
            if (this.heap[index] > this.heap[largerChildIndex]) {
                break;
            } else {
                this.swap(index, largerChildIndex);
            }
            index = largerChildIndex;
        }
    }
}

function lastStoneWeight(stones: number[]): number {
    const heap = new MaxHeap();

    for (const stone of stones) {
        heap.add(stone);
    }

    while (heap.heap.length > 1) {
        const y = heap.remove()!;
        const x = heap.remove()!;
        if (y !== x) {
            heap.add(y - x);
        }
    }

    return heap.peek() ?? 0;
}

// Example:
console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));
