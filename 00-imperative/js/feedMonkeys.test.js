import feedMonkeys from "./feedMonkeys.js";
describe("Given feedMonkeys", () => {
  test("when 🍌 is provided as argument Then expected array should be returned ", () => {
    const fruit = "🍌";
    const EXPECTED_RESULT = ["🐒 🍌", "🦍 🍌", "🦧 🍌"];

    const Monkeys = feedMonkeys(fruit);

    expect(Monkeys).toBeDefined();
    expect(Monkeys).toEqual(EXPECTED_RESULT);
  });
  test("when 🍎 is provided as argument Then expected array should be returned ", () => {
    const fruit = "🍎";
    const EXPECTED_RESULT = ["🐒 🍎", "🦍 🍎", "🦧 🍎"];

    const Monkeys = feedMonkeys(fruit);

    expect(Monkeys).toBeDefined();
    expect(Monkeys).toEqual(EXPECTED_RESULT);
  });
});