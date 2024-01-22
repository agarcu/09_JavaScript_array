import getWordFromValues from "./getWordFromValues";

describe("getWordFromValues", () => {
  test("returns a string of all the numbers", () => {
    const VALUES = [1, 2, 3];

    const result = getWordFromValues(VALUES);

    expect(result).toBe("123");
  });
});
