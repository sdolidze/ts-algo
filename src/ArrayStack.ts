import { Stack } from './Stack';

export class ArrayStack<T> implements Stack<T> {
  private elems: T[];

  constructor() {
    this.elems = [];
  }

  push(elem: T) {
    this.elems.push(elem);
  }

  pop(): T {
    if (this.isEmpty()) {
      throw new Error('EmptyStackError');
    }

    const elem = this.elems.pop();

    return elem;
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error('EmptyStackError');
    }

    return this.elems[this.elems.length - 1];
  }

  isEmpty(): boolean {
    return this.elems.length === 0;
  }
}
