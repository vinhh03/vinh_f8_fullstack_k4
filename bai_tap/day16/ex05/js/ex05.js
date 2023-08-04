var a = 13,
  b = 7,
  c = 4;

if (a > c) {
  a = a + c;
  c = a - c;
  a = a - c;
}
if (a > b) {
  a = a + b;
  b = a - b;
  a = a - b;
}
if (b > c) {
  b = b + c;
  c = b - c;
  b = b - c;
}

console.log(a);
console.log(b);
console.log(c);
