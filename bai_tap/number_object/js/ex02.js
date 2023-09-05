var price = "123456896";
Object.prototype.getCurrency = function (unit) {
  if (!+this) return "Không phải số";
  var arr = this.toString().split("");
  for (var i = arr.length - 1; i >= 0; i -= 3) {
    if (i === arr.length - 1) continue;
    arr[i] += ",";
  }
  return arr.join("") + " " + unit;
};
console.log(price.getCurrency("đ"));
