// Strict Mode

/*
Chế độ nghiêm ngặt của JS => Giúp lập trình viên giảm thiểu các lỗi ngầm => Sản phẩm tương thích trên tất cả trình duyệt 
*/

// "use strict";
// a = 10;
// console.log(a);

// Hoisting
/*
 * Cơ chế mặc định của JS giúp đẩy các phần khai báo biến và hàm lên trước phần thực thi
 * - Biến:
 * + Chỉ đẩy phần khai báo, không đẩy giá trị
 * + Chỉ tồn tại với từ khóa var
 *
 * Hàm: Chỉ hỗ trợ hàm declaration
 */

// a = 10;
console.log(a);
var a = 10;

getMessage();
function getMessage() {
  console.log("Hello F8");
}
