import { sum } from "../sum.js"

test("Sum should return addition of two numbers", () => {
    expect(sum(2, 3)).toBe(5);
})