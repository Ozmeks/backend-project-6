import { test, expect } from '@jest/globals';
import { testFunc } from '../index.js'

test('First test', () => {
  const test = testFunc();
  expect(test).toEqual(1);
});
