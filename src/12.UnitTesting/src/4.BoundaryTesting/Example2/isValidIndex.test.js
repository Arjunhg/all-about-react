import { describe, expect, it } from 'vitest';
import { isValidIndex } from './isValidIndex';

describe('Valid Index', () => {
    const array = [1, 2, 3, 4, 5];
    it('Should be in the range of 0-indexed array', () => {
        const index = 2;
        expect(isValidIndex(array, index)).toBe('Index is valid!');
    })

    it("Should allow index 0 (first element", () => {
        expect(isValidIndex(array, 0)).toBe('Index is valid!');
    })

    it("Should allow index 4 (last element)", () => {
        expect(isValidIndex(array, 4)).toBe('Index is valid!');
    })

    it("should throw an error for index -1 (out of bounds)", () => {
        expect(() => isValidIndex(array, -1)).toThrow("Index out of bounds.");
    });

    it("should throw an error for index 5 (out of bounds)", () => {
        expect(() => isValidIndex(array, 5)).toThrow("Index out of bounds.");
    });
    
})