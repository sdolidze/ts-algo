import { Queue } from './Queue';

export class ArrayQueue<T> implements Queue<T> {
  private elems: T[];
  private first: number;
  private last: number;
  private size: number;

  constructor() {
    this.elems = new Array<T>(32);

    this.size = 0;
    this.first = 0;
    this.last = 0;
  }

  enqueue(elem: T) {
    if (this.elems.length == this.size) {
      this.resize(this.size * 2);
    }

    this.elems[this.last] = elem;
    this.last = (this.last + 1) % this.elems.length;

    this.size++;
  }

  dequeue(): T {
    if (this.isEmpty()) {
      throw new Error('EmptyQueueError');
    }

    const elems = this.elems;

    const elem = elems[this.first];
    elems[this.first] = null;
    this.first = (this.first + 1) % this.elems.length;

    this.size--;

    if (this.size > 0 && this.size == elems.length / 4) {
      this.resize(elems.length / 2);
    }

    return elem;
  }

  peek(): T {
    if (this.isEmpty()) {
      throw new Error('EmptyQueueError');
    }

    return this.elems[this.first];
  }

  isEmpty(): boolean {
    return this.first === this.last;
  }

  private resize(newSize: number) {
    const elems = this.elems;
    const newElems = new Array(newSize);

    for (let i = 0; i < this.size; i++) {
      newElems[i] = elems[(this.first + i) % elems.length];
    }

    this.elems = newElems;
    this.first = 0;
    this.last = this.size;
  }
}
