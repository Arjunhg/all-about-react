

import { expect, it } from 'vitest';

it("toBeTruthy matcher", () => {
    const a = 1;
    expect(a).toBeTruthy();
})

it("toBeFalsy matcher", () => {
    const value = 0;
    expect(value).toBeFalsy();
});