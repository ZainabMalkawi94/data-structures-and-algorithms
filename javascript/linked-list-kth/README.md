# Code Challenge: Class 07
## linked list kth

1.   Summary:
                The challenge requires implementing two methods for the Linked List class: kthFromEnd(k) and findMiddleNode(). The kthFromEnd(k) method should return the value of the node that is k places from the tail of the linked list. The findMiddleNode() method should return the node at the middle of the linked list.

2. Description:
                The first method, kthFromEnd(k), takes a parameter k and returns the value of the node that is k places from the tail of the linked list. The second method, findMiddleNode(), returns the node at the middle of the linked list.


## Whiteboard Process
![Page 1](https://i.ibb.co/NjhRp2B/Untitled-2.jpg)


## Approach & Efficiency
- For the kthFromEnd(k) method, one approach is to use two pointers, fast and slow. Initially, both pointers point to the head of the linked list. We move the fast pointer k positions ahead of the slow pointer. Then we move both pointers together until the fast pointer reaches the end of the linked list. At this point, the slow pointer will be k positions from the tail, and we return the value of the node it is pointing to.

- For the findMiddleNode() method, we can again use two pointers, fast and slow. The fast pointer moves twice as fast as the slow pointer. When the fast pointer reaches the end of the linked list, the slow pointer will be at the middle node, and we return that node.

## Solution:
1. [Node.js](./lib/Node.js)
2. [LinkedList.js](./lib/LinkedList.js)
3. [tests](./__tests__/LinkedListInsertions.test.js)
4. [index.js](./index.js)

## Testing
![Page 1](https://i.ibb.co/R9nZbMM/kth.png)