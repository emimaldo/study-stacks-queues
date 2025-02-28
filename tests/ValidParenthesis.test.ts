import { ValidParenthesis } from "../src/valid-parenthesis/ValidParenthesis.ts";

describe('ValidParenthesis', () => {
    let validParenthesis: ValidParenthesis | null = null;

    beforeEach(() => {
        validParenthesis = new ValidParenthesis();
    });
    test('should return true for valid parenthesis', () => {
        expect(validParenthesis?.isValid("()")).toBe(true);
        expect(validParenthesis?.isValid("()[]{}")).toBe(true);
        expect(validParenthesis?.isValid("{[]}")).toBe(true);
    });
    test('should return false for invalid parenthesis', () => {
        expect(validParenthesis?.isValid("(]")).toBe(false);
        expect(validParenthesis?.isValid("([)]")).toBe(false);
    });
    test('should return an error for bad symbol', () => {
        expect(() => validParenthesis?.isValid("a")).toThrow("Bad symbol: a");
    });
})