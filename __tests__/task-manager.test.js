import { test, expect } from '@jest/globals';
import testFunc from '../index.js';

test('First test', () => {
  const a = testFunc();
  expect(a).toEqual(1);
});
