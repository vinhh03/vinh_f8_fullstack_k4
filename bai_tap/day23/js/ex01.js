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

loginSwitch.addEventListener("click", function () {
  signUpForm.classList.add("d-none");
  loginForm.classList.remove("d-none");
  loginSwitch.classList.remove("inactive");
  signUpSwitch.classList.add("inactive");
});

signUpSwitch.addEventListener("click", function () {
  signUpForm.classList.remove("d-none");
  loginForm.classList.add("d-none");
  loginSwitch.classList.add("inactive");
  signUpSwitch.classList.remove("inactive");
});

function Validator(options) {
  function validate(inputElement, rule) {
    var errorMessage = rule.test(inputElement.value);
    var errorElement = inputElement.parentElement.querySelector(
      options.errorSelector
    );
    if (errorMessage) {
      errorElement.innerText = errorMessage;
      inputElement.parentElement.classList.add("invalid");
    } else {
      errorElement.innerText = "";
      inputElement.parentElement.classList.remove("invalid");
    }
  }
  var formElement = document.querySelector(options.form);

  if (formElement) {
    options.rules.forEach(function (rule) {
      var inputElement = formElement.querySelector(rule.selector);

      if (inputElement) {
        inputElement.onblur = function () {
          validate(inputElement, rule);
        };

        inputElement.oninput = function () {
          var errorElement = inputElement.parentElement.querySelector(
            options.errorSelector
          );
          errorElement.innerText = "";
          inputElement.parentElement.classList.remove("invalid");
        };
      }
    });
  }
}

Validator.isRequired = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.trim() ? undefined : message || "Vui lòng nhập thông tin";
    },
  };
};

Validator.isEmail = function (selector, message) {
  return {
    selector: selector,
    test: function (value) {
      var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      return regex.test(value)
        ? undefined
        : message || "Vui lòng nhập đúng định dạng email";
    },
  };
};

Validator.minLength = function (selector, min, max, message) {
  return {
    selector: selector,
    test: function (value) {
      return value.length >= min && value.length <= max
        ? undefined
        : message || "Mật khẩu không đảm bảo";
    },
  };
};
