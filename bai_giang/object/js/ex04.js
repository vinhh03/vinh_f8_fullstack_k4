// var user = {
//   name: "Hoàng An",
//   email: "hoangan@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

// var customer = {
//   name: "Anh Quân",
//   email: "anhquan@gmail.com",
//   getName: function () {
//     return this.name;
//   },
// };

// Tạo ra 1 bản thiết kế cho Object
// => Function Constructor
// Đặt tên theo cú pháp PascalCase

// var Person = function (name, email) {
//   this.name = name;
//   this.email = email;
//   this.getName = function () {
//     return this.name;
//   };
// };

// Person.prototype.message = "Hoàng An F8";

// var person = new Person("An", "an@gmail.com");
// console.log(person);
// console.log(person.message);

// var user = new Person("Vinh", "vinh@gmail.com");
// console.log(user);

var User = function () {
  this.name = "Hoàng An";
  this.email = "hoangan@gmail.com";
};

var Auth = function () {
  var user = new User();
  this.getInfo = function () {
    return `
    Name: ${user.name}
    Email: ${user.email}
    `;
  };
};

var auth = new Auth();
console.log(auth.getInfo());

var a = {};

if (typeof a === "object" && !Array.isArray(a) && a !== null) {
  console.log("Is Object");
} else {
  console.log("Isn't Object");
}

// Tạo ra 1 hàm nội bộ ở bên trong 1 hàm tạo
var getMessage = function () {
  return "Hello F8";
};

console.log(window.getMessage());
var getMessage = function () {
  return "Hello F8";
};

User.getMessage2 = function () {
  return `Hello - F8 02`;
};

console.log(User.getMessage2());
