var btn = document.querySelector(".btn");
var modalBox = document.querySelector(".modal-box");
var modalClose = document.querySelector(".close");
var modalOverlay = document.querySelector(".overlay");

var closeModal = function () {
  modalBox.classList.remove("show");
};

btn.addEventListener("click", function () {
  modalBox.classList.add("show");
});

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);
