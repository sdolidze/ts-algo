import { ArrayQueue } from './ArrayQueue';
import { LinkedQueue } from './LinkedQueue';

const entries = [
  {
    name: 'ArrayQueue',
    createQueue: () => new ArrayQueue<number>(),
  },
  {
    name: 'LinkedQueue',
    createQueue: () => new LinkedQueue<number>(),
  },
];

entries.forEach(({ name, createQueue }) => {
  describe(name, () => {
    it('should create empty queue', () => {
      const queue = createQueue();
      expect(queue).toBeDefined();
    });

    it('should dequeue what was pushed', () => {
      const queue = createQueue();

      queue.enqueue(1);

      const out = queue.dequeue();

      expect(out).toBe(1);
    });

    it('should return true only if queue is empty', () => {
      const queue = createQueue();

      expect(queue.isEmpty()).toBe(true);

      queue.enqueue(1);

      expect(queue.isEmpty()).toBe(false);
    });

    it('should peek what was pushed last', () => {
      const queue = createQueue();

      queue.enqueue(1);
      queue.enqueue(2);

      const out = queue.peek();

      expect(out).toBe(1);
    });

    it('should throw error on peek/dequeue if queue is empty', () => {
      const queue = createQueue();

      expect(() => queue.dequeue()).toThrowError(
        /EmptyQueueError/,
      );
      expect(() => queue.dequeue()).toThrowError(
        /EmptyQueueError/,
      );
    });

    it('should handle big numbers efficiently', () => {
      const queue = createQueue();

      for (let i = 0; i < 1000; i++) {
        queue.enqueue(i);
      }

      for (let i = 0; i < 1000; i++) {
        expect(queue.dequeue()).toBe(i);
      }
    });
  });
});
