import { describe, expect, it } from 'vitest';
import { validPassword } from './validPassword';

describe('Password Validation', () => {
    it("should allow a password with exactly 8 characters", () => {
        const result = validPassword("12345678");
        expect(result).toBe("Password is valid");
    })

    it("should throw an error if password has less than 8 characters", () => {
        expect(() => validPassword("123")).toThrow("Password length should be between 8 and 20 characters");
    })

    it("should allow a password with exactly 16 characters", () => {
        const result = validPassword("abcdefghijklmnop");
        expect(result).toBe("Password is valid");
    });

    it("should throw an error if password has more than 16 characters", () => {
        expect(() => validPassword("abcdefghijklmnopq")).toThrow(
          "Password length should be between 8 and 20 characters"
        );
    });
})