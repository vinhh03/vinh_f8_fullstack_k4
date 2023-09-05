var total = (args) =>
  args.every(Number) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
console.log(total([9, "2", true, [1]]));
