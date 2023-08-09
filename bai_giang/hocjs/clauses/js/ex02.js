var action = "add";

switch (action) {
  case "create":
  case "insert":
  case "add":
    console.log("Thêm");
    break;

  case "edit":
  case "update":
    console.log("Sửa");
    break;

  case "delete":
  case "remove":
    console.log("Xóa");
    break;

  default:
    console.log("Danh sách");
    break;
}

if (action === "create" || action === "insert" || action === "add") {
  console.log("Thêm");
} else if (action === "edit" || action === "update") {
  console.log("Sửa");
} else if (action === "delete" || action === "remove") {
  console.log("Xóa");
} else {
  console.log("Danh sách");
}
