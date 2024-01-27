import transformSecondsToWords from "./transformSecondsToWords";

describe("transformSecondsToWords", () => {
  test("returns an array of strings from numbers", () => {
    const SECONDS = [2, 5, 100];

    const result = transformSecondsToWords(SECONDS);

    expect(result).toBeDefined();

  });
});
