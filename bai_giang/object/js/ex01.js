/*
Object = Đối tượng
- Object Literal: Đối tượng nguyên bản (gốc rễ)
- Function Constructor: Hàm tạo 
*/

var users = {
  name: "Hoàng An F8",
  email: "hoangan@fullstack.edu.vn",
  address: "Hà Nội",
  "shipping-address": "Hà Nội",
  getName: function () {
    return this.name;
  },
};
console.log(users.getName());

// Truy cập vào key trong object
// Cách 1: tenobject.tenkey
// Cách 2: tenobject['tenkey']

// console.log(user.name);
// console.log(user.email);
// console.log(user["address"]);
// console.log(user.getName());

// Thêm key mới vào trong object
// user.age = 31;
// user["job"] = "Teacher";
// console.log(user);

// Cập nhật giá trị của key đã tồn tại
// user.age = 32;
// user["address"] = "Nam Từ Liêm - HN";

// Xóa
// delete user.age;

// console.log(user);

// Duyệt các key trong Object
// for (var key in user) {
//   console.log(key, user[key]);
// }

// Object.keys(user).forEach(function (key) {
//   console.log(key, user[key]);
// });
