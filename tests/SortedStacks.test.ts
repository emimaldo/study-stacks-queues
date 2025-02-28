import { SortedStack } from "../src/sorted-stack/SortedStack.ts";   
import { Stack } from "../src/Stack.ts";

describe ('SortedStacks', () => {
    let sortedStacks: SortedStack | null = null;

    beforeEach(() => {
        sortedStacks = new SortedStack();
    });
    test('should return a sorted stack', () => {
        const stack = new Stack<number>();
        stack.push(3);
        stack.push(1);
        stack.push(2);
        stack.push(5);
        stack.push(4);

        const sortedStack = sortedStacks?.sort(stack);

        expect(sortedStack?.pop()).toBe(1);
        expect(sortedStack?.pop()).toBe(2);
        expect(sortedStack?.pop()).toBe(3);
        expect(sortedStack?.pop()).toBe(4);
        expect(sortedStack?.pop()).toBe(5);
    });
    test('should return a sorted stack with duplicates', () => {
        const stack = new Stack<number>();
        stack.push(3);
        stack.push(1);
        stack.push(2);
        stack.push(5);
        stack.push(4);
        stack.push(5);
        stack.push(4);

        const sortedStack = sortedStacks?.sort(stack);

        expect(sortedStack?.pop()).toBe(1);
        expect(sortedStack?.pop()).toBe(2);
        expect(sortedStack?.pop()).toBe(3);
        expect(sortedStack?.pop()).toBe(4);
        expect(sortedStack?.pop()).toBe(4);
        expect(sortedStack?.pop()).toBe(5);
        expect(sortedStack?.pop()).toBe(5);
    });
    test('should return a sorted stack with negative numbers', () => {
        const stack = new Stack<number>();
        stack.push(-3);
        stack.push(-1);
        stack.push(-2);
        stack.push(-5);
        stack.push(-4);

        const sortedStack = sortedStacks?.sort(stack);

        expect(sortedStack?.pop()).toBe(-5);
        expect(sortedStack?.pop()).toBe(-4);
        expect(sortedStack?.pop()).toBe(-3);
        expect(sortedStack?.pop()).toBe(-2);
        expect(sortedStack?.pop()).toBe(-1);
    });
    test('should return a sorted stack with negative and positive numbers', () => {
        const stack = new Stack<number>();
        stack.push(-3);
        stack.push(1);
        stack.push(-2);
        stack.push(5);
        stack.push(-4);

        const sortedStack = sortedStacks?.sort(stack);

        expect(sortedStack?.pop()).toBe(-4);
        expect(sortedStack?.pop()).toBe(-3);
        expect(sortedStack?.pop()).toBe(-2);
        expect(sortedStack?.pop()).toBe(1);
        expect(sortedStack?.pop()).toBe(5);
    });
})  
    