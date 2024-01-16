/**
 * Given SECONDS array, define function 'transformSecondsToWords' to return an array of strings from numbers
 *
 * expected: ["2", "5", "100"]
 */

const SECONDS = [2, 5, 100];

function transformSecondsToWords(seconds) {
  return seconds.map(number => number.toString());
}

export default transformSecondsToWords;