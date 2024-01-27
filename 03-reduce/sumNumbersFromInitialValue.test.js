import sumNumbersFromInitialValue from "./sumNumbersFromInitialValue";

describe("sumNumbersFromInitialValue", () => {
  test("returns the sum value with initial as 0", () => {
    const NUMBERS = [1, 2, 3, 4, 5];

    const result = sumNumbersFromInitialValue(NUMBERS, 0);

    expect(result).toBe(15);
  });

  test("returns the sum value with initial as 10", () => {
    const NUMBERS = [1, 2, 3, 4, 5];

    const result = sumNumbersFromInitialValue(NUMBERS, 10);

    expect(result).toBe(25);
  });
});