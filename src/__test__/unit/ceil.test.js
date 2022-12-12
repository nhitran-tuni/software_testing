import ceil from "../../ceil";

describe('ceil should round a number up to given precision', () => {
    it('should round a number up to the nearest integer when no given precision', () => {
        expect(ceil(4.00632)).toBe(5);
        expect(ceil(5.9632)).toBe(6);
    });

    it('should round a number up to the nearest integer when a positive precision given', () => {
        expect(ceil(4.00632, 1)).toBe(4.1);
        expect(ceil(5.9632, 2)).toBe(5.97);
    });

    it('should round a number up correctly to the nearest integer when a negative precision given', () => {
        expect(ceil(400632, -1)).toBe(400640);
        expect(ceil(59632, -2)).toBe(59700);
    });
});