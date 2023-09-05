var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  detail: {
    age: 31,
    job: "Teacher",
    histories: [
      { year: 2020, name: "Công việc 1" },
      { year: 2021, name: "Công việc 2" },
      { year: 2022, name: "Công việc 3" },
    ],
  },
  getInfo: function () {
    var current = this;
    return {
      username: this.name,
      address: "Hà Nội",
      getFull: function () {
        return `
        Name: ${current.name}
        Email: ${current.email}
        Địa chỉ: ${this.address}
        `;
      },
    };
  },
};
// console.log(user.detail.histories[0].name);
// console.log(user.getInfo().address);
// console.log(user.getInfo().username);

console.log(user.getInfo().getFull());

Object.prototype.combine = function (...args) {
  var current = this;
  return args.map(function (value) {
    return current[value];
  });
};

Object.prototype.message = "F8 - Fullstack";

var customer = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
  age: 31,
};

console.log(customer.combine("name", "email", "age"));

var service = {
  name: "Đào tạo lập trình",
  teacher: "Hoàng An",
};

console.log(service.combine("name", "teacher"));
