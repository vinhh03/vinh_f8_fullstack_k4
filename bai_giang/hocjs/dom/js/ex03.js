// DOM HTML

var content = document.querySelector(".content");

// 1. Lấy nội dung HTML
// 1.1. innerHTML lấy nội dung bên trong thẻ HTML (bao gồm cả thẻ html và khoảng trắng)
// console.log(content.innerHTML);

// 1.2. innerText lấy nội dung bên trong thẻ HTML (chỉ lấy text và loại bỏ khoảng trắng)
// console.log(content.innerText);

// 1.3. textContent lấy nọi dung bên trong thẻ HTML (chỉ ấy text và không loại bỏ khoảng trắng)
// console.log(content.textContent);

// 1.4. outerHTML lấy nội dung bên trong bao gồm element đang tác động
// console.log(content.outerHTML);

// 2. Cập nhật nội dung cho thẻ HTML
// content.innerHTML = "<h2>Hoàng An</h2>";
// content.innerText = "<h2>Hoàng An</h2>";
// content.outerHTML = "<h2>Hoàng An</h2>";
// content.outerText = "<h2>Hoàng An</h2>";

var count = document.querySelector(".count");

var plus = document.querySelector(".plus");
plus.addEventListener("click", function () {
  count.innerText++;
});

var minus = document.querySelector(".minus");
minus.addEventListener("click", function () {
  count.innerText--;
});
