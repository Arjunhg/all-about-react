import { it, expect } from 'vitest';
import { add } from './mathUtil';

it('should sum two numbers', () => {
    expect(add(2,3)).toBe(5);
    expect(add(0,0)).toBe(0);
});

it('should throw error if input is not a number', () => {
    expect(() => add('2',3)).toThrow('Invalid input');
    expect(() => add(2,'3')).toThrow('Invalid input');
    expect(() => add('2','3')).toThrow('Invalid input');
});