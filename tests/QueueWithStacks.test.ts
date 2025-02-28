import { QueueWithStacks } from "../src/queue-with-stacks/QueueWithStacks.ts"

describe('QueueWithStacks', () => {
    let queueWithStacks: QueueWithStacks | null = null;

    beforeEach(() => {
        queueWithStacks = new QueueWithStacks();
    });
    test('should add elements to queue', () => {
        queueWithStacks?.add(1);
        queueWithStacks?.add(2);
        queueWithStacks?.add(3);
        expect(queueWithStacks?.size()).toBe(3);
    });
    test('should remove elements from queue', () => {
        queueWithStacks?.add(1);
        queueWithStacks?.add(2);
        queueWithStacks?.add(3);
        expect(queueWithStacks?.remove()).toBe(3);
        expect(queueWithStacks?.remove()).toBe(2);
        expect(queueWithStacks?.remove()).toBe(1);
    }); 
    test('should peek elements from queue', () => {
        queueWithStacks?.add(1);
        queueWithStacks?.add(2);
        queueWithStacks?.add(3);
        expect(queueWithStacks?.peek()).toBe(3);
        expect(queueWithStacks?.peek()).toBe(3);
    });
    test('should check if queue is empty', () => {
        expect(queueWithStacks?.isEmpty()).toBe(true);
        queueWithStacks?.add(1);
        expect(queueWithStacks?.isEmpty()).toBe(false);
    });
})