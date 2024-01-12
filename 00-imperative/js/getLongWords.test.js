/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array
 * only with strings with length equal or greater than 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */


import getLongWords from "./getLongWords.js";

test('getLongWords returns an array with words of length 5 or greater', () => {
  const resultLanguages = getLongWords(LANGUAGES);
  const resultBeatles = getLongWords(BEATLES);

  expect(resultLanguages).toEqual(['JavaScript', 'TypeScript']);
  expect(resultBeatles).toEqual(['George', 'Ringo']);
});

test('getLongWords returns an empty array when given an empty array', () => {
  const result = getLongWords([]);
  expect(result).toEqual([]);
});

test('getLongWords returns an empty array when no long words are found', () => {
  const result = getLongWords(['Java', 'C++', 'C#']);
  expect(result).toEqual([]);
});
