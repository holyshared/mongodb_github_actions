import assert from 'power-assert';
import { eq } from '../index';

describe('index', () => {
  describe('eq', () => {
    it('return true', () => {
      assert.equal(eq('index', 'index'), true);
    });
  });
});
