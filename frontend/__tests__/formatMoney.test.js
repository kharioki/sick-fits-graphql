'use strict';

import formatMoney from '../lib/formatMoney.js';

describe('formatMoney Function', () => {
  it('works with fractional shillings', () => {
    expect(formatMoney(1)).toEqual('KES0.01');
    expect(formatMoney(10)).toEqual('KES0.10');
    expect(formatMoney(9)).toEqual('KES0.09');
    expect(formatMoney(40)).toEqual('KES0.40');
  });

  it('leaves cents off for whole shillings', () => {
    expect(formatMoney(5000)).toEqual('KES50');
    expect(formatMoney(100)).toEqual('KES1');
    expect(formatMoney(50000000)).toEqual('KES500,000');
  });

  it('works with whole and fractional shillings', () => {
    expect(formatMoney(5012)).toEqual('KES50.12');
    expect(formatMoney(101)).toEqual('KES1.01');
    expect(formatMoney(110)).toEqual('KES1.10');
    expect(formatMoney(20893749823749823749)).toEqual(
      'KES208,937,498,237,498,000.00'
    );
  });
});
