var arr = [1, 2, 1, 3, 4];

arr = arr.filter(function (a, b) {
  return arr.indexOf(a) === b;
});

console.log(arr);
