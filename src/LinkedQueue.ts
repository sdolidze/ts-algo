import { Queue } from './Queue';

interface Node<T> {
  elem: T;
  next: Node<T>;
  prev: Node<T>;
}

export class LinkedQueue<T> implements Queue<T> {
  private front: Node<T>;
  private back: Node<T>;

  constructor() {
    this.front = {
      elem: 'front' as any,
      prev: null,
      next: null,
    };

    this.back = {
      elem: 'next' as any,
      prev: null,
      next: null,
    };

    this.front.next = this.back;
    this.back.prev = this.front;
  }

  enqueue(elem: T) {
    const node = {
      elem,
      prev: null,
      next: null,
    };

    const before = this.front;
    const after = before.next;

    node.next = after;
    after.prev = node;

    before.next = node;
    node.prev = before;
  }

  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('EmptyQueueError');
    }

    const before = this.back.prev.prev;
    const node = this.back.prev;
    const after = this.back;

    node.next = null;
    node.prev = null;

    before.next = after;
    after.prev = before;

    return node.elem;
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error('EmptyQueueError');
    }

    return this.back.prev.elem;
  }

  isEmpty(): boolean {
    return this.front.next === this.back;
  }
}
