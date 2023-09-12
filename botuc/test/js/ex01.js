// * Let, Course
// 1. Var / Let, Const: Scope, Hosting
// 2. Const / Var, Let:  Assignment

// Code block: if else, loop, {},...
var price = "123456896";
Object.prototype.getCurrency = function (unit) {
  if (!+this) return "Không phải là số";
  var arr = this.toString().split("");
  for (var i = arr.length - 1; i >= 0; i -= 3) {
    if (i === arr.length - 1) continue;
    arr[i] += ",";
  }
  return arr.join("") + " " + unit;
};
console.log(price.getCurrency("đ"));