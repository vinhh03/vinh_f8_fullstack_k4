// for (var i = 0; i < 10; i++) {
//   for (var j = 0; j < 10; j++) {
//     console.log(`${i} - ${j}`);
//   }
// }

// var n = 21;
// var count = 0,
//   total = 0;
// for (var i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     total += i;
//     count++;
//   }
// }

// var average = total / count;
// console.log(`TBC: ${average}`);

// var n = 5;
// var check = true;
// if (n % 1 !== 0 || n <= 1) {
//   check = false;
// } else {
//   for (var i = 2; i < n; i++) {
//     if (n % i === 0) {
//       check = "false";
//       break;
//     }
//   }
// }
// console.log(check);
// var i = 1;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// var money = 5350000;
// var a = 0,
//   b = 0,
//   c = 0,
//   d = 0;

// if (money % 50 === 0) {
//   while (money > 0) {
//     if (money >= 500000) {
//       a = money / 500000;
//       a = a - (a % 1);
//       money -= a * 500000;
//     } else if (money >= 200000) {
//       b = money / 200000;
//       b = b - (b % 1);
//       money -= b * 200000;
//     } else if (money >= 100000) {
//       c = money / 100000;
//       c = c - (c % 1);
//       money -= c * 100000;
//     } else {
//       d = money / 50000;
//       d = d - (d % 1);
//       money -= d * 50000;
//     }
//   }
// }

// console.log(a, b, c, d);

for (var i = 1; i <= 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

function isPrime(a) {
  var check = true;
  if (a % 1 !== 0 || a <= 1) {
    check = false;
  } else {
    for (var i = 2; i < a; i++) {
      if (a % i === 0) {
        check = false;
      }
    }
  }
  return check;
}

function sumPrime(n) {
  var sum = 0,
    i = 2;
  while (i < n) {
    if (isPrime(i)) {
      sum += i;
    }
    i++;
  }
  return sum;
}

console.log(sumPrime(5));
