export class Deque<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    addFirst(element: T): void {
        this.items.unshift(element);
    }

    addLast(element: T): void {
        this.items.push(element);
    }

    removeFirst(): T | undefined {
        return this.items.shift();
    }

    removeLast(): T | undefined {
        return this.items.pop();
    }

    peekFirst(): T | undefined {
        return this.items[0];
    }

    peekLast(): T | undefined {
        return this.items[this.items.length - 1];
    }

    size(): number {
        return this.items.length;
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }
}