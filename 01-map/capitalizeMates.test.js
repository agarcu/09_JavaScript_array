import capitalizeMates from "./capitalizeMates";

describe("capitalizeMates", () => {
  test("capitalizes the first letter and converts the rest of the string to lowercase", () => {
    const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];
    const EXPECTED_RESULT = ["John", "Jacob", "Jingleheimer", "Schmidt"];

    const result = capitalizeMates(MATES);

    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
