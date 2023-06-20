'use strict';
const linkedList = require('./lib/LinkedList');
const ll = new linkedList();
ll.append(1);
ll.append(3);
ll.append(8);
ll.append(2);
ll.append(3);
ll.append(8);
ll.append(2);
ll.append(3);
ll.append(8);
ll.append(2);


console.log(ll.kthFromEnd(0)); 
console.log(ll.kthFromEnd(2)); 
console.log(ll.kthFromEnd(6)); 

console.log(ll.findMiddleNode()); 

console.log(ll); 