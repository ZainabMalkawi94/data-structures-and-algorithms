# Singly Linked Lists
## Description
This challenge involves implementing a singly linked list data structure. A linked list is a collection of nodes where each node contains a value and a reference (or pointer) to the next node in the list. The main operations supported by the linked list are inserting a new node at the head, checking if a value exists in the list, and converting the list to a string representation.

## Approach & Efficiency
- To implement a singly linked list, we need to define a Node class that represents a single node in the list. Each node contains a value and a next pointer that points to the next node in the list.

- The LinkedList class has a head property that points to the first node in the list. When inserting a new node, we simply create a new node with the given value and update the next pointer of the new node to point to the current head node. Then, we update the head pointer to the new node.

- The includes method traverses the list starting from the head node and checks if any node's value matches the given value. If a match is found, it returns True; otherwise, it returns False.

- The to_string method traverses the list starting from the head node and builds a string representation of all the values in the list. Each value is enclosed in curly braces and separated by "->" to indicate the next node. The string representation ends with "-> NULL" to signify the end of the list.

- The time complexity of inserting a new node at the head of the list is O(1) because it does not depend on the size of the list. The time complexity of the includes method is O(n) in the worst case, where n is the number of nodes in the list, because it may need to traverse the entire list to find a match. The time complexity of the to_string method is also O(n) because it needs to traverse the entire list to build the string representation.

- The space complexity of the linked list is O(n), where n is the number of nodes in the list, because we need to allocate memory for each node.

## Whiteboard Process
![Page 1](https://i.ibb.co/DDdY1X4/Whiteboard.jpg)


## Solution:
1. [Node.js](./lib/Node.js)
2. [LinkedList.js](./lib/LinkedList.js)
3. [tests](./__tests__/linked-list.test.js)
4. [index.js](./index.js)

## Testing
![Page 1](https://i.ibb.co/kG5x4gD/1.png)