import { describe, it, expect } from 'vitest';
import { sum, findMax, findMin, filterEven } from '../utils/3.arrayUtils';

describe('ArrayUtils', () => {
    it('finds sum of array', () => {
        expect(sum([1,2,3])).toBe(6);
    })

    it('finds max of array', () => {
        expect(findMax([1,2,3])).toBe(3);
    })

    it('finds min of array', () => {
        expect(findMin([1,2,3])).toBe(1);
    })

    it('filters even numbers', () => {
        expect(filterEven([1,2,3,4,5,6])).toEqual([2,4,6]);
    })
}) 