/**
 * Given 'WORDS' array, define function 'getLongWords' to return an array only with strings with length equal or greater then 5
 * use for() instruction
 *
 * expected LANGUAGES: ['JavaScript', 'TypeScript']
 * expected BEATLES: ["George", "Ringo"];
 */

const LANGUAGES = ["Java", "C++", "JavaScript", "C#", "TypeScript"];
const BEATLES = ["John", "George", "Paul", "Ringo"];

function getLongWords(words) {
  const longWords = [];

  for (let i = 0; i < words.length; i++) {
    if (words[i].length >= 5) {
      longWords.push(words[i]);
    }
  }

  return longWords;
}

// Export the function for testing purposes
module.exports = getLongWords;