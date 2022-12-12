import filter from "../../filter";

describe('filter should return a new array consisting of all elements that are truthy according to the given predicate', () => {
    it('should intepret null value to have length of 0', () => {
        expect(filter(null, item => item.active)).toStrictEqual([[]]);
    });

    it('should return the array containg truthy elements', () => {
        const users = [
            { 'user': 'barney', 'active': true },
            { 'user': 'fred',   'active': false }
        ];
        expect(filter(users, user => user.active)).toStrictEqual([{ 'user': 'barney', 'active': true }]);
        expect(filter(users, user => !user.active)).toStrictEqual([{ 'user': 'fred',   'active': false }]);
    });
});