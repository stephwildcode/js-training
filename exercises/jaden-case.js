'use strict'

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

function jadenCase(str) {
  var wordsArray = str.split(/\s+/);
  var upperCased = wordsArray.map(function(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  });
  return upperCased.join(" ");
}



//* Begin of tests
const assert = require('assert')
assert.strictEqual(typeof jadenCase, "function")
assert.strictEqual(jadenCase('str'), 'Str')
assert.strictEqual(jadenCase('qsdqsdqsd'), 'Qsdqsdqsd')
assert.strictEqual(jadenCase('STR'), 'STR')
assert.strictEqual(jadenCase('zapZAP'), 'ZapZAP')
//assert.fail('You must write your own tests')


// End of tests */
