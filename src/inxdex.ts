import { Stack } from "./Stack.ts";

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

const queue = new Queue<number>();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());  // Imprime 10 (el primer elemento)

console.log(queue.dequeue());  // Imprime 10 (y lo quita de la cola)
console.log(queue.dequeue());  // Imprime 20
console.log(queue.size());     // Imprime 1 (sólo queda 1 elemento en la cola)

queue.clear();                 // Vacía la cola
console.log(queue.isEmpty());  // Imprime true (la cola está vacía)

