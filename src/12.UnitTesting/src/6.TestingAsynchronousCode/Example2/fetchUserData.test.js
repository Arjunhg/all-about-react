import { describe, it, expect } from "vitest";
import { fetchUserData } from "./fetchUserData";

describe("fetchUserData", () => {
    it("should resolve with the user data when the user ID is valid", async() => {
        const result = await fetchUserData("valid");
        expect(result).toEqual({ id: "valid", name: "John Doe" });
    })

    it("should reject with 'User not found' when the user ID is invalid", async () => {
        await expect(fetchUserData("invalid")).rejects.toBe("User not found");
    });
})