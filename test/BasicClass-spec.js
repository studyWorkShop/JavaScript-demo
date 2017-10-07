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

  describe('BasicClass getter method', () => {
    it('should return getter method', () => {
      const newBasicClass = new BasicClass(2, 5);
      expect(newBasicClass.getArea).to.be.equal(10);
    });
  });

  describe.only('BasicClass setter method', () => {
    it('should return setter method', () => {
      const newBasicClass = new BasicClass(2, 3);
      newBasicClass.setArea = 21;
      expect(newBasicClass.age).to.be.equal(21);
    });
  });
});
