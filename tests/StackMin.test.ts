import { StackMin } from "../src/stack-min/StackMin.ts";

describe('StackMin', () => {
    let stackMin: StackMin | null = null;

    beforeEach(() => {
        stackMin = new StackMin();
    });
    test('should return the minimum value in the stack', () => {
        stackMin?.push(5);
        stackMin?.push(6);
        stackMin?.push(3);
        stackMin?.push(7);
        stackMin?.push(2);
        stackMin?.push(1);

        expect(stackMin?.min()).toBe(1);
    });
    test('should return the minimum value in the stack after popping', () => {
        stackMin?.push(5);
        stackMin?.push(6);
        stackMin?.push(3);
        stackMin?.push(7);
        stackMin?.push(2);
        stackMin?.push(1);

        stackMin?.pop();
        stackMin?.pop();
        stackMin?.pop();

        expect(stackMin?.min()).toBe(3);
    });
    test('should return the minimum value in the stack after pushing and popping', () => {
        stackMin?.push(5);
        stackMin?.push(6);
        stackMin?.push(3);
        stackMin?.push(7);
        stackMin?.push(2);
        stackMin?.push(1);

        stackMin?.pop();
        stackMin?.pop();
        stackMin?.pop();
        stackMin?.pop();
        stackMin?.pop();

        expect(stackMin?.min()).toBe(5);
    });
});