var s = 0;
var n = 4;

if (n % 1 === 0) {
  for (var i = 1; i <= n; i++) {
    s += i * (i + 1);
  }
  console.log(s);
}
