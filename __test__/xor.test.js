'use strict';

const myNetwork = require('../lib/xor');

describe('testing that the xor network was correctly trained to perform the xor comparison', () => {
  test('xor should return expected results', () => {
    expect(Math.round(myNetwork.activate([0, 0])[0])).toEqual(0);
    expect(Math.round(myNetwork.activate([0, 1])[0])).toEqual(1);
    expect(Math.round(myNetwork.activate([1, 0])[0])).toEqual(1);
    expect(Math.round(myNetwork.activate([1, 1])[0])).toEqual(0);
  });
});