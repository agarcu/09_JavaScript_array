import createLocalesSettings from "./createLocalesSettings";

describe("createLocalesSettings", () => {
    test("returns an object with locales settings", () => {
        const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

        const result = createLocalesSettings(LOCALES);

        expect(result).toEqual({
            "EN": { id: 0, enabled: true },
            "GR": { id: 1, enabled: false },
            "FR": { id: 2, enabled: false },
            "IT": { id: 3, enabled: false },
            "PT": { id: 4, enabled: false },
        });
    });
});