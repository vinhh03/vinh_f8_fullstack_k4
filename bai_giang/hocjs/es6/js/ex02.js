// Arrow function

// 1. Arrow function không tham số

// const getMessage = () => {
//   console.log("Hello F8");
// };

// getMessage();

// 2. Arrow function có 1 tham số
// const getMessage = (msg) => {
//   console.log(msg);
// };

// getMessage("F8");

// 3. Arrow function nhiều tham số

// const getTotal = (a, b) => {
//   console.log(a + b);
// };

// getTotal(1, 2);

// 4. Arrow function có return

// const sum = (a, b) => a + b;
// console.log(sum(2, 3));

// const getUser = () => ({ name: "Vinh", email: "ducvinh50@gmail.com" });
// console.log(getUser());

// // VD: Áp dụng với callback
// const users = [
//   {
//     id: 1,
//     name: "User 1",
//   },
//   {
//     id: 2,
//     name: "User 1",
//   },
//   {
//     id: 3,
//     name: "User 1",
//   },
// ];
// const id = 2;
// const info = users.find((user) => user.id === id);
// console.log(info);

// setTimeout(() => {
//   console.log("Hello F8");
// }, 1000);

// Arrow function với Closure
// const div = (a) => (b) => a / b;
// var result = div(10);
// console.log(result(5));
// console.log(result(2));

// Arrow function với IIFE
// (() => {
//   console.log("abc");
// })();

/**
 * Nguyên tắc dùng arrow function
 * - Không dùng thay thế function truyền thống
 * - Không binding được this
 * - Không binding được arguments
 * - Không nên sử dụng làm method object
 * - Không có hoisting
 * - Không được sử dụng xây dựng hàm tạo (Function Constructor)
 * - Arrow function không có thuộc tính prototype
 */

// Không binding được this
// const btn = document.querySelector(".btn");
// btn.addEventListener("click", () => {
//   console.log(this);
// });

// Không binding được arguments
// const getMax = () => {
//   console.log(arguments);
// };
// getMax(1, 2, 3);

// const customer = {
//   name: "Nguyễn Vinh",
//   email: "ducvinh@gmail.com",
//   getInfo: function () {
//     return this.name + ` - ` + this.email;
//   },
// };

// console.log(customer.getInfo());

// const Customer = () => {
//     this.name = "Vinh"
//     this.email = 'ducvinh@gamil.com'

// }

// Customer.prototype.message = "Hello"
// const customer = new Customer;

Array.prototype.getLength = function () {
  console.log(this);
};

const lists = [1, 2, 3];
lists.getLength();

/**
 * 1. Destructuring
 * 2. Spread Operator
 * 3. Enhance Object Literal
 * 4. Classes
 * - Cú pháp 
 * - Kế thừa: extends
 * - Static
 * - Setter, Getter
 */
