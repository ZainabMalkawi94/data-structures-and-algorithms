# Code Challenge: Class 06
## linked list insertions

1.   Summary:
                The goal of this code challenge is to extend a Linked List implementation by adding three new methods: append, insertBefore, and insertAfter. These methods allow for inserting nodes into the linked list at different positions.
2. Description:
                The Linked List data structure is a collection of nodes, where each node contains a value and a reference to the next node in the list. The challenge is to implement additional methods that enable inserting nodes in specific locations within the linked list.

    1. The append method adds a new node with the given value to the end of the list. It traverses the list from the head node to the last node and creates a new node with the provided value, linking it as the next node of the last node.

    2. The insertBefore method adds a new node with the given new value immediately before the first node that has the specified value. It traverses the list starting from the head node, searching for the target value. Once found, it creates a new node with the provided value and adjusts the references to insert it before the found node.

    3. The insertAfter method adds a new node with the given new value immediately after the first node that has the specified value. Similar to insertBefore, it searches for the target value starting from the head node. Once found, it creates a new node with the provided value and adjusts the references to insert it after the found node.



## Whiteboard Process
![Page 1](https://i.ibb.co/G5v4WTg/Untitled-1-page-0001-1.jpg)


## Approach & Efficiency
Approach & Efficiency:

- append:

    Time complexity: O(n) - It requires traversing the entire list to reach the last node.

    Space complexity: O(1) - It uses a constant amount of additional space.

- insertBefore and insertAfter:

    Time complexity: O(n) - They require traversing the list to find the target node.

    Space complexity: O(1) - They use a constant amount of additional space.

## Solution:
1. [Node.js](./lib/Node.js)
2. [LinkedList.js](./lib/LinkedList.js)
3. [tests](./__tests__/LinkedListInsertions.test.js)
4. [index.js](./index.js)

## Testing
![Page 1](https://i.ibb.co/cTgTGZz/insertion.png)