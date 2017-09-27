import {expect} from 'chai';
import BasicClass from '../src/js/BasicClass';

describe('BasicClass', () => {

  describe('BasicClass constructor', () => {
    it('should return constructor', () => {
      const basicClassContructor = new BasicClass(1, 2);
      expect(basicClassContructor.name).to.be.equal('You');
    });
  });

  describe('BasicClass static method', () => {
    it('should return static method', () => {
      const staticArea = BasicClass.calculateArea({height: 2, width: 4});
      expect(staticArea).to.be.equal(8);
    });
  });

  describe('BasicClass normal method', () => {
    it('should return normal method', () => {
      const newBasicClass = new BasicClass(2, 3);
      expect(newBasicClass.normalCalculateArea()).to.be.equal(6);
    });
  });
});
