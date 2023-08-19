console.log(String.prototype);
var fullName = "Nguyễn Đức Vinh F8 Fullstack F8";
// console.log(fullName, typeof fullName);
// console.log(fullName.length);

// var fullName2 = String("Nguyễn Đức Vinh");
// console.log(fullName2, typeof fullName2);

// var fullName3 = new String("Nguyễn Đức Vinh");
// console.log(fullName3, typeof fullName3);

// 1. length => Trả về độ dài của chuỗi.
console.log(fullName.length);

// 2. charAt(index) => Trả về ký tự theo index
console.log(fullName.charAt(0));

for (var i = 0; i < fullName.length; i++) {
  console.log(fullName.charAt(i));
}

// 3. charCodeAt(index) => Trả về mã ASCII của ký tự theo index
console.log(fullName.charCodeAt(0));

// 4. concat(value1, value2,...) => nối nhiều chuỗi
console.log(fullName.concat("A", "B", "C"));

// 5. indexOf(value) => Tìm vị trí xuất hiện đầu tiên của chuỗi con trong chuỗi cha. Nếu không tìm thấy trả về -1
console.log(fullName.indexOf("F8"));

// 6. lastIndexOf(value) => Tìm vị trí cuối cùng
console.log(fullName.lastIndexOf("F8"));

// 7. includes(value) => Tìm chuỗi con trong chuỗi cha trả về true/false
console.log(fullName.includes("F8"));

// 8. slice(start, end) => Cắt chuỗi từ index đến end
console.log(fullName.slice(0, 4));

console.log(fullName.slice(-4));

// 9. replace (search, with) => Tìm kiếm và thay thế chuỗi đầu tiên tìm được
console.log(fullName.replace("F8", "F88"));

/*
Lưu ý: hàm replace hỗ trợ thay thế dựa vào biểu thức chính quy (Regular Expression, Regex)
*/

// 10. replaceAll => Thay thế tất cả
console.log(fullName.replaceAll("F8", "F88"));

// 11. split(value) => Tách chuỗi thành mảng dựa vào ký tự phân cách
console.log(fullName.split(" "));

// 12. toLowerCase() => Chuyển chuỗi thành chữ thường

// 13. toUpperCase() => Chuyển chuỗi thành chữ hoa

// 14. trim() => Loại bỏ khoảng trắng đầu và cuối chuỗi

var str = "      Vinh      ";
console.log(str.trim());

// 15. trimStart() => Loại bỏ khoảng trắng đầu chuỗi

// 16. trimEnd() => Loại bỏ khoảng trắng cuối chuỗi

// 17. match() => Cắt chuỗi dựa vào biểu thức chính quy

// Bài tập: Cắt username của email
var email = "ducvinh50@fullstack.edu.vn";

var username = email.slice(0, email.indexOf("@"));
console.log(username);
