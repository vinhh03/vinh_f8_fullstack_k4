const $ = function (tag) {
  return document.querySelector(tag);
};

const $$ = function (tag) {
  return document.querySelectorAll(tag);
};

var btnLogin = $(".login");
var container = $(".container");
var signUpSwitch = $(".sign-up-switch");
var loginForm = $(".login-form");
var signUpForm = $(".sign-up-form");
var loginSwitch = $(".login-switch");

btnLogin.addEventListener("click", function () {
  container.classList.add("show");
  signUpForm.classList.add("d-none");
  loginForm.classList.remove("d-none");
  loginSwitch.classList.remove("inactive");
  signUpSwitch.classList.add("inactive");
});
