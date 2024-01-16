/**
 * Given MATES array, define function 'capitalizeMates' to return an array of strings with capitalized names
 *
 * expected: ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */

const MATES = ["john", "JACOB", "jinGleHeimer", "schmidt"];

function capitalizeMates() {
  return MATES.map(name => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
}

export default capitalizeMates;
