var arr = [4, 7, 13, 14, 77, 47];

function isInteger() {
  var check = true;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 1 !== 0) {
      check = false;
    }
  }
  return check;
}

if (isInteger()) {
  var max = arr[0],
    min = arr[0];
  var indexMax = 0,
    indexMin = 0;

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
      indexMax = i;
    }
    if (arr[i] < min) {
      min = arr[i];
      indexMin = i;
    }
  }
  console.log(
    `Số lớn nhất là: ${max}, ở vị trí ${indexMax} của mảng. \nSố nhỏ nhất là: ${min}, ở vị trí ${indexMin} của mảng.`
  );
} else {
  console.log("Không là mảng số nguyên");
}
