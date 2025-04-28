# Queue

## Definition

A **queue** is a **FIFO** (First In, First Out) data structure, meaning the first element added is the first one to be removed.  
Imagine a line at a bank: the first person to arrive is the first to be served.

## Common Operations

- **Enqueue**: Add an element to the end of the queue.  
- **Dequeue**: Remove the element from the front of the queue.  
- **Peek**: View the front element without removing it.

## Uses

- Task management in operating systems.  
- Implementation of buffers.  
- Event simulation.

---

## Example of a Queue in TypeScript

```ts
class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(element: T): void {
        this.items.push(element);
    }

    dequeue(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items.shift();
    }

    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }

    clear(): void {
        this.items = [];
    }
}

// Example of using the queue
const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());      // Prints 10
console.log(queue.dequeue());   // Prints 10
console.log(queue.dequeue());   // Prints 20
console.log(queue.size());      // Prints 1

queue.clear();                  // Clears the queue
console.log(queue.isEmpty());   // Prints true
```

## Comparison Table

## Comparison Table

| Feature            | Linked Lists             | Stacks                         | Queues                        |
|--------------------|--------------------------|--------------------------------|-------------------------------|
| **Access order**   | Any                      | LIFO (Last In First Out)       | FIFO (First In First Out)     |
| **Common operations** | Add, remove, search     | Push, pop, peek                | Enqueue, dequeue, peek        |
| **Uses**           | Flexible store of data   | Call management, undo/redo     | Task management, buffers      |
