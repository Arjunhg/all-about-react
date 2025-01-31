import { expect, it } from 'vitest';

it("toBe matcher", () => {
    const a = 5;
    expect(a).toBe(5);
})

it('toEqual Matcher', () => {
    const obj1 = { a: 5 };
    const obj2 = { a: 5 };
    expect(obj1).toEqual(obj2);
})

it('toStrictEqual Matcher', () => {
    // const obj1 = { a: 5 };
    // const obj2 = { a: 5 };
    // expect(obj1).toStrictEqual(obj2);
    class MyClass {
        constructor(name) {
            this.name = name;
        }
    }
    // const obj1 = new MyClass('Alice');
    // const obj2 = { name: 'Alice' };
    // expect(obj1).toEqual(obj2); // Passes
    // expect(obj1).toStrictEqual(obj2); // Fails

    const obj3 = { a: 1, b: undefined };
    const obj4 = { a: 1 };

    expect(obj3).toEqual(obj4); // ✅ Passes (ignores undefined property)
    // expect(obj3).toStrictEqual(obj4); // ❌ Fails (`b` is missing in obj4)
})


/*
1. toBe (Strict Equality - ===)
    Uses JavaScript's strict equality (===) for comparison.
    Does not work for objects and arrays unless they are the same reference.
    Best for primitives (strings, numbers, booleans, null, undefined).

2. toEqual (Deep Equality)
    Compares values inside objects and arrays (recursively).
    Ignores object prototypes and non-enumerable properties.
    Works when checking if two objects/arrays contain the same data.

3. toStrictEqual (Strict Deep Equality)
    Like toEqual, but:
    Ensures objects do not have extra properties.
    Ensures correct prototype chain.
    Does not ignore undefined properties.
*/