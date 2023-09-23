const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const progressBar = $(".progress-bar");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

var currentTimeEl = progressBar.previousElementSibling;
var durationEl = progressBar.nextElementSibling;

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  songs: [
    {
      name: "Có người - Góc ban công",
      singer: "Lady Mây",
      path: "./assets/mp3/co-nguoi-goc-ban-cong-lady-may.mp3",
      image: "./assets/images/co-nguoi-goc-ban-cong.jpg",
    },
    {
      name: "Đã hơn một lần",
      singer: "Báo mắt biếc - Miêu quý tộc",
      path: "./assets/mp3/da-hon-mot-lan-bao-mat-biec-mieu-quy-toc.mp3",
      image: "./assets/images/da-hon-mot-lan.jpg",
    },
    {
      name: "Dưới ánh đèn sân khấu",
      singer: "Top 4 The Masked Singer",
      path: "./assets/mp3/duoi-anh-den-san-khau-top4-the-masked-singer.mp3",
      image: "./assets/images/duoi-anh-den-san-khau.jpg",
    },
    {
      name: "Giữa đêm bật khóc",
      singer: "Lady Mây - Châu Đăng Khoa",
      path: "./assets/mp3/giua-dem-bat-khoc-lady-may-chau-dang-khoa.mp3",
      image: "./assets/images/giua-dem-bat-khoc.jpg",
    },
    {
      name: "Hơn em chỗ nào",
      singer: "Tí Nâu",
      path: "./assets/mp3/hon-em-cho-nao-ti-nau.mp3",
      image: "./assets/images/hon-em-cho-nao.jpg",
    },
    {
      name: "Ngày mai người ta lấy chồng",
      singer: "Voi bản đôn",
      path: "./assets/mp3/ngay-mai-nguoi-ta-lay-chong-voi-ban-don-thanh-dat.mp3",
      image: "./assets/images/ngay-mai-nguoi-ta-lay-chong.jpg",
    },
    {
      name: "Quá khứ còn lại gì",
      singer: "Hippo Happy",
      path: "./assets/mp3/qua-khu-con-lai-gi-hippo-happy.mp3",
      image: "./assets/images/qua-khu-con-lai-gi.jpg",
    },
    {
      name: "Sợ",
      singer: "Lady Mây - Kỳ đà hoa",
      path: "./assets/mp3/so-lady-may-ky-da-hoa.mp3",
      image: "./assets/images/so.jpg",
    },
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity,
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    document.addEventListener("scroll", function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    });

    var getTime = function (seconds) {
      // Lấy phút
      var mins = Math.floor(seconds / 60);
      // Tính số giây còn lại
      seconds = Math.floor(seconds - mins * 60);
      return `${mins < 10 ? "0" + mins : mins}:${
        seconds < 10 ? "0" + seconds : seconds
      }`;
    };

    // Lấy thời gian cả bài
    audio.addEventListener("loadeddata", function () {
      durationEl.innerText = getTime(audio.duration);
    });

    // Khi tiến độ bài hát thay đổi
    audio.addEventListener("timeupdate", function () {
      currentTimeEl.innerText = getTime(audio.currentTime);
    });

    // Xử lý khi click play
    playBtn.addEventListener("click", function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    });

    // Khi song được play
    audio.addEventListener("play", function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    });

    // Khi song bị pause
    audio.addEventListener("pause", function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    });

    // Xử lý khi tua song
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    nextBtn.addEventListener("click", function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    });

    // Khi prev song
    prevBtn.addEventListener("click", function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    });

    // Xử lý bật / tắt random song
    randomBtn.addEventListener("click", function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    });

    // Xử lý lặp lại một song
    repeatBtn.addEventListener("click", function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    });

    // Xử lý next song khi audio ended
    audio.addEventListener("ended", function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    });

    // Lắng nghe hành vi click vào playlist
    playlist.addEventListener("click", function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    });
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  },
};

app.start();
