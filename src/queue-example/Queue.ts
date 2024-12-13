class Queue<T> {
    private items: T[];

    constructor() {
        this.items = []; // At first the queue is empty
    }

    // Method to add an elmenent to the end of the queue
    enqueue(element: T): void {
        this.items.push(element);
    }

    // Method to remove and returns the first element of the queue
    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items.shift();
    }

    // Method to view the first element without remove it
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    // Method to verify if the queue is empty
    isEmpty(): boolean {
        return this.items.length === 0; // If the array is empty, the queue is empty
    }

      // Method to get the queue size
      size(): number {
        return this.items.length; 
    }

    // Method to clear the queue
    clear(): void {
        this.items = [];
    }


}