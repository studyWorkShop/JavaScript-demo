import {expect} from 'chai';
import {oldPromise, successCallback, rejectedCallback} from '../src/js/Promise';

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