const chai = require('chai');
const arrayFilters = require('../array/index');

const { expect } = chai;

describe('limitBy with array = [1,2,3]', () => {
  const { limitBy } = arrayFilters;
  const array = [1,2,3];

  it('limitBy(array, false) => []', () => {
    const res = limitBy(array, false);
    expect(res.length).to.be.equal(array.length);
  })

  it('limitBy(array, 1) => [1]', () => {
    const res = limitBy(array, 1);
    expect(res).to.deep.equal([1]);
  })

  it('limitBy(array, 10) =< [1,2,3]', () => {
    const res = limitBy(array, 10);
    expect(res.length).to.be.equal(array.length);
  })

  it('limitBy(array, -1) => [1,2]', () => {
    const res = limitBy(array, -1);
    expect(res).to.deep.equal([1, 2]);
  })

  it('limitBy(array, 1,1) => [2]', () => {
    const res = limitBy(array, 1,1);
    expect(res).to.deep.equal([2]);
  })

  it('limitBy(array, 2,1) => [2,3]', () => {
    const res = limitBy(array, 2,1);
    expect(res).to.deep.equal([2, 3]);
  })

  it('limitBy(array, 1, 2) => [3]', () => {
    const res = limitBy(array, 1, 2);
    expect(res).to.deep.equal([3]);
  })

  it('limitBy(array, 3, 3) => []', () => {
    const res = limitBy(array, 3, 3);
    expect(res).to.deep.equal([]);
  })
})