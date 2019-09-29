import { Stack } from './Stack';

interface Node<T> {
  elem: T;
  next: Node<T>;
}

export class LinkedStack<T> implements Stack<T> {
  private head: Node<T>;

  constructor() {
    this.head = null;
  }

  push(elem: T) {
    this.head = {
      elem,
      next: this.head,
    };
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error('EmptyStackError');
    }

    const elem = this.head.elem;
    this.head = this.head.next;

    return elem;
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error('EmptyStackError');
    }

    return this.head.elem;
  }

  isEmpty(): boolean {
    return this.head === null;
  }
}
