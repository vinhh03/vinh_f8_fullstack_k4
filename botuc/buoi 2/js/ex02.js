var database = {
  lastNames: [
    "An",
    "Anh",
    "Bảo",
    "Bình",
    "Cẩm",
    "Chi",
    "Chinh",
    "Diễm",
    "Dung",
    "Dương",
    "Giang",
    "Hà",
    "Hải",
    "Hạnh",
    "Hiếu",
    "Hoài",
    "Hoàng",
    "Hồng",
    "Huyền",
    "Khanh",
    "Khánh",
    "Lan",
    "Linh",
    "Loan",
    "Ly",
    "Mai",
    "Minh",
    "Mỹ",
    "Nga",
    "Ngân",
    "Ngọc",
    "Nhiên",
    "Phương",
    "Quỳnh",
    "Thảo",
    "Thiên",
    "Thùy",
    "Trâm",
    "Trang",
    "Tú",
    "Tuyết",
    "Uyên",
    "Vân",
    "Việt",
    "Xuân",
    "Yến",
  ],
  midNames: [
    "Anh",
    "Bích",
    "Bình",
    "Cẩm",
    "Diệu",
    "Đức",
    "Gia",
    "Hải",
    "Hoàng",
    "Hữu",
    "Khắc",
    "Kim",
    "Lâm",
    "Minh",
    "Ngọc",
    "Như",
    "Phúc",
    "Quang",
    "Quốc",
    "Thái",
    "Thanh",
    "Thị",
    "Thuỷ",
    "Trung",
    "Tuấn",
  ],
  firstNames: [
    "Bùi",
    "Cao",
    "Chủ",
    "Đặng",
    "Đinh",
    "Đỗ",
    "Đức",
    "Dương",
    "Hoàng",
    "Huỳnh",
    "Lê",
    "Lý",
    "Mai",
    "Ngô",
    "Nguyễn",
    "Phạm",
    "Phan",
    "Trần",
    "Trịnh",
    "Võ",
    "Vũ",
  ],
};

function removeAccent(str) {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace("đ", "d")
    .replace("Đ", "D");
}

function 

function randomID(fullName) {
  var word = removeAccent(fullName.replaceAll(" ", ""));
  var char = word.split("");
  for (var i = 0; i < char.length; i++) {
    var j = Math.floor(Math.random() * char.length);
    var temp = char[i];
    char[i] = char[j];
    char[j] = temp;
  }
  return char.join("");
}



var html = ``;

document.write(html);
