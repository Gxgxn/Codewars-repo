/** *
Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.

The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.

You're father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.

Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

 */
function rotate(str) {
  //code here
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    let str1 = str.slice(0, i + 1);
    let str2 = str.slice(i + 1);
    arr.push(str2 + str1);
  }
  return arr;
}
