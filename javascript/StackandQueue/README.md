# Code Challenge: Class 10
## Stack and a Queue Implementation

1.   Summary:
                This implementation provides the functionality of stacks and queues using linked lists as the underlying data structure. The Stack class supports operations such as push, pop, peek, and isEmpty. The Queue class supports operations such as enqueue, dequeue, peek, and isEmpty. The implementation follows the specifications of the challenge, ensuring the desired functionality and error handling.

2. Description:
                The Stack and Queue classes are implemented using the Node class, which represents a node in the linked list. Each node contains a value and a reference to the next node in the list.

                The Stack class maintains a reference to the top node, which represents the top of the stack. The push operation adds a new node to the top of the stack by updating the top reference. The pop operation removes the top node and returns its value. The peek operation returns the value of the top node without removing it. The isEmpty operation checks if the stack is empty by verifying if the top reference is null.

                The Queue class maintains references to the front and rear nodes, representing the front and rear of the queue, respectively. The enqueue operation adds a new node to the rear of the queue by updating the rear reference. The dequeue operation removes the front node and returns its value. The peek operation returns the value of the front node without removing it. The isEmpty operation checks if the queue is empty by verifying if both the front and rear references are null.




## Approach & Efficiency

The efficiency of this implementation using linked lists is as follows:

- Push (Stack): O(1)
- Pop (Stack): O(1)
- Peek (Stack): O(1)
- IsEmpty (Stack): O(1)
- Enqueue (Queue): O(1)
- Dequeue (Queue): O(1)
- Peek (Queue): O(1)
- IsEmpty (Queue): O(1)

The push, pop, enqueue, and dequeue operations all have a time complexity of O(1) since they only involve updating the top, rear, front, and next references, respectively. The peek and isEmpty operations also have a time complexity of O(1) as they only involve accessing the value of the top, front, and rear references.

Approach:
The implementation of the Stack and Queue classes using linked lists follows a simple and intuitive approach. In the Stack class, nodes are added and removed from the top of the stack using the push and pop operations, respectively. The top reference is updated accordingly.

Similarly, in the Queue class, nodes are added to the rear and removed from the front of the queue using the enqueue and dequeue operations, respectively. The front and rear references are updated accordingly.

The linked list data structure provides efficient insertion and removal at both ends, making it suitable for implementing stacks and queues. The nodes in the linked list maintain the order and allow for easy traversal and retrieval of values.

By using linked lists, the implementation achieves the desired time complexity for the specified operations, ensuring efficient and effective stack and queue functionality.

## Solution:
1. [Node.js](./lib/Node.js)
2. [Queue.js](./lib/Queue.js)
3. [Stack.js](./lib/Stack.js)
4. [tests](./__tests__/StackandQueue.test.js)
5. [index.js](./index.js)

## Testing
![Page 1](https://i.ibb.co/FKkKrn9/4.png)