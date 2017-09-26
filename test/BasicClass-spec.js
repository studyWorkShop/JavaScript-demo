import {expect} from 'chai';
import BasicClass from '../src/js/BasicClass';

describe('BasicClass', () => {

  describe('BasicClass constructor', () => {
    it('should return constructor', () => {
      const basicClassContructor = new BasicClass(1, 2);
      expect(basicClassContructor.name).to.be.equal('You');
    });
  });
});
