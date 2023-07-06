'use strict';
const Node =require('./Node');

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Animal shelter is empty");
    }
    const value = this.front.value;
    this.front = this.front.next;
    if (this.front === null) {
      this.rear = null;
    }
    return value;
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Animal shelter is empty");
    }
    return this.front.value;
  }

  isEmpty() {
    return this.front === null && this.rear === null;
  }

  size() {
    let count = 0;
    let current = this.front;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.front.value;
  }

  rear() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this.rear.value;
  }
}

    module.exports = Queue;