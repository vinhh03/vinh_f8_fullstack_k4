console.log(Array.prototype);
console.log([Array]);

// var users = ["An", "Dương", "Vương"];
// console.log(users);
// console.log(typeof users);

// var users = new Array("An", "Dương", "Vương");
// console.log(users);
// console.log(typeof users);

// if (Array.isArray(users)) {
//   console.log("Đây là mảng");
// } else {
//   console.log("Đây không phải là mảng");
// }

// Lấy số lượng phần tử của mảng
// console.log(users.length);

// Thêm phần tử vào cuối mảng
// users[users.length] = "Vinh";
// users[users.length] = "Vy";
// users[users.length] = "Lan";

// console.log(users);

// Sửa phần tử trong mảng
// users[2] = "Dũng";
// console.log(users);

// Truy cập vào 1 phần tử trong mảng
// console.log(users[3]);

// Duyệt mảng
// for (var index = 0; index < users.length; index++) {
//   console.log(users[index]);
// }

// for (var index in users) {
//   console.log(users[index]);
// }

// for (var value of users) {
//   console.log(value);
// }

// var indexDel = 1;
// var newArr = [];
// for (var index in users) {
//   if (+indexDel === +index) {
//     continue;
//   }
//   newArr[newArr.length] = users[index];
// }
// console.log(newArr);

// var value = "Tuấn";
// var newArr = [value];
// for (var index in users) {
//   newArr[newArr.length] = users[index];
// }
// console.log(newArr);

// Nối 2 mảng trả về mảng mới

// var arr1 = ["A", "B", "C", "D"];

// var arr2 = [1, 2, 3];

// var newArr = [];
// for (var index in arr1) {
//   newArr[newArr.length] = arr1[index];
// }
// for (var index in arr2) {
//   newArr[newArr.length] = arr2[index];
// // }

// for (var index = 0; index < arr1.length + arr2.length; index++) {
//   if (index < arr1.length) {
//     newArr[newArr.length] = arr1[index];
//   } else {
//     newArr[newArr.length] = arr2[index - arr1.length];
//   }
// }

// console.log(arr1);
// console.log(arr2);
// console.log(newArr);

// var users = ["An", "Dương", "Vương", "Vinh"];
// console.log(users);
// console.log(users.concat("Tùng"));

// 1.

// 3. indexOf(value) => Tìm vị trí xuất hiện của phần tử đầu tiên
// console.log(users.indexOf("Vinh"));

// 4. lastIndexOf(value) => Tìm vị trí xuất hiện cuối cùng của phần tử trong mảng
// console.log(users.lastIndexOf("Vinh"));

// 5. includes(value) => Tìm kiếm phần tử trong mảng và trả về true/false
// console.log(users.includes("Vinh"));

// 6. slice(start, end) => Cắt mảng và trả về mảng mới
// console.log(users.slice(2, 4));
// console.log(users.slice(2));
// console.log(users.slice(-2));

// 7. join(sep) => Nối các phần tử mảng thành một chuỗi và có ký hiệu nối
// console.log(users.join(" "));

// Lấy tên của họ và tên
// var fullName = "Tạ Hoàng An";
// var firstName = fullName.split(" ").slice(-1).join();
// console.log(firstName);

// 8. push() => Thêm phần tử vào cuối mảng, thay đổi mảng ban đầu, hàm này trả về số lượng phần tử sau khi thêm
// var count = users.push("A", "B", "C");
// console.log(count);
// console.log(users);

// 9. unshift() => Thêm phần tử vào đầu mảng và trả về số lượng sau khi thêm
// var count = users.unshift("A", "B", "C");
// console.log(count);
// console.log(users);

// 10. pop() => Xóa phần tử cuối mảng và trả về giá trị phần tử vừa xóa
// var value = users.pop();
// console.log(users);
// console.log(value);

// 11. shift() => Xóa phần tử đầu mảng và trả về giá trị vừa xóa
// var value = users.shift();
// console.log(users);
// console.log(value);

// 12. splice(index, number) => Xóa number phần tử từ vị trí index
// var result = users.splice(1, 2, "A", "B", "C");
// console.log(users);
// console.log(result);

// 13. sort() => Sắp xếp mảng theo thứ tự tăng dần
// users.sort();
// console.log(users);

// var numbers = [1, 10, 100, 3, 8];
// numbers.sort(function (a, b) {
//   return b - a;
// });
// console.log(numbers);

// var customers = [
//   "Nguyễn Hoàng An",
//   "Hoàng Văn Thanh",
//   "Đặng Ngọc Khải",
//   "Nguyễn Chi Nam",
// ];

// var getFirstName = function (fullName) {
//   return fullName.split(" ").slice(-1).join();
// };

// customers.sort(function (next, prev) {
//   if (getFirstName(prev) > getFirstName(next)) {
//     return -1;
//   }
// });

// console.log(customers);

// var users = ["An", "Dương", "Vương", "Vinh", "Vy"];

//  1. fill(value) => Thay đổi tất cả các phần tử mảng thành 1 giá trị
// users.fill("F8");
// console.log(users);

// 2. forEach(callback)

/*
- Duyệt qua từng phần tử mảng
- Trả về phần tử và index trong callback
- Chỉ duyệt, không trả về giá trị, không dừng được
 */

// users.forEach(function (value, index) {
//   console.log(value, index);
// });

// 3. map(callback)

/*
- Vòng lặp này trả về 1 mảng mới
- Số lượng phần tử của mảng mới luôn bằng số lượng của mảng ban đầu
- Giá trị phần tử của mảng mới phụ thuộc vào return của callback
 */

// var newArr = users.map(function (value, index) {
//   console.log(value, index);
//   return `<h3>${index} - ${value}</h3>`;
// });

// console.log(newArr);
var users = ["An", "Dương", "Vương", "Vinh", "Vy"];
var html = `<ul>
${users
  .map(function (user) {
    return `<li>${user}</li>`;
  })
  .join("")}

</ul>`;

document.write(html);

var query = [
  ["name", "F8"],
  ["keyword", "Fullstack"],
  ["category", 1],
];

var result = query
  .map(function (value) {
    return value.join("=");
  })
  .join("&");

console.log(result);
