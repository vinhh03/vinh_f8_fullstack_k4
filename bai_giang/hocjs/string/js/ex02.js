// var fullName = "TẠ HOÀNG AN";

// var check = fullName.includes(fullName.toUpperCase());

// console.log(check);

var fullName = "nguyễn đức vinh";

fullName = fullName.charAt(0).toUpperCase() + fullName.slice(1);

for (var i = 1; i < fullName.length; i++) {
  var char = fullName.charAt(i);
  if (char === " ") {
    var index = i + 1;
    fullName =
      fullName.slice(0, index) +
      fullName.charAt(index).toUpperCase() +
      fullName.slice(index + 1);
  }
}
console.log(fullName);
