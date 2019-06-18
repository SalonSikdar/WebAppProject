/* eslint-disable no-undef */
const firstFunc = require('./../source/function.js');
const {expect} = require('chai');
// eslint-disable-next-line no-undef
describe('firstFunc', () => {
  it('should catch return value', () => {
    const result = firstFunc.main();
    expect(result).equal(1);
  });
});
