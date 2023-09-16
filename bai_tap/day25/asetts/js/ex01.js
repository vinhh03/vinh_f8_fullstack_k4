//  Tạo các element
var carousel = document.querySelector(".carousel");
var carouselInner = carousel.querySelector(".carousel-inner");
var carouselItems = carouselInner.children;
// carouselItems.forEach(function (a) {
//   console.log(a);
// });

// console.log(Array.isArray(carouselItems));

var carouselItems = carouselInner.querySelectorAll(".item");
var carouselNav = carousel.querySelector(".carousel-nav");
var carouselDots = carousel.querySelector(".carousel-dots");
var carouselNextBtn = carousel.querySelector(".carousel-nav .next");
var carouselPrevBtn = carousel.querySelector(".carousel-nav .prev");

var renderDots = function (indexDot = 0) {
  var dotsHtml = "";
  carouselItems.forEach(function (item, _index) {
    dotsHtml += `<span data-index="${_index}" ${
      +_index === +indexDot ? 'class="active"' : ""
    }></span>`;
  });
  carouselDots.innerHTML = dotsHtml;

  carouselDots.addEventListener("click", function (e) {
    if (e.target.nodeName === "SPAN") {
      var indexClicked = e.target.dataset.index;
      index = indexClicked;
      goSlide();
    }
  });
};

var goSlide = function () {
  position = 0 - index * itemWidth;
  carouselInner.style.translate = `${position}px`;
  renderDots(index);
};

// Tính kích thước 1 item
var itemWidth = carouselInner.clientWidth; //Lấy kích thước chiều rộng của 1 element

// Tính tổng kích thước các item
var totalWidth = carouselItems.length * itemWidth;

// Cập nhật CSS
carouselInner.style.width = `${totalWidth}px`;

renderDots();

var position = 0;
var index = 0;
// Lắng nghe sự kiện của nút next
carouselNextBtn.addEventListener("click", function () {
  if (Math.abs(position) + itemWidth * 2 > totalWidth) {
    return;
  }
  //   Khi bấm vào nút next => Trừ đi kích thước 1 item
  position -= itemWidth;
  index++;
  carouselInner.style.translate = `${position}px`;

  renderDots(index);
});

carouselPrevBtn.addEventListener("click", function () {
  if (Math.abs(position) < itemWidth) {
    return;
  }

  position += itemWidth;
  index--;
  carouselInner.style.translate = `${position}px`;

  renderDots(index);
});

var isDrag = false;
var initialOffsetX = 0;
var moveWidth;

carousel.addEventListener("mousedown", function (e) {
  e.preventDefault();
  carousel.classList.add("drag");
});

carousel.addEventListener("mouseup", function (e) {
  e.preventDefault();
  carousel.classList.remove("drag");
});

carouselInner.addEventListener("mousedown", function (e) {
  e.preventDefault();
  if (e.which === 1) {
    isDrag = true;
    initialOffsetX = e.offsetX;
  }
});

carouselInner.addEventListener("mouseup", function () {
  isDrag = false;
  carouselInner.style.transition = null;
  if (moveWidth < 0) {
    if (Math.abs(moveWidth) > 100 && index < carouselItems.length - 1) {
      index++;
    }

    goSlide(index);
  } else {
    if (Math.abs(moveWidth) > 100 && index > 0) {
      index--;
    }

    position = 0 - index * itemWidth;
    carouselInner.style.translate = `${position}px`;

    goSlide(index);
  }
});

carouselInner.addEventListener("mousemove", function (e) {
  e.preventDefault();
  if (isDrag) {
    moveWidth = e.offsetX - initialOffsetX;
    carouselInner.style.transition = "none";
    carouselInner.style.translate = `${position + moveWidth}px`;
  }
});
