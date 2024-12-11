export class Stack<T> {
    private items: T[]; //Array to save the elements

    constructor() {
        this.items = [];
    }

    // Method to add an element to the stack (push)
    push(element: T): void {
        this.items.push(element);
    }

    // Method to remove and get the top element (pop)
    pop(): T | undefined {
        if (this.isEmpty()) {
            return undefined; // If is empty, return undefined
        }
        
        return this.items.pop();
    }

    // Method to view the top element without removing it
    peek(): T | undefined {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.items[this.items.length -1]; //Returns the last one
    }

    // Method to verify if the stack is empty
    isEmpty(): boolean {
        return this.items.length === 0; // Si el arreglo está vacío, la pila también lo está
    }

    // Method to get the stack size
    size(): number {
        return this.items.length;
    }

    // Method to empty the stack
    clear(): void {
        this.items = [];
    }
}