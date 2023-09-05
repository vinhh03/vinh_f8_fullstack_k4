var user = {
  name: "Hoàng An",
  email: "hoangan.web@gmail.com",
};

var course = {
  courseName: "Fullstack K4",
  teacher: "Hoang An F8",
};

// for (key in course) {
//   user[key] = course[key];
// }

// console.log(user);

// Object.assign(target, source)
var tmp = Object.assign({}, user);
var result = Object.assign(tmp, course);

console.log(user);
console.log(result);
