import reduce from "../../reduce";

describe('reduce should accumulate all elements in a given array to an optional result, with an iteratee function applied on each element', () => {
    it('should work as a typical summation operation without initial value', () => {
      expect(reduce([1, 2, 3], (sum, n) => sum + n)).toBe(6);
      expect(reduce([1, 2, 3], (sum, n) => sum + n*n)).toBe(14);
    });

    it('should work as a typical summation operation wit initial value', () => {
      expect(reduce([1, 2, 3], (sum, n) => sum + n, 10)).toBe(16);
      expect(reduce([1, 2, 3], (sum, n) => sum + n*n, 10)).toBe(24);
    });
  });