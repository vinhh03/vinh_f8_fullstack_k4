var numbers = [5, 1, 9, 8, 10];
var element = 4;

numbers.sort(function (a, b) {
  return a - b;
});

var i = 0;
if (numbers[i] < element) {
  i++;
}

numbers.splice(i, 0, element);

console.log(numbers);
