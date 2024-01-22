/**
 * Given 'LOCALES' array, define function 'createLocalesSettings' to return an object with locales settings
 *
 * expected:
 * {
 *  "EN": {id: 0, enabled: true},
 *  "US": {id: 1, enabled: false},
 *  "EN": {id: 2, enabled: false},
 *  "EN": {id: 3, enabled: false},
 *  "EN": {id: 4, enabled: false},
 * }
 */

const LOCALES = ["EN", "GR", "FR", "IT", "PT"];

function createLocalesSettings(locales) {
    const localesSettings = {};

    for (let i = 0; i < locales.length; i++) {
        localesSettings[locales[i]] = {
            id: i,
            enabled: i === 0, // Només el primer element té enabled a true, la resta a false
        };
    }

    return localesSettings;
}

export default createLocalesSettings;