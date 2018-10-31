import { toNumber } from '../utils/index';
/**
 * Limit filter for arrays
 *
 * @param {Number} n
 * @param {Number} offset (Decimal expected)
 */
export const limitBy = ( arr, n, offset) => {
  offset = offset ? parseInt(offset, 10) : 0;
  n = toNumber(n);
  return typeof n === 'number'
    ? arr.slice(offset, offset + n)
    : arr
}