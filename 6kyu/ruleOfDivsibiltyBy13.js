// A Rule of Divisibility by 13

//https://www.codewars.com/kata/564057bc348c7200bd0000ff/train/javascript

function thirt(n) {
  let reducedNum = [...('' + n)]
    .reverse()
    .reduce((acc, curr, idx) => acc + curr * (Math.pow(10, idx) % 13), 0);
  return n === reducedNum ? reducedNum : thirt(reducedNum);
}
