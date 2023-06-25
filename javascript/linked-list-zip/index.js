'use strict';
const {LinkedList} = require('./lib/LinkedList');
const {zipLists} = require('./lib/LinkedList');

let list1 = new LinkedList();
list1.append(1);
list1.append(3);
list1.append(2);

let list2 = new LinkedList();
list2.append(5);
list2.append(9);
list2.append(4);

let result = zipLists(list1, list2);

console.log(result.toString());


// const list = new LinkedList();
// list.insert(1);
// list.insert(2);
// list.insert(3);
// list.insert(4);
// console.log(list.toString()); // Output: { 4 } -> { 3 } -> { 2 } -> { 1 } -> NULL

// list.reverse();
// console.log(list.toString()); // Output: { 1 } -> { 2 } -> { 3 } -> { 4 } -> NULL