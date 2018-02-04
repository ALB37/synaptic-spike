'use strict';

const predictor = require('../lib/pattern-prediction');

describe('testing that the xor network was correctly trained to perform the xor comparison', () => {
  test('xor should return expected results', () => {
    const oneOrZeroArr = [0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
    const countToOneArr = [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
    expect(Math.round(predictor(oneOrZeroArr)[0])).toEqual(1);
    expect(Math.round((predictor(countToOneArr)[0]) * 10) / 10).toEqual(1);

  });
});