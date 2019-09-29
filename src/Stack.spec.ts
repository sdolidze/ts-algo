import { LinkedStack } from './LinkedStack';
import { ArrayStack } from './ArrayStack';

const entries = [
  {
    name: 'ArrayStack',
    createStack: () => new ArrayStack<number>(),
  },
  {
    name: 'LinkedStack',
    createStack: () => new LinkedStack<number>(),
  },
];

entries.forEach(({ name, createStack }) => {
  describe(name, () => {
    it('should create empty stack', () => {
      const stack = createStack();
      expect(stack).toBeDefined();
    });

    it('should pop what was pushed', () => {
      const stack = createStack();

      stack.push(1);

      const out = stack.pop();

      expect(out).toBe(1);
    });

    it('should return true only if stack is empty', () => {
      const stack = createStack();

      expect(stack.isEmpty()).toBe(true);

      stack.push(1);

      expect(stack.isEmpty()).toBe(false);
    });

    it('should peek what was pushed last', () => {
      const stack = createStack();

      stack.push(1);
      stack.push(2);

      const out = stack.peek();

      expect(out).toBe(2);
    });

    it('should throw error on peek/pop if array is empty', () => {
      const stack = createStack();

      expect(() => stack.pop()).toThrowError(
        /EmptyStackError/,
      );
      expect(() => stack.pop()).toThrowError(
        /EmptyStackError/,
      );
    });

    it('should handle big numbers efficiently', () => {
      const stack = createStack();

      for (let i = 0; i < 1000; i++) {
        stack.push(i);
      }

      for (let i = 999; i >= 0; i--) {
        expect(stack.pop()).toBe(i);
      }
    });
  });
});
