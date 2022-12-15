import map from "../../map";

describe('map should create an array of values by running each element of array thru iterate.', () => {
    it('should return correctly when given empty array', () => {
        const square = n => n*n;
        const array = [];
        expect(map(array, square)).toStrictEqual([]);
    });

    it('should return correctly when given non-empty array', () => {
        const square = n => n*n;
        const double = n => n*2;
        const array = [4, 8];
        expect(map(array, square)).toStrictEqual([16, 64]);
        expect(map(array, double)).toStrictEqual([8, 16]);
    });
});