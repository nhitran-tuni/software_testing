import isEmpty from "../../isEmpty";
import root from '../../.internal/root.js'

/** Detect free variable `exports`. */
const freeExports = typeof exports === 'object' && exports !== null && !exports.nodeType && exports

/** Detect free variable `module`. */
const freeModule = freeExports && typeof module === 'object' && module !== null && !module.nodeType && module

/** Detect the popular CommonJS extension `module.exports`. */
const moduleExports = freeModule && freeModule.exports === freeExports

/** Built-in value references. */
const Buffer = moduleExports ? root.Buffer : undefined;

describe('isEmpty should check if the given value is an empty object, collection, map, or set, when they no own enumerable string keyed properties.', () => {
    it('should return true when given value is null', () => {
        expect(isEmpty(null)).toBe(true);
    });

    it('should return true when given value is a boolean', () => {
        expect(isEmpty(true)).toBe(true);
    });

    it('should return true when given value is number', () => {
        expect(isEmpty(1)).toBe(true);
    });

    it('should return true when given value is an empty prototype object', () => {
        expect(isEmpty(Object.prototype)).toBe(true);
    });

    it('should return true when given value is an empty types array', () => {
        expect(isEmpty(new Uint8Array)).toBe(true);
    });

    it('should return false when given value is an non-empty array', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    it('should return false when given value is a string', () => {
        expect(isEmpty('abc')).toBe(false);
    });

    it('should return false when given value is a non-empty object', () => {
        expect(isEmpty({ 'a': 1 })).toBe(false);
    });

    it('should return false when given value is a non-empty map', () => {
        const map = new Map([
            ['a', 1],
            ['b', 2]
        ]);

        expect(isEmpty(map)).toBe(false);
    });

    it('should return false when given value is a non-empty set', () => {
        const set = new Set([1, 2, 3])
        expect(isEmpty(set)).toBe(false);
    });

    it("should return false if the value is a non-empty Buffer", () => {
        expect(isEmpty(new Buffer(1))).toBe(false)
    });
})