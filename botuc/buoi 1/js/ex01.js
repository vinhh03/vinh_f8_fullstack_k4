// Viết chương trình in ra màn hình "Hello, World!"

function printText() {
  console.log("Hello,World!");
}
printText();

// Viết chương trình tính tổng của hai số nguyên.

function sumInteger(a, b) {
  if (a % 1 === 0 && b % 1 === 0) {
    var total = a + b;
  }
  return total;
}

console.log(sumInteger(2, 3));

// Viết chương trình tìm số lớn nhất trong ba số nguyên.

function maxNumber(a, b, c) {
  var max = a;
  if (max < b) {
    max = b;
  }
  if (max < c) {
    max = c;
  }
  return max;
}

console.log(maxNumber(7, 13, 4));

// Viết chương trình tính giai thừa của một số nguyên.

function factorial(n) {
  var i = 1,
    result = 1;
  while (i <= n) {
    result *= i;
    i++;
  }
  return result;
}

console.log(factorial(3));

// Viết chương trình in ra màn hình các số từ 1 đến 100.

function printNumber() {
  for (var i = 1; i <= 100; i++) {
    console.log(i);
  }
}

printNumber();

// Viết chương trình in ra màn hình các số chẵn từ 2 đến 100.

function printEvenNumber() {
  for (var i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}

printEvenNumber();

// Viết chương trình kiểm tra một số có phải là số nguyên tố hay không.

function checkPrime(n) {
  var check = true;
  if (n % 1 !== 0 || n < 1) {
    check = false;
  } else {
    for (var i = 2; i < n; i++) {
      if (n % i === 0) {
        check = false;
        break;
      }
    }
  }
  return check;
}

console.log(checkPrime(7));

// Viết chương trình tìm số nhỏ nhất trong một mảng số nguyên.
var arr = [1, 2, 3, 4, 5, 6, 7, 3.1];

function isInteger() {
  var chẹck = true;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 1 === 0) {
      check = false;
      break;
    }
  }
}
