//  Tạo element
var progressBar = document.querySelector(".progress-bar");
var progress = progressBar.querySelector(".progress");
var progressSpan = progress.querySelector("span");

var progressBarWidth = progressBar.clientWidth;
var initialClientX = 0;
var currentValue = 0;
var value = 0;

progressBar.addEventListener("mousedown", function (e) {
  if (e.which === 1) {
    // console.log(e.offsetX);
    value = (e.offsetX * 100) / progressBarWidth;
    progress.style.width = `${value}%`;
    // console.log(value);
    document.addEventListener("mousemove", handelDrag);
    initialClientX = e.clientX;
    currentValue = value;
    handelInput(value);
  }
});

progressSpan.addEventListener("mousedown", function (e) {
  e.stopPropagation();
  document.addEventListener("mousemove", handelDrag);
  initialClientX = e.clientX;
});

document.addEventListener("mouseup", function () {
  document.removeEventListener("mousemove", handelDrag);
  currentValue = value;
  handelChange(value);
});

var handelDrag = function (e) {
  //   console.log(initialClientX, value);
  var moveWidth = e.clientX - initialClientX;
  value = (moveWidth * 100) / progressBarWidth + currentValue;
  if (value > 100) {
    value = 100;
  }
  if (value < 0) {
    value = 0;
  }
  progress.style.width = `${value}%`;

  handelInput(value);
};

// Nhận giá trị khi kéo, khi nhấn chuột xuống

// 1. Nhả chuột
var handelChange = function (value) {
  //   console.log(value);
};
// 2. Bấm chuột xuống và kéo
var handelInput = function (value) {
  //   console.log(value);
};

var audio = document.querySelector("audio");
var currentTimeEl = progressBar.previousElementSibling;

var durationEl = progressBar.nextElementSibling;
var playBtn = document.querySelector(".player .play-btn");

var playIcon = `<i class="fa-solid fa-play"></i>`;
var pauseIcon = `<i class="fa-solid fa-pause"></i>`;

var getTime = function (seconds) {
  // Lấy phút
  var mins = Math.floor(seconds / 60);
  // Tính số giây còn lại
  seconds = Math.floor(seconds - mins * 60);
  return `${mins < 10 ? "0" + mins : mins}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
};

// console.log(audio.duration);
// Lắng nghe sự kiện loadeddata -> Khi nào file tải xong
audio.addEventListener("loadeddata", function () {
  durationEl.innerText = getTime(audio.duration);
});

playBtn.addEventListener("click", function () {
  if (audio.paused) {
    audio.play();
    // this.innerHTML = pauseIcon;
  } else {
    audio.pause();
    // this.innerHTML = playIcon;
  }
});

audio.addEventListener("timeupdate", function () {
  currentTimeEl.innerText = getTime(audio.currentTime);
  var value = (audio.currentTime * 100) / audio.duration;
  progress.style.width = `${value}%`;
});

audio.addEventListener("play", function () {
  playBtn.innerHTML = pauseIcon;
});
audio.addEventListener("pause", function () {
  playBtn.innerHTML = playIcon;
});
