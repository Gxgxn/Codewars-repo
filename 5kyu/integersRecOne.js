//https://www.codewars.com/kata/55aa075506463dac6600010d/train/javascript
function listSquared(m, n) {
  var arr = []; // return array
  for (var i = m; i <= n; i++) {
    // outer for loop, loops from m ---> n
    var temp = 0; //temp to hold the sum of divisor
    for (var j = 1; j <= i; j++) {
      if (i % j == 0) temp += j * j; //find the divisor & add the sum to temp
    }
    if (Math.sqrt(temp) % 1 == 0) arr.push([i, temp]); //pushes the number and sum if sqaure sum is a perfect square
  }
  return arr; //returning the array
}
