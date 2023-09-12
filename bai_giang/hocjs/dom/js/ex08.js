var title = document.querySelector(".title");
var btn = document.querySelector(".btn");
var name = document.querySelector(".name");

var handleDrag = function (e) {
  var x = e.clientX;
  var y = e.clientY;
  Object.assign(btn.style, {
    position: "fixed",
    top: `${y - offsetY}px`,
    left: `${x - offsetX}px`,
  });
};

btn.addEventListener("mousedown", function (e) {
  offsetX = e.offsetX;
  offsetY = e.offsetY;

  document.addEventListener("mousemove", handleDrag);
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handleDrag);
});

// Hành động mặc định HTML

/*
click a chuyển trang
submit form chuyển hướng tới action
chuột phải xuất hiện menu

=> Chặn các hành động mặc định trình duyệt
=> preventDefault()
*/

var link = document.querySelector(".link");
link.addEventListener("click", function (e) {
  e.preventDefault();
  console.log(this.href);
});

document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
  alert("Đừng copy của bố");
});
