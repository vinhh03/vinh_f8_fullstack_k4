// DOM Event

/*
1. Event handler
tenElement.tensukien = function() {
    // Body
}
2. Event listener
- addEventListener
- removeEventListener
*/

var btn = document.querySelector(".btn");
console.log(btn);

// var handleClick = function () {
//   console.log("Hello F8");
// };
// btn.onclick = handleClick;

// btn.onmousedown = function () {
//   console.log("Bấm chuột xuống");
// };

// btn.onmouseup = function () {
//   console.log("Nhả chuột");
// };

// btn.onmousemove = function () {
//   console.log("Di chuyển chuột");
// };

var inputEl = document.querySelector(".name");
// inputEl.onkeyup = function () {
//   console.log("Nhả phím");
// };

// inputEl.onkeydown = function () {
//   console.log("Bấm phím");
// };

// inputEl.onkeypress = function () {
//   console.log("Bấm phím ký tự");
// };

// inputEl.onchange = function () {
//   console.log("Đã thay đổi");
// };

// inputEl.onfocus = function () {
//   console.log("Focus");
// };

// inputEl.onblur = function () {
//   console.log("Blur");
// };

// btn.addEventListener("click", function () {
//   console.log("Hello F8");
// });

// btn.addEventListener("click", function () {
//   console.log("Hello F88");
// });

// btn.addEventListener("dblclick", function () {
//   console.log("Hello F88");
// });

// inputEl.onfocus = function () {
//   console.log("Focus 1");
// };

// inputEl.onfocus = function () {
//   console.log("Focus 2");
// };

var handleClick = function (e) {
  console.log("Hello F8");
  console.log(this);
  console.log(e);
};

btn.addEventListener("click", handleClick);

inputEl.addEventListener("change", function () {
  btn.removeEventListener("click", handleClick);
});

var items = document.querySelectorAll("ul li");
items.forEach(function (item) {
  item.addEventListener("click", function () {
    // console.log(item);
    console.log(this);
  });
});
