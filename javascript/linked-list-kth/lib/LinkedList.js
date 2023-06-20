'use strict';
const Node =require('./Node');
class LinkedList {
    constructor()
    { this.head = null;}
    insert(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
      }
      includes(value) {
        let currentNode = this.head;
        while (currentNode !== null) {
          if (currentNode.value === value) {
            return true;
          }
          currentNode = currentNode.next;
        }
        return false;
      }
      toString() {
        let currentNode = this.head;
        let result = "";
        while (currentNode !== null) {
          result += `{ ${currentNode.value} } -> `;
          currentNode = currentNode.next;
        }
        result += "NULL";
        return result;
      }

      append(value) {
        const newNode = new Node(value);
    
        if (!this.head) {
          this.head = newNode;
          return;
        }
    
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    
      insertBefore(value, newValue) {
        const newNode = new Node(newValue);
    
        if (!this.head) {
          throw new Error('The linked list is empty.');
        }
    
        if (this.head.value === value) {
          newNode.next = this.head;
          this.head = newNode;
          return;
        }
    
        let current = this.head;
        while (current.next) {
          if (current.next.value === value) {
            newNode.next = current.next;
            current.next = newNode;
            return;
          }
          current = current.next;
        }
    
        throw new Error(`Node with value ${value} not found.`);
      }
    
      insertAfter(value, newValue) {
        const newNode = new Node(newValue);
    
        if (!this.head) {
          throw new Error('The linked list is empty.');
        }
    
        let current = this.head;
        while (current) {
          if (current.value === value) {
            newNode.next = current.next;
            current.next = newNode;
            return;
          }
          current = current.next;
        }
    
        throw new Error(`Node with value ${value} not found.`);
      }


      kthFromEnd(k) {
        if (k < 0) {
          throw new Error('Invalid value of k');
        }
    
        if (this.head === null) {
          throw new Error('Empty linked list');
        }
    
        if (this.head.next === null && k === 0) {
          return this.head.value;
        }
    
        let slow = this.head;
        let fast = this.head;
    
        // Move the fast pointer ahead by k nodes
        for (let i = 0; i < k; i++) {
          if (fast === null) {
            throw new Error('k is greater than the length of the linked list');
          }
          fast = fast.next;
        }
    
        // Move both pointers until the fast pointer reaches the end
        while (fast.next !== null) {
          slow = slow.next;
          fast = fast.next;
        }
    
        if (slow === null) {
          throw new Error('Invalid value of k');
        }
    
        return slow.value;
      }
    
      findMiddleNode() {
        if (this.head === null) {
          throw new Error('Empty linked list');
        }
      
        let slow = this.head;
        let fast = this.head;
      
        while (fast !== null && fast.next !== null) {
          slow = slow.next;
          fast = fast.next.next;
        }
      
        return slow.value;
      }
      
    }      
    
    module.exports = LinkedList;