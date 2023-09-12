// var content = document.querySelector(".content");

// console.log(content.style);

// content.style.color = "red";
// content.style.fontWeight = "bold";
// content.style.textTransform = "uppercase";

// var css = {
//   color: "red",
//   fontWeight: "bold",
//   fontStyle: "italic",
//   textTransform: "uppercase",
//   backgroundImage: `url("https://fastly.picsum.photos/id/693/200/300.jpg?hmac=mVvEbAr0g-bdhrVxrz7IorqUfEy95C2hPkIT9Vm3nn8")`,
//   transform: "translateX(20px)",
// };

// Object.assign(content.style, css);

//  Bài tập: Bổ sung background-image, transition

//  Lấy giá trị thuộc tính css
// console.log(content.style.color);

var content = document.querySelector(".content");

var toggleBtn = document.querySelector(".toggle");

var time = 400;
toggleBtn.addEventListener("click", function () {
  var css = {
    transitionProperty: "opacity, visibility",
    transition: `${time}ms ease`,
    // height: 0,
    // overflow: "hidden",
  };

  Object.assign(content.style, css);

  if (content.style.opacity === "") {
    var cssFadeOut = {
      opacity: 0,
      visibility: "hidden",
    };
    Object.assign(content.style, cssFadeOut);
    setTimeout(function () {
      Object.assign(content.style, {
        height: 0,
        overflow: "hidden",
      });
    }, time);
  } else {
    var cssFadeIn = {
      opacity: "",
      visibility: "visible",
      height: "",
    };
    Object.assign(content.style, cssFadeIn);
  }
});
