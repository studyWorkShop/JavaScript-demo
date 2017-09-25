import {expect} from 'chai';
import Add from '../src/js/add';

describe('Add', () => {

  describe('#static', () => {
    it('it should show static value', () => {
      const sum = Add.staticAdd({aa: 1, bb: 2, cc: 3});
      expect(sum).to.be.eq(6);
    });
  });

  let normalAdd;

  beforeEach(() => {
    normalAdd = new Add(4, 5, 6);
  });

  describe('#normal', () => {
    it('it should show normal value', () => {
      const sum = normalAdd.normalAdd();
      expect(sum).to.be.eq(15);
    });
  });
});
