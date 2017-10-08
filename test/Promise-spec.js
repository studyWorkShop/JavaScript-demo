import {expect} from 'chai';
import {oldPromise, successCallback, rejectedCallback} from '../src/js/oldPromise';

describe('test with old promise', () => {
  it('test with success callback', () => {
    const successValue = successCallback();
    expect(successValue).to.be.equal('Success');
  });

  it('test with rejected callback', () => {
    const rejectedValue = rejectedCallback();
    expect(rejectedValue).to.be.equal('Rejected');
  });

  it('should return correct answer', () => {
    const returnValue = oldPromise(successCallback, rejectedCallback, 10);
    expect(returnValue).to.be.equal('Rejected');
  });
});

describe.only('test with using promise', () => {
  it('test return resolve value', () => {
    const promise = Promise.resolve('resolve');
    promise.then((value) => {
      expect(value).to.be.equal('resolve');
    }).catch();
  });

  it('test return reject value', () => {
    const promise = Promise.reject('reject');
    promise.then().catch((value) => {
      expect(value).to.be.equal('reject');
    });
  });

  it('test return all resolve value', () => {
    const taskA = Promise.resolve('A');
    const taskB = Promise.resolve('B');
    const taskC = Promise.resolve('C');
    const promise = Promise.all([taskA,taskB,taskC]);
    promise.then((value) => {
      expect(value.length).to.be.equal(3);
    });
  });

  it('test return all resolve value', () => {
    const taskA = Promise.resolve('A');
    const taskB = Promise.reject('B');
    const taskC = Promise.resolve('C');
    const promise = Promise.all([taskA,taskB,taskC]);
    promise.then().catch((value) => {
      expect(value).to.be.equal('B');
    });
  });

  it('test return race value', () => {
    const taskA = Promise.reject('A');
    const taskB = Promise.resolve('B');
    const taskC = Promise.reject('C');
    const promise = Promise.race([taskA,taskB,taskC]);
    promise.then().catch((value) => {
      expect(value).to.be.equal('A');
    });
  });
});
