import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from '../utils/1.mathUtils.js';

describe('Math Utilities', () => {
    it('should sum two numbers', () => {
        expect(add(2,3)).toBe(5);
        expect(add(0,0)).toBe(0);
    })

    it('should subtract two numbers', () => {
        expect(subtract(3,2)).toBe(1);
        expect(subtract(0,0)).toBe(0);
    })

    it('should multiply two numbers', () => {
        expect(multiply(10,10)).toBe(100);
        expect(multiply(0,10)).toBe(0);
    })

    it('should divide two numbers', () => {
        expect(divide(10,2)).toBe(5);
        expect(divide(5,2)).toBe(2.5);
        expect(divide(5,2)).toBe(2.5);
    })

    it('should throw an error when divided by zero', () => {
        expect(() => divide(5,0)).toThrow('Cannot divide by zero');
    })
})

/*
toBe needs expect() to directly return a value
    -expect(add(2, 3)).toBe(5); // ✅ Works because add(2, 3) returns 5
toThrow needs expect() to reference a function
    -expect(() => divide(5, 0)).toThrow('Cannot divide by zero'); // ✅ Works because divide(5, 0) throws an error
    -expect(divide(5, 0)).toThrow('Cannot divide by zero'); // ❌ Fails

*/