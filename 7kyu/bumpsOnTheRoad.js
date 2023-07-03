//Bumps in the Road
//https://www.codewars.com/kata/57ed30dde7728215300005fa/train/javascript
function bump(x) {
  return x.match(/n/g)?.length > 15 ? 'Car Dead' : 'Woohoo!';
}
