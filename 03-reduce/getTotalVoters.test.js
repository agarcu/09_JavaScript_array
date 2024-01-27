import getTotalVoters from "./getTotalVoters";

describe("getTotalVoters", () => {
  test("returns the count of people who voted", () => {
    const VOTERS = [
      { name: "Bob", age: 30, voted: true },
      { name: "Jake", age: 32, voted: true },
      { name: "Kate", age: 25, voted: false },
    ];

    const result = getTotalVoters(VOTERS);

    expect(result).toBe(7);
  });
});