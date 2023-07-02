const Stack = require("../lib/Stack");
const Queue= require("../lib/Queue");


describe('Stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  it('can push onto a stack', () => {
    stack.push(1);
    expect(stack.peek()).toBe(1);
  });

  it('can push multiple values onto a stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('can pop off the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toBe(3);
    expect(stack.peek()).toBe(2);
  });

  it('can empty a stack after multiple pops', () => {
    stack.push(1);
    stack.push(2);
    stack.pop();
    stack.pop();
    expect(stack.isEmpty()).toBe(true);
  });

  it('can peek the next item on the stack', () => {
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  it('can instantiate an empty stack', () => {
    expect(stack.isEmpty()).toBe(true);
  });

  it('calling pop on empty stack raises exception', () => {
    expect(() => stack.pop()).toThrowError('Stack is empty');
  });

  it('calling peek on empty stack raises exception', () => {
    expect(() => stack.peek()).toThrowError('Stack is empty');
  });
});

describe('Queue', () => {
  let queue;

  beforeEach(() => {
    queue = new Queue();
  });

  it('can enqueue into a queue', () => {
    queue.enqueue(1);
    expect(queue.peek()).toBe(1);
  });

  it('can enqueue multiple values into a queue', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  it('can dequeue out of a queue the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.dequeue()).toBe(1);
    expect(queue.peek()).toBe(2);
  });

  it('can empty a queue after multiple dequeues', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    queue.dequeue();
    expect(queue.isEmpty()).toBe(true);
  });

  it('can peek into a queue, seeing the expected value', () => {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).toBe(1);
  });

  it('can instantiate an empty queue', () => {
    expect(queue.isEmpty()).toBe(true);
  });

  it('calling dequeue on empty queue raises exception', () => {
    expect(() => queue.dequeue()).toThrowError('Queue is empty');
  });

  it('calling peek on empty queue raises exception', () => {
    expect(() => queue.peek()).toThrowError('Queue is empty');
  });
});
