import { Stack } from "./stack-example/Stack.js";

const stack = new Stack<number>();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek()); // Imprime 30 (el último elemento)

console.log(stack.pop());  // Imprime 30 (y lo quita de la pila)
console.log(stack.pop());  // Imprime 20
console.log(stack.size()); // Imprime 1 (sólo queda 1 elemento en la pila)

stack.clear();             // Vacía la pila
console.log(stack.isEmpty()); // Imprime true (la pila está vacía)
