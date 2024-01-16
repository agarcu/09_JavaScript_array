import sumNumbersFromInitialValue from "./sumNumbersFromInitialValue.js";
describe("Given sumNumbersFromInitialValue", () => {
  test("when an array of numbers and an initialValue is given as an argument, the sum of the values in the array starting at the initialValue is returned ", () => {
    const NUMBERS = [1, 2, 3, 4, 5];
    const initialValue = 0;
    const EXPECTED_RESULT = 15;

    const sum = sumNumbersFromInitialValue(NUMBERS, initialValue);

    expect(sum).toBeDefined();
    expect(sum).toEqual(EXPECTED_RESULT);
  });
  test("when an array of numbers and an initialValue is given as an argument, the sum of the values in the array starting at the initialValue is returned ", () => {
    const NUMBERS = [1, 2, 3, 4, 5];
    const initialValue = 10;
    const EXPECTED_RESULT = 25;

    const sum = sumNumbersFromInitialValue(NUMBERS, initialValue);

    expect(sum).toBeDefined();
    expect(sum).toEqual(EXPECTED_RESULT);
  });
});