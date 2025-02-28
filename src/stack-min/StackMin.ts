import { Stack } from "../Stack.ts";

export class StackMin 
{
    private valuesStack: Stack<number> = new Stack<number>();
    private minStack: Stack<number> = new Stack<number>();

    push(value: number): void 
    {
        this.valuesStack.push(value);

        if (this.minStack.isEmpty() || value <= this.minStack.peek()!) {
            this.minStack.push(value);
        }
    }

    pop(): number | undefined 
    {
        const value = this.valuesStack.pop();

        if (value === this.minStack.peek()) {
            this.minStack.pop();
        }

        return value;
    }

    min(): number | undefined 
    {
        return this.minStack.peek();
    }

}