// DOM Navigation
// 1. Chọn thành phần cha: parentElement
var title = document.querySelector(".title");

// Chọn thành phần cha gần nhất
// console.log(title.parentElement);
// console.log(title.parentElement.parentElement);
// console.log(title.parentElement.parentElement.parentElement);

// var menu = document.querySelector(".menu");
// console.log(menu);
// console.log(menu.children[1].children[1].children[0]);

var menuItems = document.querySelectorAll(".menu li");

menuItems.forEach(function (menuItems) {
  if (menuItems.children.length === 2) {
    menuItems.classList.add("has-children");
    var link = menuItems.children[0];
    link.addEventListener("click", function (e) {
      e.preventDefault();
      if (!menuItems.children[1].classList.contains("open")) {
        var subMenuOpen = document.querySelector(".menu ul.open");
        if (subMenuOpen !== null) {
          subMenuOpen.classList.remove("open");
          subMenuOpen.parentElement.classList.remove("icon-open");
        }
      }
      menuItems.classList.toggle("icon-open");
      menuItems.children[1].classList.toggle("open");
    });
  }
});

// var btn = document.querySelector(".has-children");
// btn.addEventListener("click", function () {
//   btn.children[1].classList.toggle("d-none");
// });

// 3. Chọn thành phần anh em

/*
 - Ngang hàng
 - Liền kề trước
 - Liền kề sau
*/

// var active = document.querySelector(".lists .active");
// var next = active.nextElementSibling;
// console.log(next);

var last = document.querySelector(".lists .last");
var prev = last.previousElementSibling;
console.log(prev);

/*
- parentNode
*/

var lists = document.querySelector("lists");
var first = lists.firstElementChild;
console.log(first);
