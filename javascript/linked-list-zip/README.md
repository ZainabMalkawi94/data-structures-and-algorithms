# Code Challenge: Class 08
## Zip two linked lists.


1.   Summary:
                The problem requires us to zip two linked lists together, alternating nodes from each list, and return a reference to the new zipped list. 
2. Description:
                Given two linked lists, we want to create a new linked list by taking nodes alternately from each list. The resulting linked list should have nodes in the order they appear in the original lists. If one list is longer than the other, the remaining nodes of the longer list should be appended to the end of the new linked list.



## Whiteboard Process
![Page 1](https://i.ibb.co/KqRWNc5/Untitled-3.jpg)


## Approach & Efficiency
- To solve this problem, we can use a simple approach that involves iterating over the two linked lists simultaneously. We'll use two pointers, one for each list, and a new pointer to build the zipped list. The steps to achieve this are as follows:

    1. Initialize two pointers, ptr1 and ptr2, to the heads of the two input linked lists.
    2. Create a new empty linked list, resultList, which will store the zipped nodes.
    3. Traverse the lists using a while loop, with the condition ptr1 != null && ptr2 != null:
        - Append the current node pointed by ptr1 to resultList.
        - If ptr2 is not null, append the current node pointed by ptr2 to resultList.
        - Advance ptr1 and ptr2 to the next nodes in their respective lists.
    4. After the loop, check if there are any remaining nodes in ptr1 or ptr2. If so, append them to the resultList.
    5. Return the head of the resultList.

    - Space complexity: O(1)
    - Time complexity: O(n)


## Solution:
1. [Node.js](./lib/Node.js)
2. [LinkedList.js](./lib/LinkedList.js)
3. [tests](./__tests__/linkedListZip.test.js)
4. [index.js](./index.js)

## Testing
![Page 1](https://i.ibb.co/0Y69n0w/1.png)