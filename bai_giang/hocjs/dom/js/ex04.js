// DOM HTML làm việc với thuộc tính

/*
1. Thuộc tính có sẵn của thẻ HTML 
tenElement.tenthuoctinh lấy giá trị thuộc tính
tenElement.tenthuoctinh = gaitri thiết lập giá trị mới cho thuộc tính

2. Thuộc tính không có sẵn
Data Attribute:
data-*
VD: data-index, data-count
*/

var img = document.querySelector("img");

// Đọc nội dung các thuộc tính
console.log(img.src);
console.log(img.alt);
console.log(img.title);
// console.log(img.href);
console.log(img.width);
console.log(img.height);

// Thay đổi giá trị thuộc tính
img.src =
  "https://fastly.picsum.photos/id/382/200/300.jpg?hmac=ql7Jj1WJu3zhhAn2p18Oxdn-JE1qZBR-lDF-MOVXCUA";

// console.log(img.getAttribute("data-count"));
console.log(img.dataset.count);
console.log(img.dataset.numberIndex);

// Cập nhật giá trị cho data attribute
img.setAttribute("data-count", 10);
img.dataset.numberIndex = "ahihi";

// Xóa thuộc tính
img.removeAttribute("src");

// Xóa HTML
img.remove();
