import { Stack } from "../Stack.ts";

export class ValidParenthesis
{
    isValid(s: string): boolean
    {
        let symbolsStack: Stack<string> = new Stack<string>();

        for (const c of s) {
            checkBadSymbol(c);
            if (c == '{' || c == '[' || c == '(') {
                symbolsStack.push(getOpposite(c));
            } else {
                if (symbolsStack.isEmpty() || symbolsStack.pop() !== c) {
                    return false;
                }
            }
        }

        return symbolsStack.isEmpty();

    }
}

function getOpposite(c: string): string {
    if (c == '{')
        return '}';
    if (c == '[')
        return ']';
    if (c == '(')
        return ')';

    return '';
}

function checkBadSymbol(c: string) {
    const validSymbols = ['{', '}', '[', ']', '(', ')'];
    if (!validSymbols.includes(c)) {
        throw new Error(`Bad symbol: ${c}`);
    }
}

