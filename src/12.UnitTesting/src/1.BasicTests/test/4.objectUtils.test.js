import { describe, it, expect } from 'vitest';
import { getProperty, deepEqual, merge, clone } from '../utils/4.objectUtils';


describe('Object Utils', () => {
    it('should return the correct property value for a given path', () => {
        const user = {
            name: "Alice",
            address: { 
                city: "Wonderland", 
                zip: "12345" 
            },
      };
      expect(getProperty(user, "address.city")).toBe("Wonderland");
      expect(getProperty(user, "address.country")).toBeUndefined();
    })

    it("should correctlt merge two objects", () => {
        const obj1 = { a: 1, b: 2 };
        const obj2 = { b: 3, c: 4 };

        expect(merge(obj1, obj2)).toEqual({ a: 1, b: 3, c: 4 });
    })

    it("should deep clone an object", () => {
        const orignal = { a: 1, b: { c: 2 } };
        const cloned = clone(orignal);
        cloned.b.c = 3;
        expect(orignal.b.c).toBe(2);
        expect(cloned.b.c).toBe(3);
    })

    it("should correctly check deep equality between two objects", () => {
        const obj1 = { a: 1, b: { c: 2 } };
        const obj2 = { a: 1, b: { c: 2 } };
        const obj3 = { a: 1, b: { c: 3 } };
    
        expect(deepEqual(obj1, obj2)).toBe(true); 
        expect(deepEqual(obj1, obj3)).toBe(false);
      });
})