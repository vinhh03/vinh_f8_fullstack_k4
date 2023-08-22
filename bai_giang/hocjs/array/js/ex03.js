// Vòng lặp reduce

/*
Vòng lặp reduce có 2 tham số 
- callback: Nhận vào 3 tham số
+ preValue:
++ Nếu không có giá trị khởi tạo => prev lần đầu là phần tử đầu tiên
++ Nếu có giá trị khởi tạo => prev là giá trị khởi tạo
++ return của lần trước => prev của lần sau
+ currentValue: Value của từng phần tử mảng
+ index: Index của từng phần tử mảng
-initialValue => Giá trị khởi tạo
=> Giá trị trả về của reduce 
*/

// var numbers = [1, 5, 8, 14, 974, 1, 5, 4];
// var result = numbers.reduce(function (prev, current) {
//   if (prev < current) {
//     return current;
//   }
//   return prev;
// });

// var result = numbers.reduce((prev, current) =>
//   prev < current ? current : prev
// );

// console.log(result);

// TÌm phần tử khác nhau giữa 2 mảng

var arr1 = [5, 2, 1, 9, 8];
var arr2 = [2, 1, 8, 3];

var diff = arr1.reduce(function (prev, current) {
  if (!arr2.includes(current)) {
    prev.push(current);
  }
  return prev;
}, []);

console.log(diff);
