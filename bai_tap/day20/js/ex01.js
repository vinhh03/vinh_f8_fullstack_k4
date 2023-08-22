var arrA = [1, 4, 3, 2];
var arrB = [5, 2, 6, 7, 1];

var result = arrA.reduce(function (prev, current) {
  if (arrB.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

console.log(result);
