var title = document.querySelector(".title");
console.log(title);

// console.log(title.className);

console.log(title.classList);

// Các phương thức
// 1. add() thêm class vào element

title.classList.add("title5", "title6");

// 2. remove() xóa class trong element
title.classList.remove("title2");

// 3.contains() kiểm tra class có tồn tại
console.log(title.classList.contains("title4"));

// 4. toggle()

/*
- Thêm class nếu không tồn tại
- Xóa class nếu có tồn tại
*/

title.classList.toggle("title6");
title.classList.toggle("title6");

var content = document.querySelector(".content");
var btn = document.querySelector(".btn");

btn.addEventListener("click", function () {
  if (!content.classList.contains("hide")) {
    content.classList.add("hide");
    this.innerText = "Hiện";
  } else {
    content.classList.remove("hide");
    this.innerText = "Ẩn";
  }
});
