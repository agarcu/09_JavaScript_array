import getEvensOnly from "./getEvensOnly";

describe("getEvensOnly", () => {
    test("returns an array with even numbers only", () => {
        const COUNTERS = [2, 25, 43, 12, 67, 42, 28];

        const result = getEvensOnly(COUNTERS);

        expect(result).toEqual([2, 12, 42, 28]);
    });
});