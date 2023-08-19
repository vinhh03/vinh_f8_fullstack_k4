var arr = [4, 7, 13];

function isPrime(n) {
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

function havePrime() {
  var check = false;
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      check = true;
      break;
    }
  }
  return check;
}

if (havePrime()) {
  var total = 0,
    count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      total += arr[i];
      count++;
    }
  }
  var average = total / count;
  console.log(`Trung bình cộng các số nguyên tố trong mảng là: ${average}`);
} else {
  console.log("Không có số nguyên tố");
}
