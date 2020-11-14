import assert from 'power-assert';
import { User } from '../index';

describe('index', () => {
  describe('eq', () => {
    it('return true', async () => {
      const user = await User.create({ name: "test" });
      assert.equal(user.name, "test");
    });
  });
});
