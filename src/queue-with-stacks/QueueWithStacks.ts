import { Deque } from './Deque.ts';
export class QueueWithStacks 
{
    private firstStack: Deque<number>;
    private secondStack: Deque<number>;

    constructor() {
        this.firstStack = new Deque<number>();
        this.secondStack = new Deque<number>();
    }

    add(value: number) : void
    {
        this.firstStack.addFirst(value);
    }

    peek(): number | undefined 
    {
        this.dumpElementsIntoSecondStack();
        return this.secondStack.peekLast();
    }

    remove(): number | undefined 
    {
        this.dumpElementsIntoSecondStack();
        return this.secondStack.removeLast();
    }

    dumpElementsIntoSecondStack() : void
    {
        if (this.secondStack.isEmpty()) {
            while (!this.firstStack.isEmpty()) 
            {
                const element = this.firstStack.removeFirst();
                if (element !== undefined) {
                    this.secondStack.addFirst(element);
                }
            }
        }
        
    }

    isEmpty(): boolean 
    {
        return this.size() === 0;
    }

    size(): number 
    {
        return this.firstStack.size() + this.secondStack.size();
    }

}