import { describe, it, expect } from 'vitest';
import { toUpperCase, capilatilize, toLowerCase, reverse } from '../utils/2.stringUtils';

describe('String Utils', () => {
    it('should convert string to upper case', () => {
        expect(toUpperCase('hello')).toBe('HELLO');
    })

    it('shoult convert string to lower case', () => {
        expect(toLowerCase('HELLO')).toBe('hello');
    })

    it('should capitalize the first letter of a string', () => {
        expect(capilatilize('heLlo')).toBe('Hello');
    })

    it('should reverse the string', () => {
        expect(reverse('hello')).toBe('olleh');
    })
})