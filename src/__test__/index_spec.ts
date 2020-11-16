import mongoose from 'mongoose';
import assert from 'power-assert';
import { User } from '../index';

describe('index', () => {
  describe('createUsers', () => {
    before(async () => {
      await User.deleteMany();
    });
    it('return created users', async () => {
      const users = await User.createUsers(3);
      assert.equal(users[0].name, "test0");
      assert.equal(users[1].name, "test1");
      assert.equal(users[2].name, "test2");
    });
  });
});
