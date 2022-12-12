import slice from "../../slice";

describe('slice should create a slice of array from start up to, but not including, end.', () => {
    it('should return correctly with a empty array', () => {
        const array = [];
        expect(slice(array, 4)).toEqual([]);
    });

    it('should return correctly with a non-empty array, a positive start and without end position', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(slice(array, 8)).toEqual([9, 10]);
    });

    it('should return correctly with a non-empty array, a negative start and without end position', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(slice(array, -3)).toEqual([8, 9, 10]);
    });

    it('should return correctly with a non-empty array, a positive start and positive end position', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(slice(array, 1, 3)).toEqual([2, 3]);
    });

    it('should return correctly with a non-empty array, a negative start and negative end position', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(slice(array, -5, -3)).toEqual([6, 7]);
    });

    it('should return correctly with a non-empty array, a positive start and negative end position', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(slice(array, 4, -3)).toEqual([5, 6, 7]);
    });

    it('should return correctly with a non-empty array, a negative start and positive end position', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(slice(array, -4, 9)).toEqual([7, 8, 9]);
    });

    it('should return correctly with a non-empty array, a negative start and positive end position', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(slice(array, -4, 9)).toEqual([7, 8, 9]);
    });

    it('should return correctly with a non-empty array, a positive start larger than positive end position', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(slice(array, 9, 4)).toEqual([]);
    });

    it('should return correctly with a non-empty array, a negative start larger than negative end position', () => {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        expect(slice(array, -4, -9)).toEqual([]);
    });
});