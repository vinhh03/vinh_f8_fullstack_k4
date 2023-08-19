function sqrt(n) {
  for (var i = 1; i * i <= n; ++i);

  for (--i; i * i < n; i += 0.0000001);

  return i;
}
console.log(sqrt(10).toFixed(2));
console.log(Math.sqrt(10));
