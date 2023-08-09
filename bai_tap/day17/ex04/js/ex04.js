var n = 5;
var check = true;
if (n <= 1 || n % 1 !== 0) {
  check = false;
} else {
  for (var i = 2; i < n; i++) {
    if (n % i === 0) {
      check = false;
      break;
    }
  }
}

console.log(check);
