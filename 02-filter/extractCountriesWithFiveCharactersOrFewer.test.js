import extractCountriesWithFiveCharactersOrFewer from "./extractCountriesWithFiveCharactersOrFewer";

describe("extractCountriesWithFiveCharactersOrFewer", () => {
  test("returns an array with countries of 5 characters or fewer", () => {
    const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    expect(result).toEqual(["Italy"]);
  });

  test("returns an empty array if no countries meet the criteria", () => {
    const COUNTRIES = ["Canada", "Australia", "Germany"];

    const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);

    expect(result).toEqual([]);
  });

});
