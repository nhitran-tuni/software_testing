import toNumber from "../../toNumber";

describe('toNumber should convert the valid value correctly to a number.', () => {
    it('should return correctly when given value is a number', () => {
        expect(toNumber(3.2)).toBe(3.2);
    });

    it('should return correctly when given value is a string', () => {
        expect(toNumber('3.2')).toBe(3.2);
    });

    it('should return correctly when given value is a Infinity value', () => {
        expect(toNumber(Infinity)).toBe(Infinity);
    });

    it('should return correctly when given value is within limit range', () => {
        expect(toNumber(Number.MIN_VALUE)).toBe(5e-324);
    });

    it('should return correctly when given value is empty', () => {
        expect(toNumber()).toBe(NaN);
    });

    it('should return correctly when given value is an invalid string', () => {
        expect(toNumber('1bc')).toBe(NaN);
    });
});