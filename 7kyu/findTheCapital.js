/**
Instructions
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] );
https://www.codewars.com/kata/539ee3b6757843632d00026b/train/javascript
 */

var capitals = function (word) {
  // Write your code here
  let arr = [];
  word.split("").forEach((e, i) => e.toUpperCase() === e && arr.push(i));
  return arr;
};
