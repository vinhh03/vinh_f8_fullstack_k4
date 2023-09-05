// * Let, Course
// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let:  Assignment

// Code block: if else, loop, {},...
var total = (args) =>
  args.every(!isNaN()) ? args.reduce((a, b) => +a + +b) : "Invalid Data!";
console.log(total([9, "2", true, [1]]));
