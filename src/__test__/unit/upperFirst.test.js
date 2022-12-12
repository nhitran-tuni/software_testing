import upperFirst from "../../upperFirst";

describe('upperFirst should convert the first character of given string to upper case.', () => {
    it('should convert when the given string is empty', () => {
        expect(upperFirst("")).toBe("");
    });

    it('should convert correctly the first character of non-empty lowercase string', () => {
        expect(upperFirst('fred')).toBe('Fred');
    });

    it('should convert correctly the first character of non-empty uppercase string', () => {
        expect(upperFirst('FRED')).toBe('FRED');
    });
});