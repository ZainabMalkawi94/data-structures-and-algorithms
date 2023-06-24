'use strict';
const linkedList = require('./lib/LinkedList');
let list1 = new linkedList();
list1.append(1);
list1.append(3);
list1.append(2);

let list2 = new linkedList();
list2.append(5);
list2.append(9);
list2.append(4);

let result = zipLists(list1, list2);

console.log(result.toString());