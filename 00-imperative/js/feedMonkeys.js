/**
 * Given 'MONKEYS' array, define function 'feedMonkeys' to return an array where each monkey has one fruit
 * use for() instruction
 *
 * expected: with 🍌 => ['🐒 🍌', '🦍 🍌', '🦧 🍌']
 * expected: with 🍎 => ['🐒 🍎', '🦍 🍎', '🦧 🍎']
 */

const MONKEYS = ["🐒", "🦍", "🦧"];

const feedMonkeys = function(fruit){
    const monkeys = [];

    const collectionlength = MONKEYS.length;

    for (let index=0;index<collectionlength;index++) {
        const monkey = `${MONKEYS[index]} ${fruit}`;
        monkeys.push(monkey);
    }

    return monkeys;
}

export default feedMonkeys;