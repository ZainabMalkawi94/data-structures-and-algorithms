# Code Challenge:
## Find common values in 2 binary trees

1.   Summary:
                In this coding challenge, the goal is to find common values between two binary trees using a Hashtable (or HashMap) implementation. The challenge involves creating a function called tree_intersection that takes two binary trees as input and returns an array of values that are present in both trees. The Hashtable is utilized to efficiently store and look up values from one tree while checking for common values in the other tree.

2. Description:
                Given two binary trees, the task is to identify and return an array of values that are common in both trees. The common values are found by using a Hashtable to store values from one tree and then traversing the second tree while checking if each node's value exists in the Hashtable

## Whiteboard Process
![Page 1](https://i.ibb.co/8jGNtZR/Untitled-24.jpg)



## Approach & Efficiency


1. Create a Hashtable to store values from one binary tree.
2. Traverse the first binary tree and use the Hashtable to store its values as keys (with arbitrary values as values).
3. Traverse the second binary tree. For each node, check if its value exists in the Hashtable.
4. If a common value is found, add it to the result set.
5. Convert the result set to an array and return it.



## Solution:
1. [Find common values in 2 binary trees code ](./tree-intersection.js)
2. [Find common values in 2 binary trees test](./tree-intersection.test.js)

## Testing
![Alt text](image.png)