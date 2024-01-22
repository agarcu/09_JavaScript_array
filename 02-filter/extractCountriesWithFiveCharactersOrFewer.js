/**
 * Given COUNTRIES array, define function 'extractCountriesWithFiveCharactersOrFewer' return a new array that only includes those countries that are 5 characters or fewer in length.
 *
 * expected: [ 'Italy' ]
 */

const COUNTRIES = ["United Kingdom", "Italy", "France", "Portugal", "Greece"];

function extractCountriesWithFiveCharactersOrFewer(countries) {
    return countries.filter(country => country.length <= 5);
}

const result = extractCountriesWithFiveCharactersOrFewer(COUNTRIES);
console.log(result); 

export default extractCountriesWithFiveCharactersOrFewer;
