import { Stack } from "../Stack.ts";

export class SortedStack
{
    sort(mainStack: Stack<number>): Stack<number> 
    {
        let sortedStack: Stack<number> = new Stack<number>();

        while (!mainStack.isEmpty()) {
            let elementToSort = mainStack.pop();
            let peekedElement = sortedStack.peek();

            if (elementToSort === undefined) {
                continue;
            }


            while (!sortedStack.isEmpty() && peekedElement !== undefined && elementToSort > peekedElement) {
                const poppedElement = sortedStack.pop();
                if (poppedElement !== undefined) {
                    mainStack.push(poppedElement);
                }
                peekedElement = sortedStack.peek();
            }
            
            sortedStack.push(elementToSort);

        }
        
        return sortedStack;
    }
}