import extractVipsNames from "./extractVipsNames";

describe("extractVipsNames", () => {
  test("returns an array of strings with only VIPs' names", () => {
    const VIPS = [
      {
        name: "Foo",
        age: 80,
      },
      {
        name: "Bar",
        age: 2,
      },
      {
        name: "Fizz",
        age: 5,
      },
      {
        name: "Buzz",
        age: 16,
      },
      {
        name: "FizzBuzz",
        age: 100,
      },
    ];

    const EXPECTED_RESULT = ["Foo", "Bar", "Fizz", "Buzz", "FizzBuzz"];

    const result = extractVipsNames(VIPS);

    expect(result).toBeDefined();
    expect(result).toEqual(EXPECTED_RESULT);
  });
});
