// var content = document.querySelector(".content");

// var handelClick = function () {
//   var btn = content.querySelector(".btn");
//   btn.addEventListener("click", function () {
//     console.log("click");
//     content.innerHTML += `<h1>Fullstack - F8</h1>`;
//     handelClick();
//   });
// };

// handelClick();

// content.addEventListener("click", function (e) {
//   if (e.target.classList.contains("btn")) {
//     content.innerHTML += `<h1>Fullstack - F8</h1>`;
//   }
// });

var root = document.querySelector("#root");
// Tạo element
var h1 = document.createElement("h1");
h1.innerText = "Fullstack - F8";
h1.id = "title";
h1.className = "title";
// console.log(h1);

// Render element lên UI
// 1. append() || appendChild() -> Đẩy xuống dưới cùng
// 2. prepend() -> Đẩy lên trên cùng
root.append(h1);

var h2 = document.createElement("h2");
h2.innerText = "Hello F8";

root.prepend(h2);

var btn = document.createElement("button");
btn.innerText = "Add";
root.append(btn);
var count = 0;
btn.addEventListener("click", function () {
  //   var p = document.createElement("p");
  //   p.innerText = `Công việc: ${++count}`;
  //   root.append(p);
  //   if (count === 5) {
  //     h1.style.color = "red";
  //     h1.innerText = "4^`U n4^U";
  //   }
  var li = document.createElement("li");
  li.className = "item";
  li.innerText = `Item ${++count}`;
  ul.append(li);
});
var h3 = document.createElement("h3");
h3.innerText = "Hôm nay ăn gì?";
root.insertBefore(h3, h1);
var ul = document.createElement("ul");
root.insertBefore(ul, h3.nextElementSibling);

// Tạo ra cặp thẻ ul, li như sau

// insertBefore()

// bài tập tạo thẻ p nội dung bất kỳ
// -> Chèn sau node h3 ở trên
// var p = document.createElement("p");
// p.innerText = "Hello";
// root.insertBefore(p, h3.nextElementSibling);

// replaceChild() -> Thay thế node cũ bằng node mới

var h4 = document.createElement("h4");
h4.innerText = "Học lập trình để đi làm";
h4.style.color = "red";
root.replaceChild(h4, h2);

// h2 -> được giải phóng
root.append(h2);

// removeChild() -> Xóa node con
root.removeChild(h2);
