// 4. filter(callback)
/*
callback có 2 tham số: value và index
trả về một mảng mới
phụ thuộc vào return true của mảng mới
*/

// var numbers = [5, 1, 2, 9, 6, 8, 2];

// var result = numbers.filter((x) => x % 2 === 0);
// var numbers = numbers.filter((x) => !(x % 2 === 0));

// console.log(result);
// console.log(numbers);

// var customers = [
//   "Tạ Hoàng An",
//   "Lưu Anh Quân",
//   "Nguyễn Xuân Tuấn Anh",
//   "Hoàng Văn Thanh",
//   "Phạm Hoàng Anh",
//   "Trần Đình Quý",
//   "Nguyễn Chi Nam",
// ];

// var keyWord = "an";

// var result = customers.filter(function (customer) {
//   return customer.toLowerCase().includes(keyWord.toLowerCase());
// });

// console.log(result);

// 5. find(callback)

// var numbers = [5, 1, 2, 9, 6, 8, 2];

// var result = numbers.find((x) => x >= 3);

// console.log(result);

// 6. findLast(callback)

// var numbers = [5, 1, 2, 9, 6, 8, 2];

// var result = numbers.findLast((x) => x >= 3);

// console.log(result);

// 7. findIndex()

// Cách hoạt động giống find trả về index

// 8. findLastIndex()

//  Cách hoạt động giống findLast trả về index

// var users = [
//   ["Hoàng An", "hoangan@gmail.com"],
//   ["Tuấn Anh", "tuananh@gmail.com"],
//   ["Nguyễn Dương", "nguyenduong@gmail.com"],
//   ["Chi Nam", "chinam@gmail.com"],
// ];

// console.log(users);

// var email = "tuananh@gmail.com";

// var users = users.filter((user) => user[1] !== email);

// console.log(users);

// 9. some()
// Hàm trả về true nếu ít nhất 1 lần callback return true
// Hàm trả về false nếu tất cả callback return false

// var numbers = [1, 3, 5, 7, 9];
// var check = numbers.some((number) => number % 2 === 0);
// console.log(check);

// 10. every()
// Hàm trả về true nếu tất cả callback return true
// Hàm trả về false nếu ít nhất 1 lần false

// var numbers = [1, 3, 5, 7, 9];
// var check = numbers.every((number) => number % 2 !== 0);
// console.log(check);
